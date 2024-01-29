import { useState } from 'react';
import Button from './Button';
import Counter from './Counter';
import React, { useEffect } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveAvg, setPositiveAvg] = useState(0);

  console.log(`Datos al recargar pag. Good ${good} Bad ${bad} All ${all}`)

  const goodIncrease = () => {
    setGood(good + 1)
    setAll(all + 1)
  };

  const neutralIncrease = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  };

  const badIncrease = () => {
    setBad(bad + 1)
    setAll(all + 1)
  };

  const avg = good - bad /all ;
  const positive = 100*good /all;


  if(all !==0){
    return (
      <>
        <h1>Give feedback</h1>
        <Button onSmash={goodIncrease} text="Good"/>
        <Button onSmash={neutralIncrease} text="Neutral"/>
        <Button onSmash={badIncrease} text="Bad"/>
        <h1>Statistics</h1>
        <Counter count={good} text="Good: "/>
        <Counter count={neutral} text="Neutral: "/>
        <Counter count={bad} text="Bad: "/>
        <Counter count={all} text="All: "/>
        <Counter count={avg } text="Average: "/>
        <Counter count={positive} text="% Positive: "/>
      </>
    )
  } else {
    return (
      <>
        <h1>Give feedback</h1>
        <Button onSmash={goodIncrease} text="Good"/>
        <Button onSmash={neutralIncrease} text="Neutral"/>
        <Button onSmash={badIncrease} text="Bad"/>
        <h1>Statistics</h1>
        <p>No feedback given.</p>
      </>
    )
  }
};

export default App;