export default function ExpenseList({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((e, i) => (
          <li key={i}>
            <span>
              {e.name} <small>({e.category})</small>
            </span>
            <span>₪{e.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3>Total: ₪{total.toFixed(2)}</h3>
    </div>
  );
}
