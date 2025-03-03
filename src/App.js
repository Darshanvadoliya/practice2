import './App.css';
// import Parent from './Components/Parent';
// import { useState } from 'react'
// import Rendaringarry from './Components/Rendaringarr';
import Session3 from './Components/sesson_3_task/Session3';
import Session32 from './Components/sesson_3_task/session32';
import Session31 from './Components/sesson_3_task/session31';
import ToggleLogin from './Components/sesson_3_task/ToggleLogin';



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
    </div>
  );
}
export default App;
