import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      date:  new Date(2021, 8, 20),
      title: "car insurance",
      amount: 450,
    },
    {
      date:  new Date(2022, 5, 3),
      title: "grocercy needs",
      amount: 8020,
    },
    {
      date:  new Date(2022, 8, 25),
      title: "goods",
      amount: 960,
    },
    {
      date: new Date(2021, 5, 12),
      title: "cloths",
      amount: 2500,
    },
  ];

  return (
    <div className="App">
  <ExpenseItem 
  title={expenses[0].title}
  amount={[expenses[0].amount]}
  date={expenses[0].date}
  />
  <ExpenseItem 
   title={expenses[1].title}
   amount={[expenses[1].amount]}
   date={expenses[1].date}
  />
  <ExpenseItem 
   title={expenses[2].title}
   amount={[expenses[2].amount]}
   date={expenses[2].date}
  />
  <ExpenseItem 
   title={expenses[3].title}
   amount={[expenses[3].amount]}
   date={expenses[3].date}
  />
    </div>
  );
}

export default App;
