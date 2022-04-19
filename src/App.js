import React from 'react';
import './App.css';
import KmToMiles from './KmToMiles';
import MinutesToHours from './MinutesToHours'

function App() {
  const [index, setIndex] = React.useState("0")
  const onChange = (event) => {
    setIndex(event.target.value);
  }
  return(

    <div>
      <h1>Converters</h1>
      <select
        className='appSelect'
        onChange={onChange}
        value={index}
      >
        <option value="0">Select Your Unit</option>
        <option value="1">Minutes to Hours</option>
        <option value="2">Km to Miles</option>
      </select>
      <div>
        {index==="0" ? "Please select your unit" : null}
        {index==="1" ? <MinutesToHours /> : null}
        {index==="2" ? <KmToMiles /> : null}
      </div>
    </div>
  )
}

export default App;
