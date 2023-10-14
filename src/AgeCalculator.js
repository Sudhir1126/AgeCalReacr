import React, { useState } from 'react';

function AgeCalculator() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);

  const calculateAge = () => {
    if (age === '') {
      setResult('Please enter your age.');
    } else {
      const currentYear = new Date().getFullYear();
      const birthYear = currentYear - parseInt(age);
      setResult(`Your age is ${age}. You were born in ${birthYear}.`);
    }
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <p>Enter your age:</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate</button>
      {result && <p>{result}</p>}
    </div>
  );
}

export default AgeCalculator;
