import './ExpenseItem.css';
import './ExpenseDate.css';


function Status() {
    const isSigned = 'No';

    return (
        <div>
            <div className="expense-date">
                <div className="expense-item__day">{isSigned}</div>
            </div>
        </div>
    );
}

export default Status;