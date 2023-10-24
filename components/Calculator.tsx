import { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const calculate = (op: string) => {
    switch(op) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        setResult(num1 / num2);
        break;
      default:
        setResult(0);
    }
  }

  return (
    <div>
      <input type="number" value={num1} onChange={e => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={e => setNum2(Number(e.target.value))} />
      <button onClick={() => calculate('+')}>+</button>
      <button onClick={() => calculate('-')}>-</button>
      <button onClick={() => calculate('*')}>*</button>
      <button onClick={() => calculate('/')}>/</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;