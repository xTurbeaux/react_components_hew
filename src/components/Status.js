import './ExpenseItem.css';
import './ExpenseDate.css';
import './ExpenseItem.css';
import Card from './Card';

function Status() {
    const isSigned = 'No';

    return (
        <Card className="expense-item">
            <div className="expense-date">
                <div className="expense-item">{isSigned}</div>
            </div>
        </Card>
    );
}

export default Status;