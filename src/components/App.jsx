import React, {useState} from "react";



function App() {

  const now = "Time";

  
  const[time, setTime] = useState(now);

  function updateTime(){
  
    const NewTime = new Date().toLocaleTimeString();
    setTime(NewTime);
    setInterval(updateTime, 1000);
    
  }

  

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick = {updateTime} >Get Time</button>
    </div>
  );
}

export default App;
