import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import './ExpenseDate.css';
import Card from './Card';


function ShipVariant(data) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={data.date} />
            <div className="expense-item__description">
                <div className="expense-item__description">
                    <h2>{data.title}</h2>
                </div>
            </div>
        </Card>
    );
}

export default ShipVariant;