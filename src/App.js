function Hello({ name }) {
  return (
    <h1>Hello, {name}.</h1>
  );
}

function App(){
  return(
    <div>
      <Hello name="Christian"/>
    </div>
  )
}



export default App;
