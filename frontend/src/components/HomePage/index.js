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
      <div id='home-container'>
        <Notebooks />
      </div>
    )
}

export default HomePage;
