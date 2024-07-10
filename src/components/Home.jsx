import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Task=({title,description,deleteTask,index})=>{
  return(
    <div className='taskbox'>
      <div className='tandd'>
      <h4 className='titlebox'>{title}</h4>
      <p className='dexbox'>{description}</p>
      </div>
      <button type="button" className='btn2' onClick={()=> deleteTask(index)}>-</button>
    </div>
  )
}
const Home=()=> {
  const [tasks,setTask]= useState([]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");


  const submitHandeler=(e)=>{
    e.preventDefault();
    
    setTask([...tasks,{title,description}]);
  };

  console.log(title,description)


  const deleteTask=(index)=>{
    const filteredArr=tasks.filter((val,i)=>{
    return i!==index;
    });
    console.log(filteredArr);
    setTask(filteredArr);
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandeler} className='formone' >
        <input type="text" placeholder= 'title'className='formpart' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea rows={10} cols={50} placeholder='description' className='formpart' value={description}  onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button className='formpart' id='btn1' >ADD</button>
      </form>
      {tasks.map((item,index)=>(
        <Task  key={index} title={item.title} description={item.description}
        deleteTask={deleteTask}
        index={index}
        />
      ))}
      <div className='tasksheet'>
        
        <Task 
        />

      </div>
    </div>
  )
}

export default Home
