import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log(event);
        console.log("You clicked on create component!");
      }}
    >
      X
    </button>
  );
}

export { CreateTodoButton };
