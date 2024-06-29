import './App.css';
import { useState } from 'react'

import Display from './components/Display';
import Keyboard from './components/Keyboard';

let primaryNum;
let secondaryNum;
let operation;
let isDecimal = false;
let refreshNum = true;

function App() {
  //Number to be sent to the Display. Should be updated by several components.
  const [displayNum, setDisplayNum] = useState(0);

  let artithmatic = (operation) => {
    let ans;
    switch (operation) {
      case ('Multiplication'):
        ans = Number(primaryNum) * Number(secondaryNum)
        setDisplayNum(ans)
        primaryNum = (ans)
        break;
      case ('Addition'):
        console.log('test')
        ans = Number(primaryNum) + Number(secondaryNum)
        setDisplayNum(ans)
        primaryNum = (ans)
        break;
      case ('Subtraction'):
        ans = Number(primaryNum) - Number(secondaryNum)
        setDisplayNum(ans)
        primaryNum = (ans)
        break;
      case ('Division'):
        ans = Number(primaryNum) / Number(secondaryNum)
        setDisplayNum(ans)
        primaryNum = (ans)
        break;
      default:
        console.log('No operation')
      break;
    }
  }

  let artithmaticSymbols = ['÷', 'x', '-', '+', '='];
  let otherSymbols = ['AC', '+/-', '%'];
  let numberSymbols1 = [7, 8, 9];
  let numberSymbols2 = [4, 5, 6];
  let numberSymbols3 = [1, 2, 3];
  let extraNumberSymbols = [0, '.']

  let styles = ['light', 'dark', 'orange'];

  let setNums = (number) => {
    if (primaryNum === undefined) {
      primaryNum = number
    } else {
      secondaryNum = number
      artithmatic(operation)
      console.log(`${primaryNum}, ${secondaryNum}, ${operation}`)
    }
  }

  const incomingSymbol = (inSym) => {
    switch (inSym) {
      case("AC"):
        setNums(0)
        setDisplayNum(0);
        primaryNum = undefined;
        secondaryNum = undefined;
        operation = undefined;
        isDecimal = false;
        inSym = 0;
        refreshNum = true;
      break;
      case ("x"):
        refreshNum = false;
        setNums(displayNum)
        operation = 'Multiplication'
        break;
        case ("+/-"):
          setDisplayNum(displayNum * -1)
          primaryNum = undefined;
          secondaryNum = undefined;
          break;
      case ("-"):
        refreshNum = false;
        setNums(displayNum)
        operation = 'Subtraction'
        break;
      case ("+"):
        refreshNum = false;
        setNums(displayNum)
        operation = 'Addition'
        break;
      case ("÷"):
        refreshNum = false;
        setNums(displayNum)
        operation = 'Division'
        break;
      case ("="):
        refreshNum = true;
        setNums(displayNum)
        operation = 0;
        console.log(displayNum)
        break;
      case ("."):
        if (isDecimal === false) {
          setDisplayNum(displayNum => displayNum + inSym);
          isDecimal = true;
        } else {
          console.log('Cant add additional decimal points')
        }
        break;
      default:
        if (displayNum === Number(0) || refreshNum === false) {
          setDisplayNum('')
          refreshNum = true;
        }
        setDisplayNum(displayNum => displayNum.toString() + inSym.toString());
        break;
    }
  };

  return (
    <div style={{width: 599}}>
      <Display displayNum={displayNum} />
      <Keyboard style={styles[2]} symbol={artithmaticSymbols} direction={'column'} incomingSymbol={incomingSymbol} />
      <Keyboard style={styles[0]} symbol={otherSymbols} direction={'row'} incomingSymbol={incomingSymbol} />
      <br />
      <Keyboard style={styles[1]} symbol={numberSymbols1} direction={'row'} incomingSymbol={incomingSymbol} />
      <br />
      <Keyboard style={styles[1]} symbol={numberSymbols2} direction={'row'} incomingSymbol={incomingSymbol} />
      <br />
      <Keyboard style={styles[1]} symbol={numberSymbols3} direction={'row'} incomingSymbol={incomingSymbol} />
      <br />
      <Keyboard style={styles[1]} symbol={extraNumberSymbols} direction={'row'} incomingSymbol={incomingSymbol} />
    </div>
  );
}

export default App;