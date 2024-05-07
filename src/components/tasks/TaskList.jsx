import { useEffect, useState } from "react";


const TaskList = () => {
    
    const [storedTasks, setStoredTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setStoredTasks(JSON.parse(storedTasks));
        }
    }, []);
    
    return (
     <div>
        {storedTasks.map((task, index)=> {
            <div key={index}>
                {task.text}
            </div>
        })}
     </div>
  )
}

export default TaskList