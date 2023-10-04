function Hello({ name }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      
    </div>
  );
}

function App() {
  const name = <h3>Christian</h3>;

  return (
    <div>
      <Hello name={name} />
    </div>
  );
}

export default App;

