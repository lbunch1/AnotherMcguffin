import Head from 'next/head'
import SocialNav from '../components/socialNav';
import HomeGraphic from '../components/homeGraphic';
import Bio from '../components/bio';
import Events from '../components/events';
import Footer from '../components/footer';




export default function Home() {

  return (
    <>
      <Head>
        <title>Another Mcguffin - Band</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <SocialNav />
      <div className="pt-20 flex flex-col justify-center ">
        <HomeGraphic />
        <Bio />
        <Events />
      </div>
      <Footer />
    </>
  )
}