function Session3({ name, age }) {
    return (
        <div className="main">
            <h1>Session 3</h1>
            <h2>task 1</h2>
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>
        </div>
    )
}
Session3.defaultProps = {
    name: "Rahul",
    age: 20
}
export default Session3