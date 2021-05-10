import  ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: 'e1', title: 'Asset Insurance', amount: 10000.00, date: new Date(2888, 2, 28)},
    { id: 'e2', title: 'Life Insurance', amount: 100000.00, date: new Date(2888, 2, 28)},
    { id: 'e3', title: 'Food Billing', amount: 1000.00, date: new Date(2888, 2, 28)},
    { id: 'e4', title: 'Requested Ameneties', amount: 1000.00, date: new Date(2888, 2, 28)},
  ];

  return (
    <div>
      <h2>Pre-Contract Expenses</h2>

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
    </div>
  );
}

export default App;
