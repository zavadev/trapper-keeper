import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Notebooks from "../Notebooks";

function HomePage() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/" />
  }

  return (
      <>
          <Notebooks />
      </>
    )
}

export default HomePage;
