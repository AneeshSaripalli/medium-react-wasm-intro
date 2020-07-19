import React, { useState } from 'react';
import './App.css';

function App() {
  import('wasm').then(({ add_two_ints, fib }) => {
    const sumResult = add_two_ints(10, 20);
    const fibResult = fib(10);
    setSum(sumResult);
    setFib(fibResult);
  })
  const [sum, setSum] = useState<number>(0);
  const [fib, setFib] = useState<number>(0);

  return (
    // I cut out the fluff
    <div className="App" >
      <div>Sum Results: {sum}</div>
      <div>Fib Results: {fib}</div>
    </div>
  );
}

export default App;
