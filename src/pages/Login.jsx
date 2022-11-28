import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat Web App</span>

        <span className="title">Login</span>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
          />

          <input
            type="password"
            placeholder="password"
          />

          <button>Sign in</button>

          {err && <span>Something went wrong</span>}
        </form>

        <p>
          You don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};
