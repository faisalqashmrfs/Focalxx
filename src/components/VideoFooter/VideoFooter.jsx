import './VideoFooter.css'
import x from './../../assets/image/x.png'
import insta from './../../assets/image/insta.png'
import linkedin from './../../assets/image/linkedin.png'
import behance from './../../assets/image/behance.png'
import facebook from './../../assets/image/facebook.png'
import scrool from './../../assets/scrollling.png'

export default function VideoFooter() {
    return (
        <footer className='Video-Footer'>
            <div className='contant'>
                <p>
                ©  2021 - 2023 focal X agency All Right Reserved
                </p>
                <div className='IconsFather'>
                    <div>
                        <a href="https://twitter.com/focal_x_agency"><img src={x} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/focal.x.agency"><img src={insta} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/focal-x-agency/"><img src={linkedin} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://www.behance.net/focal-x-agency"><img src={behance} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/focal.x.agency/"><img src={facebook} alt="" /></a>
                    </div>
                </div>
            </div>
            <img className='scrooling' src={scrool} alt="scrool-photo" />
        </footer>
    )
}
