import '../styles/globals.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp