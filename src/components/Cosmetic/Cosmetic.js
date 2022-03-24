import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
  const {id, name, price} = props.cosmetic;
  const addToCart = (id) =>{
   
    addToDb(id)                    //this function came from fakedb
  }

  const removeFromCart = id =>{
   removeFromDb(id)              //this function came from fakedb
  }

    return (
        <div className='cosmetic-container'>
           <div className='cosmetic'>
           <h4> ID: {id}</h4>
            <h4> Name: {name}</h4>
            <h4> Price: {price}</h4>
            <button onClick={ ()=> addToCart(id)}> Add To cart </button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
           </div>
        </div>
    );
};

export default Cosmetic;