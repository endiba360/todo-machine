import "./TodoItem.css";
import { DeleteIcon } from "./DeleteIcon";
import { CompleteIcon } from "./CompleteIcon";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <CompleteIcon
          className={`check ${completed && "completed"}`}
          onClick={onComplete}
        />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className={`Icon Icon-delete`} onClick={onDelete}>
        <DeleteIcon onClick={onDelete} />
      </span>
    </li>
  );
}

export { TodoItem };
