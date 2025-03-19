import React, { useState, useCallback, useMemo } from 'react';

// Component Con (mémorize khi props không thay đổi)
const ExpensiveComponent = React.memo(({ calculate, number }) => {
  console.log('Rendering ExpensiveComponent');
  return (
    <div>
      <h4>Expensive Calculation Result: {calculate(number)}</h4>
    </div>
  );
});

const Three = () => {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);

  // Dùng useMemo để chỉ tính toán lại khi `number` thay đổi
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating expensive calculation...');
    return number * 2;
  }, [number]); // Chỉ tính lại khi `number` thay đổi

  // Dùng useCallback để chỉ tạo lại hàm khi `number` thay đổi
  const calculate = useCallback(
    (num) => {
      console.log('Running calculation...');
      return num * 2;
    },
    [number] // Chỉ tạo lại hàm khi `number` thay đổi
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>React Performance Optimization (Memo, useCallback, useMemo)</h2>
      <button onClick={() => setShow(!show)}>
        Toggle Expensive Component
      </button>
      <div>
        <button onClick={() => setNumber(number + 1)}>Increase Number</button>
        <h3>Current Number: {number}</h3>
      </div>
      {show && <ExpensiveComponent calculate={calculate} number={expensiveCalculation} />}
    </div>
  );
};

export default Three;
