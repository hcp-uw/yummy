import React, { useState } from 'react';
import './App.css';
import Layout from './Components/Layout';

// recipe display page
function App() {
  const [prepTime, setPrepTime] = useState(false);
  const [totalTime, setTotalTime] = useState(false);
  const [totalMinutes, setTotalMinutes] = useState(1);
  const [prepMinutes, setPrepMinutes] = useState(1);

  const handleTotalClick = () => {
    setTotalTime(!totalTime);
  }

  const handlePrepClick = () => {
    setPrepTime(!prepTime);
  }

  return (
      <Layout>
        <div class="filterArea">
          <button type="button">Cuisine</button>
          <button type="button">Servings</button>
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
