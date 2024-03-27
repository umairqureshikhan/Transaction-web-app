// import React from 'react'
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Login from '../Login';
import Signup from '../Signup';
import Header from '../Header';
import Transaction from '../Transaction';
// import Sidebar from '../Sidebar';
import CreateTransaction from '../CreateTransaction';
import CreateWallet from '../CreateWallet';
import AddnewCategory from "../AddnewCategory";

const Index = () => {
  return (
    <div>
      <div>
      {/* <Sidebar /> */}

      </div>

  <BrowserRouter>

<Routes>

        
        <Route path="/" Component={Login}></Route>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/header" Component={Header}></Route>
        <Route path="/transaction" Component={Transaction}></Route>
        <Route path="/Createtransaction" Component={CreateTransaction}></Route>
        <Route path="/CreateWallet" Component={CreateWallet}></Route>
        <Route path="/Addnewcategory" Component={AddnewCategory}></Route>


        



 
      </Routes>

      </BrowserRouter>

    </div>
  )
}

export default Index