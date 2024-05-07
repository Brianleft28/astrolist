import { useEffect, useState } from "react"
/* import Button from "../Button.jsx" */
import { errorHandler } from "../../logic/functions.js";
import { Button } from "flowbite-react";


const CardTask = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([])
    
    // manejador de evento agregar tarea
    const handleAddTask = () => {
       
        try {

            errorHandler(task)
            
            const newTasks = {text: task, completed: true}
            setTasks([...tasks, newTasks])
            setTask('') // vaciamos el text area

            // Guardar las tareas en el local storage después de agregar una nueva tarea
            localStorage.setItem('tasks', JSON.stringify([...tasks, newTasks]));
            
        
        } catch(error) {
            console.error('Se projujo en error al agregar la tarea: ', error.message)
            alert(error.message)
        }
}
    
    const handleTaskChange = (event) => {
        setTask(event.target.value)

    }

    useEffect(() => {
        console.table(tasks);
    }, [tasks]);

    // Recuperar las tareas del local storage al renderizar el componente. 

    useEffect(()=> {
        const storedTasks = localStorage.getItem('tasks')

        if(storedTasks){
            setTasks(JSON.parse(storedTasks))
        }
    },[task]); 

    return (

        <div className="flex-col w-80  bg-slate-50 h-40 gap-3">
            <textarea 
            className="h-40 w-80 p-3 mb-3 shadow-sm" 
            name="task" 
            id="task" 
            placeholder="Ingrese su tarea"
            value={task}
            onChange={handleTaskChange}
            >
            </textarea>
           {/*  <Button 
            className={'font-semibold bg-blue-700  text-white rounded-full p-3 shadow-sm w-80'}
            onClick={handleAddTask}
            >
                Agregar tarea
            </Button> */}
            <Button
            className='min-w-full'
            gradientDuoTone="greenToBlue"
            onClick={handleAddTask}
            
            >Agregar tarea</Button>
        </div>

)
}

export default CardTask

