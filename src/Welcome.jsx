


function Welcome(props){
return (
    <p>Welcome, {props.name}.</p>
)
}

Welcome.defaultProps={
    name: "Christian Conte",
};

export default Welcome