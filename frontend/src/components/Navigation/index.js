import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal'
import './Navigation.css';

function Navigation({ isLoaded }){
  // const sessionUser = useSelector(state => state.session.user);

  let sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );

  return (
    <>
      <div className="nav-div">
        {isLoaded && sessionLinks}
      </div>
    </>
  );
}

export default Navigation;
