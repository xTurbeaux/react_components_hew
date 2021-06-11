import React from 'react'; //jsx under the hood uses this library 
// rendering a form for users to add new amounts for various items
import '../css/NewAmount.css'
import AmountForm from './AmountForm';

const NewAmount = (data) => {

    
    const saveAmountDataHandler = (enteredAmountData) => {
        const amountData = {
            ...enteredAmountData,
            id: Math.random().toString()
        };
        data.onAddAmount(amountData);
    };
    

    return (
        <div className="new-amount">
            <AmountForm onSaveAmountData={saveAmountDataHandler} />
        </div>
    );
};

export default NewAmount;