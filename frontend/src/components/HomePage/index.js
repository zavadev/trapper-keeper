import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function HomePage() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/" />
  }

  return (
      <>
        <h1 className="site-name">HomePage. {sessionUser.username}</h1>
      </>
    )
}

export default HomePage;
