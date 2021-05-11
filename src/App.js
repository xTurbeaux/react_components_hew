import  ExpenseItem from './components/ExpenseItem';

function App() {

  // will soon be calls to the db for this info 
  const expenses = [
    { id: 'e1', title: 'Asset Insurance', amount: 10000.00, date: new Date(2888, 2, 28)},
    { id: 'e2', title: 'Life Insurance', amount: 100000.00, date: new Date(2888, 2, 28)},
    { id: 'e3', title: 'Food Billing', amount: 1000.00, date: new Date(2888, 2, 28)},
    { id: 'e4', title: 'Requested Ameneties', amount: 1000.00, date: new Date(2888, 2, 28)},
  ];

  const preMisDocs = [
    { id: 'd1', title: 'Bonus Clause', date: new Date(28888, 1, 28)},
    { id: 'd2', title: 'Forfeiture Clause', date: new Date(2888, 1, 28)},
    { id: 'd3', title: 'Standing Mission Frag Order', date: new Date(2888, 1, 28)},
  ];

  return (
    <div>
      <h2>Pre-Mission Expenses</h2>

      {/* can call information using just the attributes from above as well */}

      <ExpenseItem 
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
      />

    <h2>Mission Documents Status</h2>


    </div>
  );
}

export default App;
