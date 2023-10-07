import Age from "./age"



function Welcome(props){
return (
    <div>
    <p><strong>Welcome, {props.name}.</strong></p>
    {props.age >= 18 && <Age age={props.age}/>}
    </div>
);
}

export default Welcome