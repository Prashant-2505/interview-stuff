export default async function Page({ params }) {
    const response = await fetch(`https://dummyjson.com/users/${params.id}`, {
      cache: "force-cache", // Enables SSG
    });
    const user = await response.json();
  
    return (
      <div>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <p>Email: {user.email}</p>
      </div>
    );
  }
  