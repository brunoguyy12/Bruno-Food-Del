
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Add.css'
import { assets } from '../../assets/assets'
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

const Add = ({url}) => {

  const [image , setImage ] = useState(false);
  const [data,   setData]  = useState({
    name: '', description: '', category: 'Salad', price: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]: value});
  }
  
  const onSubmitHandler = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', Number(data.price))
    formData.append('category', data.category)
    formData.append('image', image)
    // console.log(image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    // console.log(response);
    if(response.data.success){
      // console.log(response.data.success);
      setData({name: '', description: '', category: 'Salad', price: ''});
      setImage(false);
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
      console.log("Error encountered")
    }

  }

  return (
    <div className='add'>
      <form className='flex flex-col' onSubmit={onSubmitHandler}> 
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image" className=' w-fit block'>
            {
              image?
              <img src={URL.createObjectURL(image)} alt="" className=' w-[120px]' />
              :
              <div className='w-[120px] bg-gray-50 p-5 flex items-center justify-center 
                flex-col border-2 border-dotted border-gray-300 cursor-pointer
                 group hover:border-solid hover:border-gray-400 hover:bg-gray-100'>
                <IoCloudUploadOutline className=' text-[25px] text-neutral-400 group-hover:text-neutral-500'/>
                <p className=' text-[max(1vw,12px)] text-neutral-400 group-hover:text-neutral-500'>Upload</p>
              </div>
            }
            
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} name='image' type="file" id="image" hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here'/>
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name='description' placeholder='Write content here' rows="6" required/>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" onChange={onChangeHandler} value={data.category}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' required placeholder='$20' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add