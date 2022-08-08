import React, {useState}from "react";


const App=()=>{
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);
  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos)
  }
  return(
    <div>
      <center>
    <div className="card">
      <div className="card-body">
       <h5 className="card-title">Todo Management Application</h5>
       <form onSubmit={submitHandler}>
         <input type="text"name="task"value={task} onChange={changeHandler}/>&nbsp;&nbsp; 
           <input type="Submit"value="ADD"name="ADD"/>
         
       </form>
        </div>
      
    </div>
    </center>
    </div>
  )
}
export default App;
