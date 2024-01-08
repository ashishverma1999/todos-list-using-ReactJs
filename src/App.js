import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this Todo",title,desc);
    let sno;
    if(todos.length==0){
      sno = 0;
    }else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Learn HTML ",
      desc: " You need to learn HTML to get this job done1"
    },
    {
      sno: 2,
      title: "Learn CSS",
      desc: " You need to Learn CSS to get this job done2"
    },
    {
      sno: 3,
      title: "Learn javaScript",
      desc: " You need to Learn javaScript to get this job done3"
    }
  ]);
  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );  
}
export default App;
