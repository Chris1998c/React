import { Link, useParams } from "react-router-dom";
import { GithubUser } from "./GitHubUser";

export function ShowGithubUser() {
    const {username} = useParams()

    return(
        <div>
            <GithubUser username={username}/>
            <Link to="Chris1998c">Christian Conte</Link> 
        </div>
    )
}