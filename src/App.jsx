import './App.css'
import { useState, useEffect } from 'react'
import Locations from './components/Locations';
import Weather from './components/Weather';
import CityForm from './components/CityForm';

// Question: What is component based architecture?
// Answer: A way of building applications by breaking them down into smaller, reusable components.

// Question: What Material UI is?
// Answer: A React component library that allows us to use pre-built components.

// Question: What can you end a React file in 
// Answer: .jsx, .js,

// Question: What is state?
// Answer: It's an object that stores data and triggers re-renders when updated.

// Question: What is a hook?
// Answer: It's a react function, that allows us to impact state and react components life cycles.

const cities = [
  { name: "New York", latitude: 40.7128, longitude: -74.0060 },
  { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { name: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { name: "Houston", latitude: 29.7604, longitude: -95.3698 },
  { name: "Phoenix", latitude: 33.4484, longitude: -112.0740 },
  { name: "Philadelphia", latitude: 39.9526, longitude: -75.1652 },
  { name: "San Antonio", latitude: 29.4241, longitude: -98.4936 },
  { name: "San Diego", latitude: 32.7157, longitude: -117.1611 },
  { name: "Dallas", latitude: 32.7767, longitude: -96.7970 },
  { name: "San Jose", latitude: 37.3382, longitude: -121.8863 }
];

function App() {
  const [cityCoordinates, setCityCoordinates] = useState(cities);
  const [location, setLocation] = useState({
    name: "San Diego", 
    latitude: 32.7157, 
    longitude: -117.1611
  });

  const [weather, setWeather] = useState({ temp:0, code:0 });

  // Question: What are the component life cycles stages?
  // Answer: Mounting - Rendering the component for the first time
  //         Updating - When the component is updated
  //         Unmounting - When the component is removed from the DOM

  // Question: When does useEffect run?
  // Answer: It runs after the component is mounted and after every update.

  // Question: What happens, if we do not pass useEffect a dependency array while updating state during useEffect?
  // Answer: It will run after every render, causing an infinite loop.

  useEffect(() => {
    getWeather(location.latitude, location.longitude);
  }, [location]);

  const getWeather = async (latitude, longitude) => {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&timezone=auto`);
    const data = await res.json();
    console.log(data);
    const currentTime = getTime();
    const idx = data.hourly.time.indexOf(currentTime);
    console.log(currentTime);

    const current_temp = data.hourly.temperature_2m[idx];
    const current_code = data.hourly.weathercode[idx];
    console.log(current_temp);
    console.log(current_code);
    setWeather({ temp: current_temp, code: current_code });

  };

  const getTime = () => {
    const currentTime = new Date();

    // rounds to the hour
    currentTime.setMinutes(0,0,0);
    return currentTime.toISOString().slice(0, 13) + ":00";
  };

  const handleLocation = newLocation => {
    setLocation(newLocation);
  }

  const handleUpdateCity = (city) => {
    setCityCoordinates((prev) => {
      return [...prev, city];
    });
  };

  return (

    // Question: What are fragments?
    // Answers: Allows ut to nest our JSX, 
    // so we don't need to return an html tag, 
    // saving us from dealing with CSS. We need them because JSX ness a 
    // nested parent tag to render our JSX.

    // Question: When we want to bring data into a child component from a parent, we do so through props using a key: value pair.
    <>
      <Locations cityCoordinates={cityCoordinates}
      handleLocation={handleLocation}/>
      <Weather weather={weather} />
      <CityForm handleUpdateCity={handleUpdateCity} />
    </>
  )
}

export default App
