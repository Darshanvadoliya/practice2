import { useState } from "react"

function Task_4A() {
    const [user, setUser] = useState({})

    console.log(user);

    function heandalForm (e){
        setUser((prevdata) => (
            { ...prevdata, [e.target.name]: e.target.value }
        ))
    }

    return (
        <>
            <div className="">
                <h3>Task 1 - Manage Form details directly</h3>
                <h3>Task 2 - Manage details using common Function.</h3>
                <div className="form">
                    {/*  */}
                    <div className="inputs">
                        <label>Username : </label>
                        <input type="text" name="username" onChange={(e) => setUser((prevdata) => ({...prevdata, [e.target.name]: e.target.value}))} />
                    </div>
                    <div className="inputs">
                        <label>First Name : </label>
                        <input type="text" name="userFirstName" onChange={(e) => heandalForm(e)}/>
                    </div>
                    <div className="inputs">
                        <label>Last Name : </label>
                        <input type="text" name="userLastName" onChange={(e) => heandalForm(e)} />
                    </div>
                    <div className="inputs">
                        <label>Number : </label>
                        <input type="text" name="userNumber" onChange={(e) => heandalForm(e)} />
                    </div>
                    <div className="inputs">
                        <label>Email</label>
                        <input type="text" name="userEmail" onChange={(e) => heandalForm(e)} />
                    </div>
                    <div className="inputs">
                        <label>Address 1</label>
                        <input type="text" name="userAddress1" onChange={(e) => heandalForm(e)} />
                    </div>
                    <div className="inputs">
                        <label>Address 2</label>
                        <input type="text" name="userAddress2" onChange={(e) => heandalForm(e)}/>
                    </div>
                    <div className="inputs">
                        <label>Birth Date</label>
                        <input type="text" name="userBirthDate" onChange={(e) => heandalForm(e)} />
                    </div>
                    <div className="inputs">
                        <label>Blood Type</label>
                        <input type="text" name="userBloodType" onChange={(e) => heandalForm(e)} />
                    </div>
                    <div className="inputs">
                        <label>Body Weight</label>
                        <input type="text" name="userWeight" onChange={(e) => heandalForm(e)} />
                    </div>
                    <div className="inputs">
                        <label>Height</label>
                        <input type="text" name="userHeight" onChange={(e) => heandalForm(e)} />
                    </div>
                </div>

                {/* <div className="show">
                    <h3>Username : {user.username}</h3>
                    <h3>First Name : {user.userFirstName}</h3>
                    <h3>Last Name : {user.userLastName}</h3>
                    <h3>Number : {user.userNumber}</h3>
                    <h3>Email : {user.userEmail}</h3>
                    <h3>Address 1 : {user.userAddress1}</h3>
                    <h3>Address 2 : {user.userAddress2}</h3>
                    <h3>Birth Date : {user.userBirthDate}</h3>
                    <h3>Blood Type : {user.userBloodType}</h3>
                    <h3>Body Weight : {user.userWeight}</h3>
                    <h3>Height : {user.userHeight}</h3>
                </div> */}
            </div>
        </>
    )
}

export default Task_4A