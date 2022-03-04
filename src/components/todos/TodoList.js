import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

function TodoList(props) {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          image={todo.image}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </ul>
  );
}

export default TodoList;
