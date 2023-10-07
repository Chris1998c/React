import Counter from "./Count";

function App(){
  return(
    <div>
    <Counter initialValue={5} incrementAmount={3} /> 
    <Counter initialValue={0} incrementAmount={2} /> 
    </div>
  )
}


export default App;