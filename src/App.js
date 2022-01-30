import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from 'axios'
import { useState, useRef } from "react";
import { LinearProgress } from '@mui/material'


function App() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState('none')


  const clickHandler =  () => {
    setIsLoading('loading')

    setTimeout( async() => {
      const res = await axios.get('https://reqres.in/api/users?page=1')
      setData(res?.data?.data)
      setIsLoading('loaded')

    },2000) 
    
  }

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar clickHandler={clickHandler} />
      <main className="container mx-auto p-6">
        {
          (isLoading === 'loading') ? (
            <div className='mt-48 w-5/12 mx-auto'>

              <LinearProgress />
            </div>
          ) : (

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6">

              {
                data.map((person, index) => (
                  <Card person={person} key={index} />
                ))
              }
            </div>

          )

        }
      </main>
      {/* Main  */}
    </div>
  );
}

export default App;
