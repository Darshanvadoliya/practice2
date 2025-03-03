
import React from 'react'
import Child from './Child'
function Parent({ value, setvalue, style }) {

    return (
        < >
            <h1>Parent : {value ? value : "Parent"}</h1>
            <Child value={value} setvalue={setvalue} />
        </>
    )
}

export default Parent