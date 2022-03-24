import React from 'react';
import './User.css'
const User = (props) => {
   const {_id,name,gender,picture,emaail,company,age,eyeColor} = props.User;
    return (
        <div className='user'>
            <h6>ID: {_id}</h6>
            <h5>Name: {name}</h5>
            <img src={picture} alt="" />
            <h4>Gender: {gender}</h4>
        </div>
    );
};

export default User;