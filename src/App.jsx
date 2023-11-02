import { Link, Route, Routes } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { Counter } from "./Counter"
import { ShowGithubUser } from "./ShowGithubUser"
import { Welcome } from "./Welcome"
import { NotFound } from "./NotFoud"
import { GithubUserList } from "./GitHubUserList"
function App() {

  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/Counter">Counter</Link> | <Link to="users">Github User</Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="Christian" />} />
        <Route path="users" element={<ShowGithubUser />}>
          <Route path=":username" element={<GithubUserList />} />
          <Route index element={<h3>Add a user and select it</h3>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App