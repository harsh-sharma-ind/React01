import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      title:'Car Insurance',
      price: '146',
      Date: new Date(12, 12, 2022)
    }
  ]
  return (
    <div className="App">
      <ExpenseItem
      title={expenses[0].title}
      price={expenses[0].price}
      Date={expenses[0].Date}
      />
    </div>
  );
}

export default App;
