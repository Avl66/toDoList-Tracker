import React,{useReducer} from 'react';
import './App.css';
import Form from './components/Form';
import ShowTask from './components/ShowTask';
export const taskContext= React.createContext();
const initialState={  
  tasks:[]
}
const myReducer= (state=initialState, action)=>{
  const {payload, ID} =action;
  switch(action.type){
    case 'add_task':
      const {toDo, id, rem} =action.payload;
      return {...state, tasks:[...state.tasks, {task:toDo, id:id, remainder:rem}] }
      case 'edit_task':
        return {...state, tasks:[...state.tasks.map(t => t.id === ID ? {...t, task:payload} : t)]}
        case 'mark_task':
          return {...state, tasks:[...state.tasks.map(t => t.id === payload ? {...t, remainder:!t.remainder} : t)]}
        case 'delete_task':
          return {...state, tasks:[...state.tasks.filter( t => t.id !== action.payload )]}
     default:
       return state;
  }
}
function App(){
  const [myState, dispatch] = useReducer(myReducer, initialState);
 return (
   <div className="container app-container">
   <taskContext.Provider value={{state: myState, method:dispatch}}>
   <Form />
   <ShowTask />
   </taskContext.Provider>
   </div>
 );
}

export default App;
