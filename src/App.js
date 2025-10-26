// src/App.js
import { useState, useEffect } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/Chart";
import { systemLog } from "./systemLog";

export function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    systemLog.info("Expense Tracker system initialized");
  }, []);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    systemLog.info(`Expense added: ${expense.category}, ${expense.amount}`);
  };

  return (
    <div className="App">
      <h1>💸 Expense Tracker</h1>
      <AddExpense onAdd={handleAddExpense} />
      <ExpenseList expenses={expenses} />
      <h2>📊 Expense Overview</h2>
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;