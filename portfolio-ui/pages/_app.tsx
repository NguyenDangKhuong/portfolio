import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/_App/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout children/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp