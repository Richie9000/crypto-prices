import React, {useEffect, useState } from 'react'
import axios from 'axios'


const CryptoCompare = () => {

    
    // const KEY = bc71c61ddd980fccb2c6479240731039bdeae9cdad6e6310661749fa3fa520f6
    const [coins, setCoins] = useState([])
    console.log(Object.entries(coins));

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get("https://min-api.cryptocompare.com/data/pricemultifull", {
                params: {
                    fsyms: "BTC",
                    tsyms: "USD"
                }
            })
            setCoins(data.DISPLAY.BTC.USD)
        }
        search()
    }, [])
     

    const renderedCoins = Object.entries(coins).map((coin) => {
        return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {coin}

                </div>
            </div>
        </div>
        )
    })

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    {renderedCoins}
                </div>
            </div>
        </div>
    )
}

export default CryptoCompare
