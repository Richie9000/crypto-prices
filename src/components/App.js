import React from 'react'
// import LogIn from './LogIn/LogIn'
import Dashboard from './DashBoard/Dashboard'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import LogIn from "./LogIn/LogIn"

https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&amp;ids=bitcoin%2Cethereum%2Cripple




const App = () => {
    return (
        <Router>
            <NavLink to="/Dashboard" className="" activeClassName="" >BTC</NavLink>
            <Routes>
               <Route path="/" element={<Dashboard />}/>
               
            </Routes>
        </Router>
    )

}

export default App


