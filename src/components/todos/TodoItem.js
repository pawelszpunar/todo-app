import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './TodoItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function TodoItem(props) {
  const favoritesdCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesdCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesdCtx.removeFavorite(props.id);
    } else {
      favoritesdCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default TodoItem;
