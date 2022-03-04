import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllTodosPage from './pages/AllTodos';
import FavouritesPage from './pages/Favourites';
import NewTodoPage from './pages/NewTodo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllTodosPage />} />
        <Route path='/new-todo' element={<NewTodoPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
