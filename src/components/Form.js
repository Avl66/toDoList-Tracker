import React, {useState, useContext,useRef} from 'react'
import {taskContext} from '../App'
function Form() {
  const [toDo, setTask]=useState('');
  //const [rem, set]
  const data = useContext(taskContext);
  const inp = useRef(null);

  const randomId =()=>{
    let id= Math.floor(Math.random()*10000) +1000;
    data.method( {type:'add_task',payload:{toDo, id, rem:true} })
    setTask('');
  }
  const input =() => {
    setTask(inp.current.value);
  }
    return (
        <div>
            <h1 className="text-center"><span className="cal m-3"><i class="bi bi-calendar-check"></i></span>To-Do List Tracker</h1>
            <form id="add-form" className="row mx-auto align-items-center justify-content-center border-secondary">
  <div className="col-sm-9">
      <input type="text" className="form-control" id="input-task" ref={inp} value={toDo} 
      placeholder="Enter your notes here" onChange={input}/>
    </div>

  <div className="col-sm-3">
    <button type="button" className="btn btn-primary" onClick={randomId}><b>Add Task</b></button>
  </div>
</form>
     </div>     
    )
}

export default Form
