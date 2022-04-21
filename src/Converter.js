import React from 'react';
import './Converter.css';


function Converter({htmlFor1, text1, id1, placeholder1, value1, htmlFor2, text2, id2, placeholder2, value2, onChangeUpdate, onReset, onFlip, disabled1, disabled2, onFlipText}) {
  console.log(text1, "was rendered")  
  // const [state, setState] = React.useState(0);
  // const [flipped, setFlipped] = React.useState(false);

  // const onChange = (event) => {
  //   setState(event.target.value);
  // }

  // const onReset = () => {
  //   setState(0);
  // }

  // const onFlip = (event) => {
  //   onReset();
  //   setFlipped((current) => !current);
  // }
  return (
    <div className="Converter">
      <div>
        <label htmlFor={htmlFor1}>{text1}: </label>
        <input 
          id={id1}
          type="number" 
          placeholder={placeholder1} 
          onChange={onChangeUpdate}
          value={value1}
          disabled={disabled1}
          />
      </div>
      <div>
        <label htmlFor={htmlFor2}>{text2}:</label>
        <input 
          id={id2}
          type="number" 
          placeholder={placeholder2}
          value={value2} 
          onChange={onChangeUpdate} 
          disabled={disabled2}
          />
      </div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>{onFlipText}</button>
    </div>
  );
}

export default Converter;