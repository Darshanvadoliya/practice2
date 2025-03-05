// import { useState } from "react"

function Session3({ name, age }) {
    //  description ='werty ertyu rtyu tyu tyu'
    // const [show, setShow] = useState(false)
    // function heandleshowmore (){
    //     setShow(!show)
    // }
    return (
        <div className="main">
            <h1>Session 3</h1>
            <h2>task 1</h2>
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>

            {/* <button onClick={heandleshowmore}>
                {show ? "Hide" : "show"}
            </button>
            {show && <p>{description}</p>} */}
        </div>
    )
}

Session3.defaultProps = {
    name: "Rahul",
    age: 20
}
export default Session3