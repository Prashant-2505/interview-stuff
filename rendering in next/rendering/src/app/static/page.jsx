//^ ✅ By default, this will be statically generated unless you use fetch(..., { cache: "no-store" }) to enable SSR.



export default async function Page() {
    const response = await fetch("https://dummyjson.com/users", {
      cache: "force-cache", // Ensures it is statically generated
    });
    const data = await response.json();
  
    return (
      <>
        <h1>Hii, I am a static page</h1>
        <br />
  
        {data.users.map((user) => (
          <div key={user.id}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <p>{user.email}</p>
          </div>
        ))}
      </>
    );
  }
  