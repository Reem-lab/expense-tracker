import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


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

  const addExpense = ( newExpenseData ) => {
    console.log('hello form app.js')
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense} />
       <Expenses items={expenses} />
    </div>
  );
}

export default App;
