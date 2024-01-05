import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState("");
    const[result, setResult]= useState("");
    
    const changeHandler =(e)=>{
        setCity(e.target.value);
    }
    const submitHandler =(e)=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
        .then(
            response=>response.json()
        )
        .then(
            data=>{
                const kelvin = data.main.temp;
                const celcius = kelvin - 273.15;
                
                setResult("Temperature at " + city + "\n" + Math.round(celcius)+"°C")
                console.log(data)
            }
        )
        setCity("");
    
    }
   
  return (
    
      <div>
        <div className="card-body">
          <h4 className="card-title">Weather App</h4>
          <div className='card-input'>
            <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> 
          </div>
            <button type="submit" value="Get Temperature" onClick={submitHandler} >Get Temperature</button>
          
        </div>
          
          <div className='result'>
             <p>{result}</p> 
          </div>

      </div>
      
    
  
  )
}

export default Weather;