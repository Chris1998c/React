import { Link, Route, Routes } from "react-router-dom"
import { GithubUser } from "./GitHubUser"

function App() {

  return (
    <div>

    <Link to="users">Github user</Link>

    <Routes>
      <Route path="users" element={<GithubUser/>}/>
    </Routes>
    </div>
  )
}

export default App