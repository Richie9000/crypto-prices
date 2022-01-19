import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './coin.css';

const Coin = ({ props }) => {
  const providerData = useSelector((state) => state.mainReducer);
  const getTheTime = () => {
    const d = new Date().toLocaleString('en-US');
    return d;
  };
  return (
    <div className="wrapper-coin">
      <h1 className="title-coin">Crypto compare</h1>
      {
        providerData ? providerData[props].map((e) => (
          <div className="price-coin" key={e.USD}>
            {`${getTheTime()} - $${e.USD}`}
          </div>
        )) : null
    }
    </div>
  );
};

Coin.propTypes = {
  props: PropTypes.string.isRequired,
};
export default Coin;
