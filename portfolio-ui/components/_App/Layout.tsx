import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import HeadContent from './HeadContent'

function Layout ({ children } : {children: any}) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel='stylesheet' type='text/css' href='/public/styles.css' />
        <link rel='stylesheet' type='text/css' href='/public/nprogress.css' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        <title>Khuong 's portfolio</title>
      </Head>
      <Container text>
        {children}
      </Container>
    </>
  )
}

export default Layout
