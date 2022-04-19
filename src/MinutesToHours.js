import React from 'react';
import './MinutesToHours.css';


function MinutesToHours() {
  const [time, setTime] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    setTime(event.target.value);
  }

  const onReset = () => {
    setTime(0);
  }

  const onFlip = (event) => {
    onReset();
    setFlipped((current) => !current);
  }
  return (
    <div className="MinutesToHours">
      <div>
        <label htmlFor="minutes">Minutes: </label>
        <input 
          id="minutes" 
          type="number" 
          placeholder='Minutes' 
          onChange={onChange}
          value={flipped? time*60 : time}
          disabled={flipped}
          />
      </div>
      <div>
        <label htmlFor="hours">Hours: </label>
        <input 
          id="hours" 
          type="number" 
          placeholder='Hours'
          value={flipped? time: time/60} 
          onChange={onChange} 
          disabled={!flipped}
          />
      </div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>{flipped? "Turn Back": "Flip"}</button>
    </div>
  );
}

export default MinutesToHours;