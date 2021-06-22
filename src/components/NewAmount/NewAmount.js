import React, { useState } from 'react'; //jsx under the hood uses this library 
// rendering a form for users to add new amounts for various items
import '../css/NewAmount.css'
import AmountForm from './AmountForm';

const NewAmount = (data) => {
   const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        data.onAddExpense(expenseData);
        setIsEditing(false);
    };
    
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const StopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-amount">
           {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
           )}
            {isEditing && (
                <AmountForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={StopEditingHandler} 
                />
            )}
        </div>
    );
};

export default NewAmount;