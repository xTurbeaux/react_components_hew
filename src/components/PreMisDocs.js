import Status from './Status';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';
import './ExpenseDate.css';



function PreMisDocs(data) {

    return (
        <div className="expense-item">
            <ExpenseDate date={data.date} />
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <Status />
            </div>
        </div>
    )
}

export default PreMisDocs;