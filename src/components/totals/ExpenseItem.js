import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import '../css/ExpenseItem.css';

// Data = Props

const ExpenseItem = (data) => {
    // react hook for functions, hooks start with use in their name

    // first element is a pointer to the actual value (title), second is the function to change the title (setTitle)
//    const [amount, setAmount] = useState(data.amount);

   // using const for useState()

    // const clickHandler = () => {
    //     setAmount('new amount');
    // };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={data.date} />
                <div className="expense-item__description">
                    <h2>{data.title}</h2>
                    <div className="expense-item__price">${data.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;