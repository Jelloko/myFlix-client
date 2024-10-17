import React, { useEffect, useState } from 'react';

export const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://my-flix-cf-fd6a3633859c.herokuapp.com/users");
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="user-profile">
      <h1>{user.Name}</h1>
      <p>Email: {user.Email}</p>
      <p>Birthday: {user.Birthday}</p>
      {/* Add more user information as needed */}
    </div>
  );
};

