import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('fake-data.json')
        .then(res => res.json())
        .then( data => setUsers(data))
    },[])

    return (
        <div className='users'>
            {
                users.map(user => <User
                User={user}
                ></User>)
            }
            
        </div>
    );
};

export default Users;