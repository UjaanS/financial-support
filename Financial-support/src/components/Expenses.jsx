import React, { useState } from 'react';

function Expenses({ addExpense }) {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(parseFloat(amount));
    setAmount(0);
  };

  return (
    <div className="expenses">
      <h2>Expenses</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter expense amount"
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default Expenses;
