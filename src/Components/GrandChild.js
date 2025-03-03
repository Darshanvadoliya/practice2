function GrandChild({value,setvalue}) {
    return (
        <div>
            <h1>GrandChild : {value ? value : "Empty"}</h1>
            <input type="text" value = {value} onChange={(e)=> setvalue(e.target.value)} />
        </div>
    )
}

export default GrandChild;