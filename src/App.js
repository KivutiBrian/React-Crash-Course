import {useState} from 'react'
import Header from './components/Header'
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:"Appointment",
            day: "Feb 5th at 2.30pm",
            remainder: true
        },
        {
            id:2,
            text:"School Meeting",
            day: "Feb 6th at 1.30pm",
            remainder: true
        },
        {
            id:3,
            text:"Food Shopping",
            day: "Feb 6th at 2.30pm",
            remainder: false
        },
    ]
  )
  return (
    <div className="container">

      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
