import { useParams } from "react-router-dom";
import { GithubUser } from "./GitHubUser";

export function ShowGithubUser() {
    const {username} = useParams()

    return(
        <div>
            <GithubUser username={username}/>
        </div>
    )
}