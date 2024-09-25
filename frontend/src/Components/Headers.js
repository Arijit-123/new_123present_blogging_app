import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <>
            <Link to="/create-post">Create Post</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logoutUser}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
