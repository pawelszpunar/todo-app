import { useState, useEffect } from 'react';

import TodoList from '../components/todos/TodoList';

function AllTodosPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://my-react-project-db-default-rtdb.firebaseio.com/todos.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const todos = [];

        for (const key in data) {
          const todo = {
            id: key,
            ...data[key],
          };
          todos.push(todo);
        }

        setIsLoading(false);
        setLoadedTodos(todos);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Todos</h1>
      <TodoList todos={loadedTodos} />
    </section>
  );
}

export default AllTodosPage;
