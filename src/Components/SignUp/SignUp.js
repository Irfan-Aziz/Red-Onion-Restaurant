import React, { useState } from 'react';
import logo from '../../resources/logo2.png'
import Auth from '../useAuth/useAuth';
import './SignUp.css'

const SignUp = () => {
    const [userInfo,setUserInfo]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const [newUser,setNewUser]=useState(true);
    const auth=Auth();

    const handleSubmit = e => {
        if(e.target.password.value === e.target.confirmPass.value){
            auth.createUser(userInfo.name, userInfo.email, userInfo.password);
        }else{
            alert('Password did not match.');
        }
        e.preventDefault();
    }

   
    const handleSignIn = e => {
        auth.signInUser(userInfo.email, userInfo.password);
        e.preventDefault();
    }

    const handleGoogleSignIn = e => {
        auth.signInWithGoogle(userInfo.email, userInfo.password);
        e.preventDefault();
    }
    const handleChange=e=>{
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="signup-page">
            <img src={logo} alt=""/>
            {!auth.user.name && newUser &&<form onSubmit={handleSubmit}>
                <input type="text"
                name="name"
                value={userInfo.name}
                placeholder="Name"
                onChange={handleChange}
                required/> <br/>
                <input type="text"
                     name="email"
                     value={userInfo.email} 
                     placeholder='Email'
                     onChange={handleChange}
                     required
                /> <br/>
                <input type="password"
                name="password" 
                value={userInfo.password} 
                placeholder='Password'
                onChange={handleChange}
                required
                /> <br/>
                <input type="password"
                name="confirmPassword"
                value={userInfo.confirmPass} 
                placeholder='Confirm Password'
                onChange={handleChange}
                required
                /> <br/>
                <input type="submit"
                className="btn btn-primary"
                value='Sign Up'/>
                </form>
                }
                 {
                !auth.user.name && !newUser && <form onSubmit={handleSignIn}>
                    <input type='text' 
                    name="email"
                    value={userInfo.email} 
                    placeholder='Email'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='password'
                    name="password" 
                    value={userInfo.password} 
                    placeholder='Password'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='submit' 
                    className="btn btn-primary" 
                    value='Log In'
                ></input>
                </form>                
            }  
            
            {!auth.user.name && <button className="btn btn-success" onClick={handleGoogleSignIn}>Continue With Google</button>}
            <br/>
            {!auth.user.name && newUser && <button className="btn btn-danger" onClick={()=>setNewUser(false)}>Existing User</button>}
            
            {!auth.user.name && !newUser && <button className="btn btn-danger" onClick={()=>setNewUser(true)}>Create Account</button> }    
            <br/>
               
            { auth.user.name && <a className="btn btn-success" href="/">Order More</a>}
            { auth.user.name && <a className="btn btn-danger" href="/order">Place Order</a>}
            
            
        </div>
    );
};

export default SignUp;