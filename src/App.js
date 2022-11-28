import { useState } from 'react';
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from "uuid";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "task 1", completed: false },
    { id: uuidv4(), task: "task 2", completed: true }
  ])

  // 新增事件
  const create = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const remove = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 編輯後更新
  const update = (id, updatedItem) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedItem }
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  // Toggle 完成狀態
  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const todosList = todos.map(todo => (
    <TodoItem
      toggleComplete={toggleComplete}
      update={update}
      remove={remove}
      key={todo.id}
      todo={todo} />
  ))


  return (
    <div className="TodoList">
      <h1>
        待辦清單 <span>A React Todo List App 💩</span>
      </h1>
      <ul>{todosList}</ul>
      <AddTodo createTodo={create} />
    </div>
  );
}

export default App;
