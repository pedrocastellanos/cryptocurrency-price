import React from 'react'

const Select = ({setCurrency}) => {
    return (
        <select className="mx-auto mt-3 bg-dark text-light border-0" onChange={(e=>setCurrency(e.target.value))}>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='gbp'>GBP</option>
            <option value='chf'>CHF</option>
            <option value='cad'>CAD</option>
            <option value='cny'>CNY</option>
            <option value='jpy'>JPY</option>
            <option value='nzd'>NZD</option>
        </select>
    )
}

export default Select
