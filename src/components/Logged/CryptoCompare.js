import React, {useEffect, useState } from 'react'
import axios from 'axios'


const CryptoCompare = () => {

    
    // const KEY = bc71c61ddd980fccb2c6479240731039bdeae9cdad6e6310661749fa3fa520f6
    const [coins, setCoins] = useState([])


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

      const setInt = setInterval (() =>{
            search()
        }, 5000)

        return () => {
            setInt.clearInterval()
             }
    }, [])
     

    const renderedCoins = 
       (
        <div className="item">
            <div className="content">
                <div class  Name="header">
                CRYPTO COMPARE
                <br />
                {Object.entries(coins)[3] + new Date ().toLocaleString("en-US")}
                </div>
            </div>
        </div>
        )
    
            if(coins.length === 0){
                return null
            }else{
                return(
                    <div className="coin-container">
                        <div className="coin-row">
                            <div className="coin">
                                {renderedCoins}
                            </div>
                        </div>
                    </div>
                )
            }
}

export default CryptoCompare
