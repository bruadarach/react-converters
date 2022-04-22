import React from 'react';
import './App.css';
import Converter from './Converter'
import PropTypes from 'prop-types'

const MemorizedConverter = React.memo(Converter)

MemorizedConverter.propTypes = {
  htmlFor1: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  id1: PropTypes.string.isRequired,
  placeholder1: PropTypes.string.isRequired,
  value1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  htmlFor2: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  id2: PropTypes.string.isRequired,
  placeholder2: PropTypes.string.isRequired,
  value2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChangeUpdate: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onFlip: PropTypes.func.isRequired,
  disabled1: PropTypes.bool.isRequired,
  disabled2: PropTypes.bool.isRequired,
  onFlipText: PropTypes.string.isRequired,
}

function App() {
  const [index, setIndex] = React.useState("0")
  const onChange = (event) => {
    setIndex(event.target.value);
    onReset();
  }

  const [state, setState] = React.useState(0);
  const onChangeUpdate = (event) => {
    setState(event.target.value);
  }

  const [flipped, setFlipped] = React.useState(false);
  const onReset = () => {
    setState(0);
  }

  const onFlip = () => {
    onReset();
    setFlipped((current) => !current);
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
        {index==="1" ? <MemorizedConverter htmlFor1="minutes" text1="Minutes" id1="minutes" placeholder1="Minutes" value1={flipped? state*60: state} htmlFor2="hours" text2="Hours" id2="hours" placeholder2="Hours" value2={flipped? state: state/60} onChangeUpdate={onChangeUpdate} onReset={onReset} onFlip={onFlip} disabled1={flipped} disabled2={!flipped} onFlipText={flipped? "Turn Back": "Flip"}/> : null}
        {index==="2" ? <MemorizedConverter htmlFor1="km" text1="Km" id1="km" placeholder1="Km" value1={flipped? (state/0.6214).toFixed(4) : state} htmlFor2="miles" text2="Miles" id2="miles" placeholder2="Miles" value2={flipped? state: (state*0.6214).toFixed(4)} onChangeUpdate={onChangeUpdate} onReset={onReset} onFlip={onFlip} disabled1={flipped} disabled2={!flipped} onFlipText={flipped? "Turn Back": "Flip"}/> : null}
      </div>
    </div>
  )
}
export default App;
