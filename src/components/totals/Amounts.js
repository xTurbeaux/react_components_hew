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

    let expensesContent = <p>No Expenses Found</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
        />
        ))
    }

    return (
        <div>
            <Card className="amounts">
                <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Amounts;