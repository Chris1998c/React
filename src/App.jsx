import { Route, Routes } from "react-router-dom"
import { ShowGithubUser } from "./ShowGithubUser"
import { Counter } from "./Counter.Jsx"
import { Welcome } from "./Welcome"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name="Christian"/>}/>
      <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1}/>}/>
      <Route path="users/:username" element={<ShowGithubUser/>}/>
    </Routes>
  )
}

export default App