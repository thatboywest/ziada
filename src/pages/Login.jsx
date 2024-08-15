import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed: ' + error.message);
    }
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half-tablet is-one-third-desktop">
          <div className="box">
            <h2 className="title is-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">Login</button>
                </div>
              </div>
            </form>
            {message && <div className="notification is-info">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
