import React from 'react'

const Buttons = ({page, setPage}) => {
    if (page>3 & page!==94) {
        return (
            <>
                <button className="box border-0 bg-dark text-light" disabled>...</button>
                <button className="box border-0 box-active" onClick={()=>setPage(page)}>{page}</button>
            </>
        )
    } else if(page ===94){
        return (
            <>
                <button className="box border-0 bg-dark text-light" disabled>...</button>
                <button className="box border-0 box-active" onClick={()=>setPage(94)}>94</button>
            </>
        )
    }
    return (
        <>
            <button className={page===2 ? "box border-0 box-active":"box border-0 bg-dark text-light"} onClick={()=>setPage(2)}>2</button>
            <button className={page===3 ? "box border-0 box-active":"box border-0 bg-dark text-light"} onClick={()=>setPage(3)}>3</button>
        </>
    )
}

export default Buttons
