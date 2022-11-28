/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AuthContext } from './context/AuthContext';
import './index.scss';

const ProtectedRoute = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="register"
            element={<Register />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
