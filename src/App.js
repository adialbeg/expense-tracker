import { useState } from "react";
import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="app">
      <h1 className="title">💸 Expense Tracker</h1>
      <div className="container">
        <AddExpense onAdd={addExpense} />
        <ExpenseChart expenses={expenses} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
