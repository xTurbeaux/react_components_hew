import React from 'react'; //jsx under the hood uses this library 
// rendering a form for users to add new amounts for various items
import '../css/NewAmount.css'
import AmountForm from './AmountForm';

const NewAmount = (data) => {

    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        data.onAddExpense(expenseData);
    };
    

    return (
        <div className="new-amount">
            <AmountForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewAmount;