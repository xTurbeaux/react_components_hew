import React, { useState } from 'react';
import Card from '../UI/Card';
import '../css/Amounts.css';
import Filter from './Filter'
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';


const Amounts = (data) => {

    const [filteredYear, setFilteredYear] = useState('2880');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = data.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className="amounts">
                <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Amounts;