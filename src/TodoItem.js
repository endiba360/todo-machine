import "./TodoItem.css";

function TodoItem({ text, completed, onComplete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className={`Icon Icon-delete`}>X</span>
    </li>
  );
}

export { TodoItem };
