import React, { useState } from 'react';
import './Hooks.css'

const Hooks = () => {
    const [number , setNumber] = useState(0);

     const handleNumber =() =>{
         setNumber(number +1);
         const vul = document.getElementById('error')
         vul.innerHTML=''
     }
     const numberDecrement =()=>{
         setNumber(number -1);

         if(number <=0){
     const vul = document.getElementById('error');
     vul.innerHTML='please never count less than zero'
    //  vul.style.display=block;
         }
         else{
             return true
         }
     }
    return (
        <div>
             <h2>{number} </h2>
            <h2>{number} </h2>
            <button onClick={handleNumber}>Increment</button>
            <button onClick={numberDecrement}>  Decrement</button>
           <p className='error' id='error' style={{display:'block'}}> </p>
           
        </div>
    );
};

export default Hooks;