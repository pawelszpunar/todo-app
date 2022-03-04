import NewTodoForm from '../components/todos/NewTodoForm';
import { useNavigate } from 'react-router-dom';

function NewTodoPage() {
  const navigate = useNavigate();

  function addTodoHandler(todoData) {
    fetch(
      'https://my-react-project-db-default-rtdb.firebaseio.com/todos.json',
      {
        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/', { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Todo</h1>
      <NewTodoForm onAddTodo={addTodoHandler} />
    </section>
  );
}

export default NewTodoPage;
