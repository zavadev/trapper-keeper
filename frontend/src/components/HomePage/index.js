import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Notebooks from "../Notebooks";
import { getNotebooksThunk } from '../../store/notebooks';

function HomePage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getNotebooksThunk())
    .then(() => setIsLoaded(true))
  }, [dispatch, sessionUser]);

  // if (!sessionUser) {
  //   return <Redirect to="/" />
  // }

  return (
      <>
        {isLoaded && (
          <Notebooks />
        )}
      </>
    )
}

export default HomePage;
