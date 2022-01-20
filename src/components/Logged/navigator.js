import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import View from './views/view';
import './navigator.css';

const Navigator = () => {
  const userData = useSelector((state) => state.userReducer);
  const providerData = useSelector((state) => state.mainReducer);
  const currency = ['BTC', 'ETH', 'XRP'];
  const calculateCurrency = (value) => {
    const currencyChange = 0.20;
    const prov1 = document.getElementById('prov1');
    const prov2 = document.getElementById('prov2');
    const prov3 = document.getElementById('prov3');
    prov1.innerHTML = ((value / (currencyChange)) * providerData.providerOne[0].USD).toFixed(2);
    prov2.innerHTML = ((value / (currencyChange)) * providerData.providerTwo[0].USD).toFixed(2);
    prov3.innerHTML = ((value / (currencyChange)) * providerData.providerThree[0].USD).toFixed(2);
  };
  return (
    <Router>
      <div className="page_holder">
        <h1>{userData ? userData.name : null}</h1>
        <h1>{userData ? userData.lastName : null}</h1>
        <div className="navigator-bar">
          {currency ? currency.map((elm) => (
            <NavLink key={elm} activeClassName="selected-nav-item" className="nav-item" to={`/${elm}`}>{elm}</NavLink>
          )) : null}
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to={`/${currency[0]}`} />
          </Route>
          {currency ? currency.map((elm) => (
            <Route key={elm} path={`/${elm}`}>
              <View props={elm} />
            </Route>
          )) : null}
        </Switch>
        <div className="footer">
          <div className="footer-wrapper">
            <h1 className="title-footer">Convert (MXN)</h1>
            <input
              type="number"
              className="input-footer"
              onChange={(e) => {
                calculateCurrency(e.target.value);
              }}
            />
          </div>
          <div>
            <h1 className="footer-info">Crypto</h1>
            <h2 className="footer-number" id="prov1">0</h2>
          </div>
          <div>
            <h1 className="footer-info">Coin geko</h1>
            <h2 className="footer-number" id="prov2">0</h2>
          </div>
          <div>
            <h1 className="footer-info">Bitso</h1>
            <h2 className="footer-number" id="prov3">0</h2>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navigator;
