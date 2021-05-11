import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import './ExpenseDate.css';


function ShipVariant(data) {

    return (
        <div className="expense-item">
            <ExpenseDate date={data.date} />
            <div className="expense-item__description">
                <div className="expense-item__description">
                    <h2>{data.title}</h2>
                </div>
            </div>
        </div>
    );
}

export default ShipVariant;