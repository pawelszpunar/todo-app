import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteTodo) => {},
  removeFavorite: (todoId) => {},
  itemIsFavorite: (todoId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteTodo) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteTodo);
    });
  }

  function removeFavoriteHandler(todoId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((todo) => todo.id !== todoId);
    });
  }

  function itemIsFavoriteHandler(todoId) {
    return userFavorites.some((todo) => todo.id === todoId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
