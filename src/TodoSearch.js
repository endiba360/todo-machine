import "./TodoSearch.css";

function TodoSearch() {
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Search for a Task..."
      onChange={(event) => {
        console.log("You wrote in search component!");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
