import React from 'react'
import CoinsRow from './CoinsRow'

const titles = ['#', 'Coin', 'Symbol','Price', 'Price Change', '↓ Low 24h', '↑ High 24h','24h Volume']

const CoinsTable = ({coins,search}) => {
    const filteredCoins = coins.filter(coin=>(
        coin.name.toLowerCase().includes(search.toLowerCase()) |
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    ))
    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {
                        titles.map((title,index)=>(
                            <td key={index}>{title}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin,index)=>(
                    <CoinsRow coin={coin} index={index + 1} key={index}/>
                ))}
            </tbody>
        </table>
    )
}

export default CoinsTable
