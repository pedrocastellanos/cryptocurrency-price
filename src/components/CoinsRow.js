import React from 'react'

const CoinsRow = ({coin, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: "3%"}} className="me-4 img-fluid"/>
                <span>{coin.name}</span>
            </td>
            <td>
                <span className="text-uppercase">{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td 
                className={
                    coin.price_change_percentage_24h>0 ? 'text-success' : 'text-danger'
                }
            >
                {coin.price_change_percentage_24h} %
            </td>
            <td>{coin.low_24h}</td>
            <td>{coin.high_24h}</td>
            <td>{coin.total_volume.toLocaleString()}</td>
        </tr>
    )
}

export default CoinsRow
