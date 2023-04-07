import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
            {/* info */}
            <div className="info"> 
                <h1>job <span>tracking</span> application</h1>
                
                <p>I'm baby vexillologist cold-pressed kitsch butcher biodiesel williamsburg 90's gochujang kickstarter DIY live-edge. 
                Squid butcher tofu lomo cronut pitchfork seitan chicharrones single-origin coffee roof party. 
                Truffaut yes plz vape, seitan tacos humblebrag butcher jean shorts.</p>
                
                <Link to="/register"className="btn btn-hero">Login / Register</Link>
            </div>
            {/* hero image */}
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}
export default Landing;