import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'


const Cosmetics = () => {
  const cosmetics =[
      {id:1 , name:'Alta', price: 201},
      {id:2 , name:'Malta', price: 301},
      {id:3 , name:'Toktaa', price: 401},
      {id:4, name:'Fotla', price: 501},
      {id:5 , name:'Kubi', price: 601},
      {id:6 , name:'dangi', price: 701},
  ]
 
  
    
    return (
        <div className='cosmetics'>
            
            {
                cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id}
                cosmetic={cosmetic}
                //    Id={cosmetic.id}
                //    Name={cosmetic.name}
                //    Price={cosmetic.price}

                > </Cosmetic>)
            }
           
        </div>
    );
};

export default Cosmetics;