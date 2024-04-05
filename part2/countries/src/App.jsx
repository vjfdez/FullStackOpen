import { useEffect, useState } from 'react'
import axios from 'axios';
import Form from './components/Form';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(()=> {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch(error => console.log(error))
  },[]);

  const handleSearch = (event)=> {
    let results = countries.filter(item => item.name.common.toLowerCase().includes(event.target.value.toLowerCase()));
    setCountry(results);
  };

  const selectCountry = (countryName)=> {
    let results = countries.filter(item => item.name.common.toLowerCase() === countryName.toLowerCase());
    setCountry(results);
  };

  useEffect(()=> {
    if(country.length === 1){
      axios
      .get(`https://api.weatherapi.com/v1/current.json?key=7cac590dd45746a4b3f225549240404&q=${country[0].capital[0]}&aqi=no`)
      .then((response) => {
          setWeather(response.data);
      })
      .catch(error => console.log(error));
    }
  },[country]);
  
  return (
    <>  
        <Form onChanges={handleSearch}/>
        <div>
          {(()=> {
            if(country.length === 1){
              return (
                <>  
                  <h3>{country[0].name.common}</h3>
                  <p>Capital: {country[0].capital[0]}</p>
                  <p>Area: {country[0].area}</p>
                  <h4>Languages:</h4>
                  {(()=> {
                    for(let clave in country[0].languages){
                      return  (
                        <p>{country[0].languages[clave]}</p>
                      )
                    }
                  })()}
                  <img src={country[0].flags.png} alt={country[0].flags.alt} />
                  <h3>Weather in {country[0].capital[0]}</h3>
                  {
                    console.log(weather.current)
                  }
                  <p>Temperature {weather?.current?.temp_c} C</p>
                  <img src={weather?.current?.condition?.icon} alt={weather?.current?.condition?.text} />
                  <p>Wind {weather?.current?.wind_kph} Km/H.</p>
                  
                </>
              )
            } else if(country.length <= 10 && country.length >= 2) {
              return (
                <>
                  {
                    country.map((item)=> {
                      return (
                        <div key={item.area}>
                          <p>{item.name.common} <button onClick={()=>{selectCountry(item.name.common)}}>Show</button></p>
                          
                        </div>
                      ) 
                    })
                  }
                </>
              )
            } else {
              return (
                <p>To many matches, specify another filter.</p>
              )
            }
          })()}
        </div>
    </>
  ) 
}

export default App
