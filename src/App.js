import React, { useState } from 'react'
import Border from './components/Border'
import Count from './components/Count'
import Input from './components/Input'

function App() {

 
  const[count,setCount]=useState(0);
  const [task, setTask] = useState([]);
  function changecount(){
    setCount(count+1)
  }
  return (
    <div>
<Count count={count}/>
  <Input task={task}  changecount={changecount}  setCount={setCount} setTask={setTask}/>
<Border task={task}/>
    </div>
  )
}

export default App