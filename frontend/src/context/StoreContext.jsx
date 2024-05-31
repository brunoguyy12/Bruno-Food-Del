import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url="http://localhost:4000";
    const [token, setToken] = useState("");
    const [food_list, setFood_list] = useState([]);


    const addToCart = async(itemId)=>{
        // console.log("Executing the Add to Cart Function")
        if(!cartItems[itemId]){
            setCartItems({...cartItems, [itemId]:1})
        }
        else{
            setCartItems({...cartItems, [itemId]:cartItems[itemId]+1})
        }
        if(token){
            // console.log("Reached the Token checked function for add")
            await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}});
        }
    }

    const removeFromCart = async (itemId)=>{
        // console.log("Executing the Remove From Cart Function")
        if(cartItems[itemId] === 1){
            let newCartItems = {...cartItems}
            delete newCartItems[itemId]
            setCartItems(newCartItems)
        }
        else{
            setCartItems({...cartItems, [itemId]:cartItems[itemId]-1})
        }
        if(token){
            // console.log("Reached the Token checked function for remove")
            await axios.post(url+"/api/cart/remove", {itemId}, {headers:{token}});
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(let item in cartItems){
            // totalAmount += food_list.find((food)=>food._id === item).price * cartItems[item]
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((food)=>food._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async() => {
        const response = await axios.get(url+"/api/food/list");
        // const data = await response.json();
        setFood_list(response.data.data);
    }

    const loadCartData = async(token) => {
        try {
            const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}});
            setCartItems(response.data.cartData);
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(() => {
      async function loadData(){
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
        await fetchFoodList();
      }
      loadData();
    }, [token])
    


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;