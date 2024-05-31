import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from 'validator';


// Login user 

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        //Check if user exists
        const user = await userModel.findOne({email});
        if(!user){
            console.log("User not found")
            res.json({success:false, message: "User not found"})
        }

        //Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Invalid Password")
            return res.json({success:false, message: "Invalid Password"})
        }

        //Create Token
        const token = createToken(user._id);
        res.json({success:true, token, user})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message: "Something went wrong..."})
    }
}

// Create a Token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}



// Register User 

const registerUser = async (req, res) => {
    // console.log("Reached the register user function")
    const {name, password, email} = req.body;
    try {
        //Check if user alread exists 
        const exists = await userModel.findOne({email});
        if (exists) {
            console.log("User already exists")
            return res.json({success:false, message: "User already exists"});     
        }

        //Validate email & Strong Password
        if (!validator.isEmail(email)) {
            console.log("Please Enter a valid email")
            return res.json({success: false, message: "Please enter a valid email"})
        }
        if (password.length < 8) {
            console.log("Password must be atleast 8 characters long")
            return res.json({success:false, message: "Password must be atleast 8 characters long"})
        }

        //Hashing user Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create new User
        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true, token, user});

    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Something went wrong..."})
    }
}


export {
    loginUser, registerUser
}