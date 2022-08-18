import { useEffect } from 'react';
import Social from './social';

const SocialNav = () => {
      

    useEffect(() => {
        const navBar = document.querySelector('.hide-nav');
        let posY = 0;
    
        window.addEventListener('scroll', () => {
          if (window.scrollY - posY > 30) {
            navBar.classList.add('-translate-y-80');
          } else if (window.scrollY - posY < -30 || window.scrollY === 0) {
            navBar.classList.remove('-translate-y-80');
          }
          posY = window.scrollY
    
        })
      }, [])

      return (
        <div className="hide-nav w-full fixed transition-all duration-500 ease-in-out z-50">
        <nav className="p-4 flex gap-3 justify-center">
          <Social url="http://instagram.com/another_mcguffin" img={"/ig.svg"} />
          <Social url="https://anothermcguffin.bandcamp.com/releases" img={"/bandcamp.svg"} />
          <Social url="https://open.spotify.com/artist/2n5zRL6sjaQcTW59XdFPOI" img={"/spotify.svg"} />
          <Social url="https://music.apple.com/us/artist/another-mcguffin/1597093677" img={"/apple.svg"} />
          <Social url="https://music.youtube.com/playlist?list=OLAK5uy_neXovl54QcKOGNOEgQSDezkHJo2wOPIw4" img={"/ytmusic.svg"} />
        </nav>
      </div>
      )
}

export default SocialNav;