import './ExpenseItem.css';

// Data = Props

function ExpenseItem(data) {
    // Date object using vanilla JS, fake dynamic for now, not needed now due to dynamic setup with props aka data
    // const expenseDate = new Date(2888, 2, 28);
    // const expenseTitle = 'Asset Insurance';
    // const expenseAmount = 10000.00;

    const month = data.date.toLocaleString('en-US', { month: 'long' });
    const day = data.date.toLocaleString('en-US', { day: '2-digit' });
    const year = data.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;