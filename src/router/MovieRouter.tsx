import { Routes, Route, NavLink } from 'react-router-dom';
import Auth from 'src/pages/auth/Auth';
import AuthLayout from './layouts/AuthLayout';

const MovieRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Auth />} />
      </Route>
      <Route
        path="/home"
        element={
          <div>
            Home <NavLink to={'/'}>Auth</NavLink>
          </div>
        }
      />
    </Routes>
  );
};

export default MovieRouter;
