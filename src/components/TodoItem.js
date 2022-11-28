import '../css/TodoItem.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodoItem({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState();

  const handleClick = evt => {
    remove(evt.target.id)
  }

  const toggleFrom = () => {
    setIsEditing(!isEditing);
  }

  const handleUpdate = evt => {
    evt.preventDefault();

    update(todo.id, task);
    toggleFrom();
  };

  const handleChange = evt => {
    setTask(evt.target.value);
  };

  const toggleCompleted = evt => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>儲存</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <FontAwesomeIcon icon="pen" />
          </button>
          <button onClick={handleClick}>
            <FontAwesomeIcon icon="trash" id={todo.id}/>
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default TodoItem