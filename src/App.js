import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App(){
const [universities,setUniversities] = useState([])

useEffect(()=>{
  axios
    .get('http://universities.hipolabs.com/search?country=United+States')
  .then((response)=>{
    setUniversities(response.data)
   })
   .catch((error)=>{
    console.log(error)

   })
}, [] )

return(
   <div>
      <h1>Fetching of data</h1>
      <h2>universities in the United States</h2>
      <ul>
        {universities.map((university)=>(
          <li key={university.name}>{university.name}</li>
        ))}
      </ul>

   </div>
 )
}
export default App;