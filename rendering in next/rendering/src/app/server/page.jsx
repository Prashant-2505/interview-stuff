const page = async () => {
  
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
  

  return (
    <>
      <h1>Hii i am server</h1>
      <br />

      {data && data.users.map((user)=>{
        return (
          <div key={user.id}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <p>{user.email}</p>
          </div>
        )
      })}
    </>
  );
};
export default page;
