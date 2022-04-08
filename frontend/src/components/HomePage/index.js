import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Notebooks from "../Notebooks";
import './HomePage.css'

function HomePage() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1 className="site-name">HomePage. Hello, {sessionUser?.username}!</h1>
      <div id='home-container'>
        <Notebooks />
      </div>
    </>
    )
}

export default HomePage;
