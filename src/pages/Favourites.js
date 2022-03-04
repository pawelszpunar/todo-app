import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import TodoList from '../components/todos/TodoList';

function FavouritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You've got no favorites!</p>;
  } else {
    content = <TodoList todos={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
