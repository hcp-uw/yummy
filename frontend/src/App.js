import React, { useState } from 'react';
import './App.css';
import Layout from './Components/Layout';

const cuisineOptions = [
  {label: "Chinese", value: "chinese"}, 
  {label: "Italian", value: "italian"}
]

const servingOptions = [
  {label: "One", value: "one"}, 
  {label: "Two", value: "two"}
]


// recipe display page
function App() {
  const [prepTime, setPrepTime] = useState(false);
  const [totalTime, setTotalTime] = useState(false);

  const [cuisine, setCuisine] = useState(false);
  const [servings, setServings] = useState(false);


  const [totalMinutes, setTotalMinutes] = useState(1);
  const [prepMinutes, setPrepMinutes] = useState(1);

  const handleTotalClick = () => {
    setTotalTime(!totalTime);
  }

  const handleCuisineClick = () => {
    setCuisine(!cuisine);
  }

  const handleServingsClick = () => {
    setServings(!servings);
  }

  const handlePrepClick = () => {
    setPrepTime(!prepTime);
  }

  return (
      <Layout>
        <div class="filterArea">
          <button type="button" onClick={handleCuisineClick}>Cuisine</button>
          {cuisine && (
            <div>
              <select>
                  {cuisineOptions.map(option => <option value={option.value} label={option.label}></option>)}
              </select>
            </div>
          )}
          <button type="button" onClick={handleServingsClick}>Servings</button>
          {servings && (
            <div>
              <select>
                  {servingOptions.map(option => <option value={option.value} label={option.label}></option>)}
              </select>
            </div>
          )}
          <button type="button" onClick={handleTotalClick}>Total time</button>
          {totalTime && (
            <div>
              <input
               type="range"
                min={1}
                max={180}
                step={1}
                value={totalMinutes}
                onChange={event => {
                  setTotalMinutes(event.target.valueAsNumber)}}/>
            <p>Total time: {totalMinutes} minutes</p>
            </div>
          )}
          <button type="button" onClick={handlePrepClick}>Prep time</button>
          {prepTime && (
            <div>
              <input
               type="range"
                min={1}
                max={180}
                step={1}
                value={prepMinutes}
                onChange={event => {setPrepMinutes(event.target.valueAsNumber)}}/>
            <p>Prep time: {prepMinutes} minutes</p>
            </div>
          )}
        </div>
      </Layout>
  );
}

export default App;
