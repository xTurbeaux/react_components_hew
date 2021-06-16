import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import '../css/Amounts.css';
import Filter from './Filter'


const Amounts = (data) => {

    const [filteredYear, setFilteredYear] = useState('2880');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // Only items matching the fitered year will be kept in the filteredExpenses array

    const filteredExpenses = data.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="amounts">
                <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />
                ))}
                {/* <ExpenseItem 
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
                /> */}
            </Card>
        </div>
    );
}

export default Amounts;