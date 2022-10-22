import React, { useState } from 'react';

import Tasks from './components/tasks/Tasks';

const App = () => {
  // const message = "Hello World"
  const [tasks, setTasks ] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      completed: false
    },
    
    {
      id: 2,
      title: 'Fazer trabalho da faculdade',
      completed: true
    }
  ]);
  return (
    <>
      <div className='container'>
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App;