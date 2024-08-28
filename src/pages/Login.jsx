import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setMessage('Login successful!');
      navigate('/profile'); 
    } catch (error) {
      setMessage('Login failed: ' + error.message);
    }
  };

  return (
    <div className="container mt-6 mb-6">
      <div className="columns is-centered">
        <div className="column is-half-tablet is-one-third-desktop">
          <div className="box">
           
          
            <div className="has-text-centered mb-4 is-dark">
              <img
                src="https://res.cloudinary.com/dhrybaucr/image/upload/v1724405084/nao2q2ddva6hzofzy9e8.png"
                alt="Logo"
                style={{ height: '100px', width: 'auto' }}
              />
            </div>
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
              <div className="field has-text-centered">
                <div className="control">
                  <button type="submit" className="button is-primary is-fullwidth">Login</button>
                </div>
              </div>
            </form>
            {message && <div className="notification is-info has-text-centered">{message}</div>}
            <div className="has-text-centered mt-4">
              <p>
                Not registered?{' '}
                <Link to="/sign-up" className="has-text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
