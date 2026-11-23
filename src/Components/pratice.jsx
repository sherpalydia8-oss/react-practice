
import { useState } from "react";

function Display() {
  const [display, setDisplay] = useState([
    "Study React",
    "Eat Lunch",
    "Walk"
  ]);
  const[tasks,setTask]= useState("");
  const addDisplay =>


  return (
    <div>
      <h1>My Tasks</h1>

      {display.map((tasks, index) => (
        <div key={index}>
          <span>{tasks}</span>
        </div>
      ))}
    </div>
  );
}

export default Display;
