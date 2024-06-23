import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react'

import './styles/index.css'; // Import global CSS

import Display from './components/Display';
import Keyboard from './components/Keyboard';
import Operations from './components/Operations';
import OtherSymbols from './components/Other';

function App() {
  //Number to be sent to the Display. Should be updated by several components.
  const [displayNum, setDisplayNum] = useState(1);
  const [currentNum, setCurrentNum] = useState(0);

  let artithmatic = () => {
    setDisplayNum(displayNum => displayNum * 2);
    console.log(displayNum);
  }

  return (
    <div>
      <Display displayNum={displayNum} />
      <Operations/>
      <OtherSymbols/>
      <Keyboard currentNum={currentNum}/>
      <button onClick={artithmatic}>"Do Math I guess"</button>
    </div>
  );
}

export default App;
