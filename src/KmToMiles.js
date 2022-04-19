import React from 'react';
import './KmToMiles.css';


function KmToMiles() {
  const [distance, setDistance] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    setDistance(event.target.value);
  }

  const onReset = () => {
    setDistance(0);
  }

  const onFlip = (event) => {
    onReset();
    setFlipped((current) => !current);
  }
  return (
    <div className="KmToMiles">
      <div>
        <label htmlFor="km">Km: </label>
        <input 
          id="km" 
          type="number" 
          placeholder='km' 
          onChange={onChange}
          value={flipped? (distance/0.6214).toFixed(4) : distance}
          disabled={flipped}
          />
      </div>
      <div>
        <label htmlFor="miles">Miles: </label>
        <input 
          id="miles" 
          type="number" 
          placeholder='miles'
          value={flipped? distance: (distance*0.6214).toFixed(4)} 
          onChange={onChange} 
          disabled={!flipped}
          />
      </div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>{flipped? "Turn Back": "Flip"}</button>
    </div>
  );
}

export default KmToMiles;