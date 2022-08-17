import Social from '../components/social'
import Events from '../components/events'
import Image from 'next/image';
import { useEffect } from 'react';





export default function Home() {

  

  useEffect(() => {
    const navBar = document.querySelector('.hide-nav');
    let posY = 0;

    window.addEventListener('scroll', () => {
      if (window.scrollY > posY) {
        navBar.classList.add('-translate-y-80');
      } else if (window.scrollY < posY) {
        navBar.classList.remove('-translate-y-80');
      }
      posY = window.scrollY

    })
  }, [])

  return (
    <>
      <div className="hide-nav w-full fixed transition-all duration-500 ease-in-out z-50">
        <nav className="p-4 flex gap-3 justify-center">
          <Social url="#" img={"/ig.svg"} />
          <Social url="#" img={"/bandcamp.svg"} />
          <Social url="#" img={"/spotify.svg"} />
          <Social url="#" img={"/apple.svg"} />
          <Social url="#" img={"/ytmusic.svg"} />
        </nav>
      </div>
      <div className="pt-20 flex flex-col justify-center ">
        <div className="h-fit w-auto relative flex justify-center">
          <img src="/AMBanner_base.png" className="banner_base h-max-screen" alt={"Another McGuffin"} />
          <img src="/AMBanner_shine.png" className="banner_shine h-max-screen absolute" alt={"Another McGuffin"} />
        </div>
        <div className="w-full p-12 flex justify-center" >
          <div className="sm:max-w-[50vw]">
            <h1 className="text-3xl font-extrabold">Bio</h1>
            <p className="text-xl sm:text-2xl"> Another McGuffin is an alternative rock band with a unique blend of jazz and blues elements hailing from Corona Ca. The band formed in 2020 from long time friends and musicians with a common interest to make dynamic, engaging music. Drawing inspiration from bands like The Foo Fighters, and The Strokes, they also have a distinct mix of early alternative influence reminiscent of Fastball. Their unique style of music, and energy will captivate and enthrall audiences of all ages and styles. Recently the band released their debut EP “Based on a True Story” and are working on a full length album that they plan to release later. </p>
          </div>
        </div>
        <Events />
      </div>
      <footer className="text-center p-10 pb-36 text-zinc-400 bg-zinc-700">
        copyright &copy; logan bunch {new Date().getFullYear()}. icons from <a href="https://icons8.com">icons8</a>
      </footer>
    </>
  )
}