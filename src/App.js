// import ExpenseItem from './components/ExpenseItem';
// import PreMisDocs from './components/totals/PreMisDocs';
// import ShipVariant from './components/totals/ShipVariant';
import React, { useState } from 'react';
import NewAmount from './components/NewAmount/NewAmount';
import Amounts from './components/Totals/Amounts';

import './components/css/Global.css';

const Dummy_Amounts = [
  { id: 'e1', title: 'Asset Insurance', amount: 10000.00, date: new Date(2888, 2, 28)},
  { id: 'e2', title: 'Life Insurance', amount: 100000.00, date: new Date(2888, 2, 28)},
  { id: 'e3', title: 'Food Billing', amount: 1000.00, date: new Date(2888, 2, 28)},
  { id: 'e4', title: 'Requested Ameneties', amount: 1000.00, date: new Date(2888, 2, 28)},
];


const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Amounts);

//   const preMisDocs = [
//     { id: 'd1', title: 'Bonus Clause', date: new Date(2888, 1, 28)},
//     { id: 'd2', title: 'Forfeiture Clause', date: new Date(2888, 1, 28)},
//     { id: 'd3', title: 'Standing Mission Frag Order', date: new Date(2888, 1, 28)},
//   ];

//   const model = [
//     { id: 'm1', title: 'M8', date: new Date(2887, 10, 20)},
//     { id: 'm2', title: 'M8B', date: new Date(2887, 10, 20)}
// ]

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>

      {/* <div>
        <h1>MU-Th-R Pre-Mission Listing</h1>
      </div> */}

      <div>
        <h1>Pre-Mission Expenses</h1>

        {/* can call information using just the attributes from above as well */}

        <NewAmount onAddExpense={addExpenseHandler} />
        <Amounts items={expenses} />

        {/* <ExpenseItem 
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}  
        />
        <ExpenseItem 
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}  
        />
        <ExpenseItem 
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}  
        />
        <ExpenseItem 
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}  
        /> */}

      {/* <h1>Mission Documents Status</h1>

        <PreMisDocs 
          title={preMisDocs[0].title}
          date={preMisDocs[0].date} 
        />
        <PreMisDocs 
          title={preMisDocs[1].title}
          date={preMisDocs[1].date} 
        />
        <PreMisDocs 
          title={preMisDocs[2].title}
          date={preMisDocs[2].date} 
        />

      <h1>Mission Ship Variant</h1>

        <ShipVariant 
          title={model[1].title}
          date={model[1].date}
        /> */}

      </div>

    </div>
  );
}
export default App;