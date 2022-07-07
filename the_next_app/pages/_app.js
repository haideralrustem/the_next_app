import '../styles/globals.css'
import Layout from '../components/Layout'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
        
        )
}

export default MyApp
