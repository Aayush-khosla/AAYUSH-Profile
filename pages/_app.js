import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp