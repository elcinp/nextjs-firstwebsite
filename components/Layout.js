import Navbar from './Navbar'
import Head from 'next/head'


function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>elcinp Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>design by elcin</footer>
    </div>
  )
}

export default Layout
