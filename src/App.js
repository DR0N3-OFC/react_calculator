import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";
import Title from "./components/Title";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddDigit = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  const handleMulNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const mul = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mul));
      setOperation('');
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div.toPrecision()));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMulNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
    setFirstNumber('0');
  }

  return (
    <Container>
      <Title content= "React Calc" />
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="." onClick={() => handleAddDigit('.')} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="X" onClick={handleMulNumbers} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddDigit('7')} />
          <Button label="8" onClick={() => handleAddDigit('8')} />
          <Button label="9" onClick={() => handleAddDigit('9')} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddDigit('4')} />
          <Button label="5" onClick={() => handleAddDigit('5')} />
          <Button label="6" onClick={() => handleAddDigit('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddDigit('1')} />
          <Button label="2" onClick={() => handleAddDigit('2')} />
          <Button label="3" onClick={() => handleAddDigit('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}
