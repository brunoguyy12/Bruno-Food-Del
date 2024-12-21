import { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({item, skeleton}) => {
    const { cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

    if(skeleton){
        return (
            <div className='food-item min-h-[380px]'>
                <div className="food-item-img-container h-[232px]">
                    <Skeleton className="h-full rounded-t-2xl"/>
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <Skeleton className="w-[100px] h-4 rounded-md"/>
                    </div>
                    <div className="space-y-1 food-item-desc">
                        <Skeleton className="w-full h-3 rounded-md"/>
                        <Skeleton className="w-[150px] h-3 rounded-md"/>
                    </div>
                    <div className="food-item-price">
                        <Skeleton className="w-[50px] h-4 rounded-md"/>
                    </div>
                </div>        
            </div>
        )
    }

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={url+"/images/"+item.image} alt={item.name} className='food-item-image'/>   
            {
                !cartItems[item._id] ? <img src={assets.add_icon_white} alt='' className='add' onClick={()=>addToCart(item._id)}/>
                : <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[item._id]}</p>
                    <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />
                </div>
            } 
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{item.name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{item.description}</p>
            <p className="food-item-price">${item.price}</p>
        </div>        
    </div>
  )
}
FoodItem.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
    skeleton: PropTypes.bool
};

export default FoodItem;

  
  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
  

  const Skeleton = ({ className = "w-[100px] h-[100px]" }) => {
    return (
      <div className={`${className} *:w-full *:h-full overflow-hidden`}>
        <div
          className={`bg-neutral-200 overflow-hidden  relative ${shimmer}`}
        ></div>
      </div>
    );
  };

  Skeleton.propTypes = {
    className: PropTypes.string,
  };
  