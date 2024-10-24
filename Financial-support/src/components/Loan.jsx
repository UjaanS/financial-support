import React, { useState } from 'react';

function Loan({ addLoan }) {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addLoan(parseFloat(amount));
    setAmount(0);
  };

  return (
    <div className="loan">
      <h2>Loan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
        <button type="submit">Add Loan</button>
      </form>
    </div>
  );
}

export default Loan;
