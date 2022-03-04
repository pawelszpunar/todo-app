import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>TodoApp</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Show all Todos</Link>
          </li>
          <li>
            <Link to='/new-todo'>Add New</Link>
          </li>
          <li>
            <Link to='/favourites'>
              Favorites
              <span className={classes.badge}>
                ({favoriteCtx.totalFavorites})
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
