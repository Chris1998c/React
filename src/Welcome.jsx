import Age from "./age"



function Welcome(props) {
    return (
        <div>
            <p><strong>Welcome, {props.name}.</strong></p>
            {(props.age > 18)
                ? <Age age={props.age} />
                : <p><strong>You are very young!</strong></p>}
        </div>
    );
}

export default Welcome