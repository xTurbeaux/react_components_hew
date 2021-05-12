import Status from './Status';
import ExpenseDate from './ExpenseDate';
// import ShipVariant from './ShipVariant';
import Card from './Card';

import './css/ExpenseItem.css';
import './css/ExpenseDate.css';



function PreMisDocs(data) {

    return (
        <Card className="expense-item flex">
            <ExpenseDate date={data.date} />
            <div className="expense-item__description">
                <h2>{data.title}</h2>
            </div>
            <Status className="flex1"/>
        </Card>
    )
}

export default PreMisDocs;