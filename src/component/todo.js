import React,{useEffect, useState} from 'react'
import './todo.css';
import Showtask from './Showtask';
function Todo() {
  let getlocalitems=()=>{
    let list= localStorage.getItem('list');
    if(list){
      return JSON.parse(localStorage.getItem('list'))
    } 
    else{
      return [];
    }
  }

  const[task,setTask]=useState("");
    const[data,setuseData]=useState(getlocalitems());
    // const[btn,setbtn]=useState("submit");
    const[togglebtn,settogglebtn]=useState(true)
    const[editid,seteditid]=useState(null);
    // const [Inputval,setInputval]=useState("");
  
    let onchangehandle =(e)=>{
        setTask(e.target.value);
    }
    let submithandle=(e)=>{
      e.preventDefault();
      if(!(task)){
        alert("enter data");

      }
      else if(task && !togglebtn){
          console.log(togglebtn);
         setuseData(data.map((element)=>{
           console.log("eee",element);
          if(element.id===editid){
            console.log("ttt");
            return {...element,name:task}
          }
          
          return element;
         }))
         settogglebtn(true)
         setTask('');
         seteditid(null);
        }
        else{
          let allInputdata={id: new Date().getTime().toString(),name:task}
          // const newdata=task;
          setuseData([...data,allInputdata]);
          // console.log("data",data);
          setTask('');
        }
       
        
    }
    let deleteItem=(a)=>{
      console.log("aa",a);
      const afterdeletedata=data.filter((curr,index)=>{
        console.log(curr.id);
        return curr.id!=a;
      });
      setuseData(afterdeletedata);
    }
    let editItem = (a)=>{
      console.log(a);
      let newitemdata=data.find((ele)=>{
        // console.log(ele[a]);
        return ele.id===a;
      })
      settogglebtn(false)
      setTask(newitemdata.name);
      seteditid(a);
     

    }
    useEffect(()=>{
      if(data){
        localStorage.setItem('list',JSON.stringify(data))
      }
    },[data]);
    let removeAll = ()=>{
      setuseData([]);

    }
  return (
<div className="container">
  
    <header className="text-center text-light my-4">
      <h1 className="mb-4">Todo List</h1>
      <div className="d-flex">

      <form className="form-inline" >
      <div className="input-group mb-3">
        <input type="text" className="form-control m-auto" name="search" value={task} placeholder="Add Task"  onChange={onchangehandle}/>
        <div className="input-group-append">
          {
            togglebtn ? <button  className="newbtn" onClick={submithandle}>submit</button> : <button className="newbtn" onClick={submithandle}>Update</button>
          }
        </div>
        </div>
      </form>
      </div>
    </header>
    <div className='showtasks'>
    {Array.isArray(data)?data.map((value, index) => {
                        return <Showtask
                        // key={value.id}
                            id={value.id}
                            task={value.name}
                            onSelcet={deleteItem}
                            onEdit={editItem}
                        />
                    }):null}
     </div>
    {/* <form className="add text-center my-4">
      <label for="add" className="add text-light">Add a new todo:</label>
      <input type="text" className="form-control m-auto" name="add" id="add"/>
    </form> */}
      <div className="showtasks">
      <div class="text-center">

                        <button className="btn"  onClick={removeAll}><span>Clear Task List </span> </button>
                   </div> 
                    </div>
  </div>

  )
}


export default Todo;

