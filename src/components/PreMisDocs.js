import Status from './Status';
import ExpenseDate from './ExpenseDate';
// import ShipVariant from './ShipVariant';
import Card from './Card';

import './ExpenseItem.css';
import './ExpenseDate.css';



function PreMisDocs(data) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={data.date} />
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <Status className="expense-item__price"/>
            </div>
        </Card>
    )
}

export default PreMisDocs;