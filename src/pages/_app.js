import '../styles/global.css'
import '../styles/header.css'
import '../styles/card.css'
import '../styles/testNav.css'
// import '../styles/nav.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp