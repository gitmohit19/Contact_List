import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const localContext=useContext(GlobalContext);
    const {store,setStore}=localContext;

    const usernameFn = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    const passwordFn = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    const loginFn = async () => {
           if(username==='foo' && password==='bar'){

            setStore({
              ...store,
              loginStatus:true,
              userName: username,
              passWord: password
            })
            navigate('/', {state: {username:username, password:password}});
           }else{
            navigate('/login');
           }
        }
      
     
    return (
      <>
      <div className='forms-group' >
           <form className="forms">
           <label htmlfor='email' >Email</label>
           <br></br>
           <br></br>
           <input className='inputLogin' type="text" id="name" placeholder='Enter your email' onBlur={usernameFn}/>
           <br></br>
           <br></br>

           <label htmlfor='password'>Password</label>
           <br></br>
           <br></br>
           <input className='inputLogin' type="password" id="password" placeholder='Enter your password' onBlur={passwordFn}/>
           <br></br>
           <br></br>
              <div>
             <span>
             <button className='button-login mx-3 p-2' onClick={loginFn}>Login</button>
             </span>
              </div>
            <br></br>
        </form>
     
    <br></br>
   <br></br>
   </div>
    <br></br>
    <br></br> 
         
      </>    
    )
}

export default Login


