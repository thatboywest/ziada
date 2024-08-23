import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TokenCard = () => {
  const [tokens, setTokens] = useState(null);
  const [error, setError] = useState(null);

  const fetchRemainingTokens = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.get('http://localhost:8080/api/remaining-tokens', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTokens(response.data.tokens);
    } catch (error) {
      setError('Failed to fetch remaining tokens.');
      console.error('Error fetching remaining tokens:', error);
    }
  };

  useEffect(() => {
    fetchRemainingTokens();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Remaining Tokens</p>
          </div>
        </div>

        <div className="content">
          {error ? (
            <div className="notification is-danger">
              {error}
            </div>
          ) : (
            <div className="box">
              {tokens !== null ? (
                <p className="subtitle is-5">{tokens} Tokens</p>
              ) : (
                <p className="subtitle is-5">Loading...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
