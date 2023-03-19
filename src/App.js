import React, {useState} from 'react';
import axios from 'axios';
import './index.css';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  // const image =
  //   ['qingbao-meng-01_igFr7hd4-unsplash.jpg',
  //   'v2osk-1Z2niiBPg5A-unsplash.jpg',
  //   'robert-lukeman-_RBcxo9AU-U-unsplash.jpg',
  //   'david-marcu-78A265wPiO4-unsplash.jpg',
  //   'adam-kool-ndN00KmbJ1c-unsplash.jpg']


const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1fdebf3538a524128dbc8cb6302ece8a`

  const searchLocation = (event)=>{
    if(event.key === 'Enter'){
      axios.get(URL).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    }
    return (
      <div className="App">
        <div className='search'>
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='For weather enter a city'
          type="text"
          className='input'/>
        </div>
       <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1>: null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main} </p>: null}
          </div>
        </div>

        {data.name !== undefined &&
                <div className='bottom'>
                <div className='feels'>
                  {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p>: null}
                  <p>Feels like</p>
                </div>
                <div className='humidity'>
                  {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p>: null}
                  <p>Humidity</p>
                </div>
                <div className='wind'>
                  {data.wind ?<p className='bold'>{data.wind.speed.toFixed()}km/h</p>: null}
                  <p>Wind Speed</p>
                </div>
              </div>}

       </div>
      </div>
    );
  }



export default App;
