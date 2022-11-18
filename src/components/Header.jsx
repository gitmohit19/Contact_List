import React, { useContext } from 'react';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../App';
import './Login.css'
const Header = () => {
    const localContext=useContext(GlobalContext);
    const {store,setStore}=localContext;

    const logOutFn=()=>{
      setStore({
        ...store,
        loginStatus:false,
        username:''
      })
    }

    
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80, color:'white' }}>
        <h3 className='title'>Infinite_Contact</h3>
          <div className='header'>
          <Link to="/">Home</Link>

           {
            store.loginStatus ? (<Link to="/login" onClick={logOutFn}>Logout</Link>)
            :
            (<Link to="/login">Login</Link>)
           }


          </div>
   </Navbar>
    )
}

export default Header