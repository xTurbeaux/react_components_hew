import './ExpenseItem.css';
import './ExpenseDate.css';


function Status() {
    const isSigned = 'No';

    return (
        <div className="expense-item">
            <div className="expense-date">
                <div className="expense-date__day">{isSigned}</div>
            </div>
        </div>
    );
}

export default Status;