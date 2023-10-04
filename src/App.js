

function App() {
  const calculate = (a, b) => {
    const sum = a + b;
    return (
      <h2>
         {sum}
      </h2>
    );
  };

  return (
    <div>
      {calculate(18, 11)}
    </div>
  );
}

export default App;