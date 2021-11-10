import '../styles/globals.css'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'

import heat from '../public/images/heat.png'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b">
        <Image src={heat} alt="HeayDAO banner" />
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
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
