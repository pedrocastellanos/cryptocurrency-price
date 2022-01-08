import React from 'react'
import Buttons from './Buttons'

const Pagination = ({page, setPage}) => {
    const handlePrev = () => setPage(page-1)    
    const handleNext = () => setPage(page+1)

    return (
        <div className="mx-auto mb-3">
            {page !== 1 &&
                <button className="special-box border-0 bg-dark text-light" onClick={handlePrev}>«Prev</button>
            }
            <button className={page===1 ? "box border-0 box-active":"box border-0 bg-dark text-light"} onClick={()=>setPage(1)}>1</button>
            <Buttons page={page} setPage={setPage}/>
            {(page !== 94) && (page !== 93) &&
                <>
                    <button className="box border-0 bg-dark text-light" disabled>...</button>
                    <button className="box border-0 bg-dark text-light" onClick={()=>setPage(94)}>94</button>
                    <button className="special-box border-0 bg-dark text-light" onClick={handleNext}>Next»</button>  
                </>
            }
            {page === 93 &&
                <>
                    <button className="box border-0 bg-dark text-light" onClick={()=>setPage(94)}>94</button>
                    <button className="special-box border-0 bg-dark text-light" onClick={handleNext}>Next»</button>  
                </>
            }
        </div>
    )
}

export default Pagination

