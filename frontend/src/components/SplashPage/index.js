import Navigation from '../Navigation';
import './SplashPage.css'

function SplashPage({isLoaded}) {

    return (
        <>
          <h1>SPLASH PAGE</h1>
          <Navigation isLoaded={isLoaded} />
        </>
    )
}

export default SplashPage;
