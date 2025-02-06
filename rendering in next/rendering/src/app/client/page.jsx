"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState([]); // Fixed state name

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(users); // Logs only after users update
  }, [users]);

  return (
    <>

    <h1>Hii i am client</h1>
    <br />
    <br />
    
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>Loading users...</p> // Show loading state
      )}
    </>
  );
};

export default Page;
