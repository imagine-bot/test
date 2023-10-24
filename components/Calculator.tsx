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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white rounded shadow-2xl p-10">
        <div className="mb-5">
          <input className="px-5 py-3 w-full text-lg text-right rounded" type="number" value={num1} onChange={e => setNum1(Number(e.target.value))} />
        </div>
        <div className="mb-5">
          <input className="px-5 py-3 w-full text-lg text-right rounded" type="number" value={num2} onChange={e => setNum2(Number(e.target.value))} />
        </div>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <button className="bg-blue-500 text-white w-full py-3 rounded" onClick={() => calculate('+')}>+</button>
          <button className="bg-blue-500 text-white w-full py-3 rounded" onClick={() => calculate('-')}>-</button>
          <button className="bg-blue-500 text-white w-full py-3 rounded" onClick={() => calculate('*')}>*</button>
          <button className="bg-blue-500 text-white w-full py-3 rounded" onClick={() => calculate('/')}>/</button>
        </div>
        <div>
          <p className="text-right text-2xl">Result: {result}</p>
        </div>
      </div>
    </div>
  );
}

export default Calculator;