//^ ✅ By default, this will be statically generated unless you use fetch(..., { cache: "no-store" }) to enable SSR.
//& we are using revalidate to refresh the cache every 60 seconds


export default async function Page() {
  const response = await fetch("https://dummyjson.com/users", {
    next: { revalidate: 60 }, // Cache refreshes every 60 seconds
  });

  const data = await response.json();

  return (
    <>
      <h1>Hii, I am a incremental static page</h1>
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
