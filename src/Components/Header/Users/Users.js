import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Users = (props) => {
      const {name, phone, email, img, annualIncome} = props.User
      console.log(props.User);
    return (
         
        <div className="user-container">

            <div className="user-img">
               <img src={img} alt=""/>
            </div>
            
            <div className="user-body">
                <h2>Name : {name}</h2>
                <h3>Phone : {phone}</h3>
                <h3>Email : {email}</h3>
                <h3>Annual Income : {annualIncome}</h3>
                <button onClick={() => props.handleAddUser(props.User)} className="myBtn"> <FontAwesomeIcon icon={faPlusCircle} /> Add User</button>
            </div> 
        </div>

         
       
        
    );
};

export default Users;