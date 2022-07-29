import {useState,useEffect} from "react"
import axios from "axios"

function App() {
  const options = {
    method: 'GET',
    url: 'https://numbersapi.p.rapidapi.com/6/21/date',
    params: {fragment: 'true', json: 'true'},
    headers: {
      'X-RapidAPI-Key': 'ce6e8d6e9fmsh76f2de7f73d6ddfp1d3fb2jsnde8c953972b0',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    },
  };
  
  const [data,setData] = useState({})
  const [inputSatet,setInputstate]=useState("")

  const fetchNumberData = async () => {
    const res = await axios.request(options).catch((err) => console.log(err));

    setData(res);
    console.log(res);
  }

  useEffect(() => {
    fetchNumberData()
  },[])
  
const search = () =>{
  options.url = `https://numbersapi.p.rapidapi.com/${inputSatet}/date`;
  fetchNumberData();
}


  
  return (
    <div>
     <input type="text" onChange={(input) => setInputstate(input.target.value)}
        />
      <button onClick={() =>{
        search()
      }}>Search</button>
      <h1>{data.data?.text}</h1>
    </div>
  );
}

export default App;
