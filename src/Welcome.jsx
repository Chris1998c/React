import Age from "./Age"

export function Welcome(props){
return (
    <div>
    <p><strong>Welcome, {props.name}.</strong></p>
    <Age age={props.age}/>
    </div>
);
}