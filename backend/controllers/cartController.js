import userModel from '../models/userModel.js';


// Add items to user Cart

const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById({_id: req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate({_id:req.body.userId}, {cartData});
        res.json({success: true, message: "Added to Cart"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "An Error occured"});
    }
}

// Remove items from user Cart

const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById({_id: req.body.userId});
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
            if(cartData[req.body.itemId]==0){
                let newCartData = cartData;
                delete newCartData[req.body.itemId];
                cartData = newCartData;
            }
        }
        else{
            console.log("Item not in Cart");
            return res.json({success: false, message: "Item not in Cart"});
        }
        await userModel.findByIdAndUpdate({_id:req.body.userId},{cartData})
        res.json({success: true, message: "Removed from Cart"});
    } catch (error) {
        console.log(error);
        res.json({success: false, messsage: "Error occured"});
    }
}

// Fetch user cart data

const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success: true, cartData});
    } catch (error) {
        console.log(error);
        res.json({success: false, messsage: "Error occured"});
    }
}


export {
    addToCart, removeFromCart, getCart
}