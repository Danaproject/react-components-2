import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted, onMakeItemClassName }) => (
    <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
        <li key={id} className={onMakeItemClassName(completed)}>
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteTodo(id)}>
            Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;