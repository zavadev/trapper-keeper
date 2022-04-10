import Navigation from '../Navigation';
import './SplashPage.css'

function SplashPage({isLoaded}) {

    return (
        <>
          <div id="splash-container">
            <div id="splash-main-div">
              <div id="titles-main-div">
                <div id="title">TrapperKeeper</div>
                <div id="slogan">Remember It.</div>
              </div>
              <Navigation isLoaded={isLoaded} />
            </div>
          </div>
        </>
    )
}

export default SplashPage;
