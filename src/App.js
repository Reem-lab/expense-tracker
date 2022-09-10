import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_expenses = [
  {
    id: 'e1',
    title: "car insurance",
    amount: 450,
    date:  new Date(2021, 8, 20),
  },
  {
    id: 'e2',
    title: "grocercy needs",
    amount: 8020,
    date:  new Date(2022, 5, 3),
  },
  {
    id: 'e3',
    title: "goods",
    amount: 960,
    date:  new Date(2022, 8, 25),
  },
  {
    id: 'e4',
    title: "cloths",
    amount: 2500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const addExpense = ( newExpenseData ) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses ];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpense} />
       <Expenses items={expenses} />
    </div>
  );
}

export default App;
