import foodModel from "../models/foodModel.js";
import fs from 'fs';


//add food Item

const addFood = async(req, res) => {
    console.log("Reached here for Adding Image");
    let image_filename = req.file.filename;
    // console.log(req.file);

    // console.log(image_filename);
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({success:true, message: "Food Item Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}


// all Food List 

const listFood = async(req,res) => {
    try {
        const food = await foodModel.find();
        res.json({success:true, data:food})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }   
}

// Remove Food Item

const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, (err) => {
            if(err){
                console.log(err)
            }
        })
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: 'Food Removed'
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: 'Error'
        })
    }
}




export{
    addFood, listFood, removeFood
}