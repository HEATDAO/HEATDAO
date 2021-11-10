import '../styles/globals.css'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'

import '../styles/nav.css'

import heat from '../public/images/heat.png'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
      />
      <nav className="border-b">
        <Image src={heat} alt="HeayDAO banner" />
        <div className="p-4 font-bold text-center bg-gray-900">
          <Link href="/">
            <a className="mr-10 nav-links">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-10 nav-links">
              Sell your HEAT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-10 nav-links">
              My Purchases
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-10 nav-links">
              My Creations
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
    </div>
  )
}

export default MyApp
