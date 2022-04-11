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
      <header id="home-header">
        <div id="profile-button-div">
          <ProfileButton user={sessionUser} />
        </div>
        <div id="header-title">
          <h1 className="site-name">TrapperKeeper</h1>
        </div>
      </header>
      <div id="home-container">
        <div id='main-container'>
          <Notebooks />
        </div>
      </div>
    </>
    )
}

export default HomePage;
