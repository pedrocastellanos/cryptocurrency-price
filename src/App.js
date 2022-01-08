import React, {useState ,useEffect, useCallback} from 'react';
import axios from 'axios'
import CoinsTable from './components/CoinsTable';
import Pagination from './components/Pagination';
import Select from './components/Select';
import Footer from './components/Footer';


function App() {
  const [coins, setCoins] = useState([])
  const [currency, setCurrency] = useState('usd')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  
  const getData = useCallback(async () =>{
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
      setCoins(res.data)
    }, [page, currency],)

  
  useEffect(()=>{
    getData()
  },[currency,page, getData])

  
  return (
    <div className="container">
      <h1 className="text-center mt-4">Coin Price</h1>
      <div className="row">
        <input type="text" className="form-control bg-dark text-light border-0 mt-4 text-center" placeholder="Search a Coin" onChange={e=>setSearch(e.target.value)}/>
        <Select setCurrency={setCurrency}/>
        <CoinsTable coins={coins} search={search}/>
        <Pagination page={page} setPage={setPage}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
