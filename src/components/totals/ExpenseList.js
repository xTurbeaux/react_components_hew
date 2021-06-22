import React from 'react'; 
import ExpenseItem from './ExpenseItem';
import '../css/ExpenseList.css'

const ExpenseList = data => {

  if (data.items.length === 0) {
    return <h2 className="expenses-list_fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
     {
       data.items.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} 
    />
    ))
     } 
    </ul>
  )

};

export default ExpenseList;
