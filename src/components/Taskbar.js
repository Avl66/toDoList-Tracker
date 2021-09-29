import React, {useState, useContext,useRef} from 'react'
import {taskContext} from '../App'
 
 function Taskbar({tasker}) {
     const edit =useRef(null);
     const data = useContext(taskContext);
      const [alter, setAlter]=useState(false);
 const [disable, setDisable]=useState(true);
 const [editTask, setIt]=useState('');

     const save =(id) =>{
         let editedVar =edit.current.value;    
         data.method( {type:'edit_task', payload:editedVar, ID:id })
         setAlter(false);
     }
     const deleteMe =(id) =>{
        data.method( {type:'delete_task', payload:id })
    }
      
    const editMe=(tsk)=>{
        setDisable(false);
        setIt(tsk);
        setAlter(true);
    }
    const changeHandler= ()=>{   
      setIt(edit.current.value);
    }
    let tickStyle={color:"green"};
     const markMe =(id)=>{
        data.method( {type:'mark_task', payload:id })
     }
     return ( alter ?

     (<div className="d-flex flex-row align-items-enter justify-content-center">
        <input className="form-control h4 p-2 me-auto mb-0" ref={edit} type="text" value={editTask} key={tasker.id} disabled={disable} readonly={disable} onChange={ !disable ? changeHandler : null}/>
        <button className="btn btn-sm btn-success fw-bold" type="button" onClick={()=>save(tasker.id)}>Save</button>
        </div>) :
        (<div className="d-flex flex-row list-decor bd-highlight rounded-2 my-3 align-items-center">
        <div key={tasker.id} className={`h4 p-2 me-auto ${!tasker.remainder ? ' text-success' : ''}`}>{tasker.task}</div>
        
        <div className="p-2 iconStyle">
            <span title="Edit" onClick={()=>editMe(tasker.task)}><i class="bi bi-pencil"></i></span>
            </div>
            <div className="vr"></div>
            <div className="p-2 iconStyle">
            <span title="Mark as Completed" onClick={()=>markMe(tasker.id)}><i class="bi bi-check-circle" style={tasker.remainder ? {}: tickStyle}></i></span>
            </div>
            <div className="vr"></div>
            <div className="p-2 iconStyle">
                <span title="Delete" onClick={()=>deleteMe(tasker.id)}><i class="bi bi-x-circle-fill"></i></span>
            </div>
            </div>)
     )  
 }
 
 export default Taskbar
 