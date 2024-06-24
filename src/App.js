import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react'

import Display from './components/Display';
import Keyboard from './components/Keyboard';

let primaryNum;
let secondaryNum;
let operation;

function App() {
  //Number to be sent to the Display. Should be updated by several components.
  const [displayNum, setDisplayNum] = useState("0");
  const [currentNum, setCurrentNum] = useState(0);

  let artithmatic = (num) => {
    setDisplayNum(currentNum);
    console.log(displayNum);
  }

  let artithmaticSymbols = ['÷', 'x', '-', '+', '='];
  let otherSymbols = ['AC', '+/-', '%'];
  let numberSymbols = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  let extraNumberSymbols = [0, '.']

  let styles = ['light', 'dark', 'orange'];

  const incomingSymbol = (inSym) => {
    console.log(primaryNum)
    if(primaryNum === undefined){
      primaryNum = inSym;
      setDisplayNum(primaryNum);
      console.log('P')
    } else {
      secondaryNum = inSym;
      setDisplayNum(secondaryNum);
      console.log('S')
    }
    if(primaryNum != undefined && secondaryNum != undefined){
      setDisplayNum(primaryNum + secondaryNum);
      primaryNum = primaryNum + secondaryNum;
      console.log('M')
    }
  };

  return (
    <div>
      <Display displayNum={displayNum} />
      <Keyboard style={styles[2]} symbol={artithmaticSymbols} direction={'column'} />
      <Keyboard style={styles[0]} symbol={otherSymbols} direction={'row'} />
      <br />
      <Keyboard style={styles[1]} symbol={numberSymbols} direction={'row'} incomingSymbol={incomingSymbol} />
      <br />
      <Keyboard style={styles[1]} symbol={extraNumberSymbols} direction={'row'} />
      <button onClick={artithmatic}>"Do Math I guess"</button>
    </div>
  );
}

export default App;
