import { useState } from "react";
import { systemLog } from "../systemLog";

export default function AddExpense({ onAdd }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // sanitize only description
  const cleanDescription = (text) =>
    text.replace(/[<>]/g, "").replace(/script/gi, "").trim();

  // predefined category options
  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Health",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const safeDescription = cleanDescription(description);
    const safeAmount = parseFloat(amount);

    if (!safeDescription || !category || isNaN(safeAmount) || safeAmount <= 0) {
      alert("Please enter a valid description, category, and amount");
      systemLog.warn("Invalid input", { description, category, amount });
      return;
    }

    onAdd({
      description: safeDescription,
      category,
      amount: safeAmount,
      date: new Date().toLocaleDateString(),
    });

    systemLog.info("Expense added", { safeDescription, category, safeAmount });

    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        placeholder="Enter amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}
