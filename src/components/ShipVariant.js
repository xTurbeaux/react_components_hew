import ExpenseDate from './ExpenseDate';
import './css/ExpenseDate.css';
import './css/ExpenseItem.css';
import Card from './Card';


function ShipVariant(data) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={data.date} />
            <div className="expense-item__description">
                <h2>{data.title}</h2>
            </div>
        </Card>
    );
}

export default ShipVariant;