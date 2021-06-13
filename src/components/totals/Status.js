import '../css/ExpenseDate.css';
import '../css/ExpenseItem.css';

import Card from '../ui/Card';

function Status() {
    const isSigned = 'Signed | Negative';

    return (
        <Card className="flex">
            <div className="expense-item__description"> 
                    <div className="expense-item__price flex1">{isSigned}</div>
              </div> 
        </Card>
    );
}

export default Status;