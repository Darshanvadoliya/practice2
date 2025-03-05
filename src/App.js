import './App.css';
// import Parent from './Components/Parent';
// import { useState } from 'react'
// import Rendaringarry from './Components/Rendaringarr';
import Session3 from './Components/Session_3_task/Session3';
import Session32 from './Components/Session_3_task/session32';
import Session31 from './Components/Session_3_task/session31';
import ToggleLogin from './Components/Session_3_task/ToggleLogin';
import Task_4A from './Components/Session_4/Task4A';



function App() {
  // const [value, setvalue] = useState('')
  return (
    <div className="App" style={{ fontStyle: 'italic' }}>
      {/* <h1>App : {value ? value : "App"}</h1>
        <Parent value={value} setvalue={setvalue} /> */}
      {/* <Rendaringarry /> */}
      <Session3  />
      <Session31 /> 
      <Session32 />
      <ToggleLogin />

      <div className='main' style={{paddingTop:"50px", paddingBottom:"50px"}}>
          <h1>== Session 4 ==</h1>
          <h4>Get an input details of user ans manage the details in one useState</h4>
          <Task_4A />
      </div>
    </div>
  );
}
export default App;
