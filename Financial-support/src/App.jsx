import React, { useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import Income from './components/Income.jsx';
import Expenses from './components/Expenses.jsx';
import Loan from './components/Loan.jsx';
import Budget from './components/Budget.jsx';
import './App.css';

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [loan, setLoan] = useState(0);

  const handleIncome = (amount) => {
    setIncome(income + amount);
  };

  const handleExpenses = (amount) => {
    setExpenses(expenses + amount);
  };

  const handleLoan = (amount) => {
    setLoan(loan + amount);
  };

  return (
    <div className="App">
      <h1>Farmer's Financial Management System</h1>
      <Dashboard income={income} expenses={expenses} loan={loan} />
      <Income addIncome={handleIncome} />
      <Expenses addExpense={handleExpenses} />
      <Loan addLoan={handleLoan} />
      <Budget income={income} expenses={expenses} loan={loan} />
    </div>
  );
}

export default App;
