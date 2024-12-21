import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

// eslint-disable-next-line react/prop-types
const FoodDisplay = ({category}) => {

  const {food_list, loading} = useContext(StoreContext);

  if(loading){
    return <FoodDisplaySkeleton/>
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          food_list.map((item, index)=>{
            if(category==="All" || category === item.category){
              return <FoodItem key={index} item={item}/>
            }
          })
        }
      </div>
    </div>
  )
}

export default FoodDisplay;

const FoodDisplaySkeleton = () => {
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          [1,2,3,4,5,6,7,8].map((item, index)=>{
            return <FoodItem key={index} skeleton={true}/>
          })
        }
      </div>
    </div>
  )
}