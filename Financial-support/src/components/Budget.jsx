import React from 'react';

function Budget({ income, expenses, loan }) {
  const balance = income - expenses;

  return (
    <>
    <div className="budget">
      <h2>Budget Planning</h2>
      {balance >= loan ? (
        <p>Your current balance is sufficient to cover your loan. Have a nice day!</p>
      ) : (
        <p>You need to manage your expenses or increase income to cover the loan. Please check the farmer support page.</p>
      )}
    </div>
    
    <div className='budget'>
        <p>Government schemes for financial support of farmers<a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012#:~:text=The%20Agriculture%20Infrastructure%20Fund%20is,subvention%20and%20credit%20guarantee%20support."> Click here!</a></p>
    </div>
    </>
  );
}

export default Budget;
