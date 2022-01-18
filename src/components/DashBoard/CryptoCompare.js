import React, {useEffect, useState } from 'react'
import axios from 'axios'


const CryptoCompare = () => {

    
    // const KEY = bc71c61ddd980fccb2c6479240731039bdeae9cdad6e6310661749fa3fa520f6
    const [coins, setCoins] = useState([])
    console.log(coins);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("https://min-api.cryptocompare.com/data/pricemultifull", {
                params: {
                    fsyms: "BTC",
                    tsyms: "USD"
                }
            })
            setCoins(data.DISPLAY.BTC.USD.PRICE)
        }
        search()
    }, [])
     
    
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <h1>{}</h1>
                </div>
            </div>
        </div>
    )
}

export default CryptoCompare
