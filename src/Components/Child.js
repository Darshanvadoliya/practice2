import GrandChild from "./GrandChild"
function Child({value,setvalue}) {
    return(
        <div>
           <h1>Child : {value ? value : "Child"}</h1>
           <GrandChild value={value} setvalue={setvalue}/>
        </div>
    )
}

export default Child