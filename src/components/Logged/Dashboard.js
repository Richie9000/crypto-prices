import React from 'react'
import CryptoCompare from './CryptoCompare'


const Dashboard = () => {

    return (
        <div>
            <button onClick value="btc" className="btc btn">BTC</button>
            <CryptoCompare />
        </div>
    )
}

export default Dashboard

