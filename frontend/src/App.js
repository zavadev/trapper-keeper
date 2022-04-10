import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import * as sessionActions from "./store/session";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage isLoaded={isLoaded} />
          </Route>
          <Route path='/users/:userId'>
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
