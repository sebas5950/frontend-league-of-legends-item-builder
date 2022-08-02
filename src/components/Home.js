function Home({ user, championsData }) {
  if (user) {
    return (
      <div className="logged-in-home">
        <h1>Welcome, {user.username}!</h1>
      </div>
    );
  } else {
    return (
      <div className="signup-home">
        <h1>Please Login or Sign Up</h1>
      </div>
    );
  }
}

export default Home;
