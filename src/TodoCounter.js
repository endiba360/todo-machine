function TodoCounter({ total, completed }) {
  return (
    <h1>
      You have completed {completed} tasks from {total} TODOs
    </h1>
  );
}

export { TodoCounter };
