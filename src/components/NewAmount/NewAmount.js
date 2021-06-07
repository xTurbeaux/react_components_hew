import React from 'react'; //jsx under the hood uses this library 
// rendering a form for users to add new amounts for various items
import '../css/NewAmount.css'
import AmountForm from './AmountForm';
const NewAmount = () => {
    return (
        <div className="new-amount">
            <AmountForm />
        </div>
    )
};

export default NewAmount;