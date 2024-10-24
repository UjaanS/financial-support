import React, { useState } from 'react';

function Income({ addIncome }) {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(parseFloat(amount));
    setAmount(0);
  };

  return (
    <div className="income">
      <h2>Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter income amount"
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
}

export default Income;
