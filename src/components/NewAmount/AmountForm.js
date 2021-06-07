import React, { useState } from 'react'
import '../css/AmountForm.css'


const AmountForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //      enteredTitle: '',
    //      EnteredAmount: '',
    //      enteredDate: ''
    //  });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value };
    //     });
     };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        // prevents the default of the request being sent staying on the currently loaded page
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-amount__controls">
                <div className="new-amount__control">
                    <label className="t">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-amount__control">
                    <label className="t">Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-amount__control">
                    <label className="t">Date</label>
                    <input type="date" value={enteredDate} min="2000-01-04" max="3000-01-04" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-amount__actions">
                <button type="submit">Add Amount</button>
            </div>
        </form>
    );
};

export default AmountForm;