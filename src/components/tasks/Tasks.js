import React from "react";

import Task from "../TaskItem/Task";
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map(task  => <Task task={task}/>)}
            {/*
                MINUTO DO VÍDEO 30:29
                https://youtu.be/ErjWNvP6mko?t=1829
            */}
        </>
    )
}


export default Tasks;