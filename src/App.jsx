import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./Counter"
import { ShowGithubUser } from "./ShowGithubUser"
import { Welcome } from "./Welcome"

function App() {

  return (
    <div>

      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users/Chris1998c">Github User</Link>
      </div>
    
    <Routes>
      <Route path="/" element={<Welcome name="Christian"/>}/>
      <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1}/>}/>
      <Route path="users/:username" element={<ShowGithubUser/>}/>
    </Routes>
    </div>
  )
}

export default App