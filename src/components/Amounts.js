import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './css/Amounts.css';


const Amounts = (data) => {

    return (
        <Card className="amounts">
            <ExpenseItem 
            title={data.items[0].title}
            amount={data.items[0].amount}
            date={data.items[0].date}  
            />
            <ExpenseItem 
            title={data.items[1].title}
            amount={data.items[1].amount}
            date={data.items[1].date}  
            />
            <ExpenseItem 
            title={data.items[2].title}
            amount={data.items[2].amount}
            date={data.items[2].date}  
            />
            <ExpenseItem 
            title={data.items[3].title}
            amount={data.items[3].amount}
            date={data.items[3].date}  
            />
        </Card>
    );
}

export default Amounts;