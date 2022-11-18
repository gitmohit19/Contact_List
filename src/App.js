import React, { useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';


export const GlobalContext=React.createContext();

function App() {   

  const initialObj = {
    loginStatus: false,
    userName:'',
    passWord:''
  }
  const [store,setStore]=useState(initialObj);
  useEffect(() => {
    console.log('Context - ', store);
  }, [store])
  return (
    <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Contact_List</title>
                <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
        <BrowserRouter>
        <GlobalContext.Provider value={{store, setStore}}>
      
          <Header/>
              <Routes>

                   {
                    store.loginStatus && (<Route exact path='/' element={<Home/>}/>)
                   }
                  <Route ecact path='/login' element={<Login/>}/>

              </Routes>
        </GlobalContext.Provider>
        </BrowserRouter>

    </>
  );
}

export default App;
