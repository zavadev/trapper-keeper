import Navigation from '../Navigation';
import './SplashPage.css'

function SplashPage({isLoaded}) {

    return (
        <>
          <div id="splash-container">
            <div className="splash-main-div">
              <div id="titles-main-div" className="titles-main">
                <div id="title">TrapperKeeper</div>
                <div id="slogan">Your Notes. For Keeps.</div>
              </div>
              <div id="nav-main-div">
                <Navigation isLoaded={isLoaded} />
              </div>
            </div>
          </div>
        </>
    )
}

export default SplashPage;
