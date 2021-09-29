import React, {useContext} from 'react'
import {taskContext} from '../App'
import Taskbar from '../components/Taskbar'

function ShowTask() {
    const data = useContext(taskContext);
    
    return  (
        data.state.tasks.length>0 &&
 
        <div class="container my-4 decor mx-auto py-3"> 
       <div className="task-list">  
                  
           {
                data.state.tasks.map(task => 
                    <Taskbar tasker={task}/>
                )
            }
        </div>
        </div>
    )
}

export default ShowTask
