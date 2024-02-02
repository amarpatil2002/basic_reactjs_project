import { useState } from "react";
import "./App.css";

function App() {

  const [todo, setTodo] = useState('')
  const [todolist, setTodoList] = useState([])

  const addTotoList = () => {
    if (!todo) {

    } else {
      setTodoList([...todolist, todo])
      setTodo('')
    }
  }

  const removeTodo = (id) => {
      const updateData = todolist.filter((item , ind) => {
         return ind !== id
      })

      setTodoList(updateData)
  }

  const removeAll = () => {
    setTodoList([])
  }
  return (
    <div className="container" >
      <div className="main-div">
        <h2>Todo List In React</h2>
        <div className="child-div">
          <div className="add-todo">
            <input maxLength={18} type="text" placeholder="Add Todo item" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTotoList} >Add</button>
          </div>
          <hr />
          <div className="show-todo">
            {
              todolist.map((elem, ind) => {
                return (
                  <div className="todo-item" key={ind}>
                    <span>{ind+1} . {elem}</span>
                    <button onClick={() => removeTodo(ind)} >Remove</button>
                  </div>
                )
              })
            }
          </div>
          <hr />
          <div className="remove-all">
            <button  onClick={removeAll}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
