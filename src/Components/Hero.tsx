import heroMobile from '../assets/images/image-hero-mobile.png'
import heroDesktop from '../assets/images/image-hero-desktop.png'
import dataBiz from '../assets/images/client-databiz.svg'
import audoPhile from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'

const Hero = () => {
    return( 
        <>
        <div className='hero--container'>
            <img className='heroMobile--image' src={heroMobile} alt="" />
            <div className='hero--content'>
                <div>
                    <div className='hero--text'>
                        <h1>Make remote work</h1>
                        <p>
                        Get your team in sync, no matter your location. Streamline processes, 
                        create team rituals, and watch productivity soar.
                        </p>
                        <div>
                            <button className='btn'>Learn more</button>
                        </div>
                    </div>
                    <div className='company'>
                        <img src={dataBiz} alt="" />
                        <img src={audoPhile} alt="" />
                        <img src={meet} alt="" />
                        <img src={maker} alt="" />
                    </div>
                </div>
            </div>
            <img className='heroDesktop--image' src={heroDesktop} alt="" />
        </div>
     
        </>
    )
}

export default Hero;