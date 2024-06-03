import './Hero.css';
import VideoFooter from '../VideoFooter/VideoFooter';
import MarioStation from './../../assets/image/Mario-Station.png';
import backk2 from './../../assets/image/branding-pattren.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='FQ-Hero-'>
            <header className='of-header' id='Hero'>
                    <div className=''>
                        <div className='of-left-hero'>
                            <div className='fq-strings'>
                                <h1 className=''>Hey !! Mario still here, But don’t forget that</h1>
                                <p className=''>At focal X agency, we are working to build somthing different.
                                    Here you’ll have a group of creative people who specialize in:
                                    Branding, Digital Marketing, Web/App Development, Ui/Ux
                                    Content creation, Graphic design, Social media and More........
                                    So you can take a tour in our website, OR just <span className='font-bold'>Press Start :)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='Mario-station'></div>
                    <Link to={'https://focal-x.com/mario'}>
                         <div className="LinkToPlay"></div>
                        </Link>
                    <div className='controler'></div>
                   <VideoFooter />
            </header>
            
        </section>
    )
}

export default Hero

