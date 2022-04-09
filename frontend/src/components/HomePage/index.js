import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Notebooks from "../Notebooks";
import ProfileButton from "../Navigation/ProfileButton";
import './HomePage.css'

function HomePage() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/" />
  }

  return (
    <>
      <ProfileButton user={sessionUser} />
      <h1 className="site-name">HomePage. Hello, {sessionUser?.username}!</h1>
      <div id='home-container'>
        <Notebooks />
      </div>
    </>
    )
}

export default HomePage;
