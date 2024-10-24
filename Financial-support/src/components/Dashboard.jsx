import React from 'react';

function Dashboard({ income, expenses, loan }) {
  const balance = income - expenses;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p><strong>Total Income:</strong> ₹{income}</p>
      <p><strong>Total Expenses:</strong> ₹{expenses}</p>
      <p><strong>Loan Amount:</strong> ₹{loan}</p>
      <p><strong>Balance:</strong> ₹{balance}</p>
    </div>
  );
}

export default Dashboard;
