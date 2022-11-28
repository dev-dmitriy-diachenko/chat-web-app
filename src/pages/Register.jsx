import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db, storage } from '../firebase';
import Add from '../assets/images/addAvatar.png';

export const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'userChats', user.uid), {});

            navigate('/');
          } catch (error) {
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat Web App</span>

        <span className="title">Register</span>

        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="display name"
          />

          <input
            required
            type="email"
            placeholder="email"
          />

          <input
            required
            type="password"
            placeholder="password"
          />

          <label htmlFor="file">
            <img
              src={Add}
              alt=""
            />

            <input
              required
              style={{ display: 'none' }}
              type="file"
              id="file"
            />

            <span>Add an avatar</span>
          </label>

          <button disabled={loading}>Sign up</button>

          {loading && 'Uploading and compressing the image please wait...'}

          {err && <span>Something went wrong</span>}
        </form>

        <p>
          You do have an account? <Link to="/register">Login</Link>
        </p>
      </div>
    </div>
  );
};
