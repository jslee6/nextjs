'use client'

import React, { useEffect, useState } from 'react';

const AccountHistoryComponent = ({ accountId }) => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  // fetchAccountHistory 함수 정의
  const fetchAccountHistory = async (accountId) => {
    const response = await fetch(`\pages\api\account\history?accountId=${accountId}`);
    const data = await response.json();


    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch account history');
    }

    return data;
  };

  useEffect(() => {
    const getHistory = async () => {
      try {
        const data = await fetchAccountHistory(accountId);
        setHistory(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getHistory();
  }, [accountId]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Account History</h2>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            {item.operation} on {item.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountHistoryComponent;
