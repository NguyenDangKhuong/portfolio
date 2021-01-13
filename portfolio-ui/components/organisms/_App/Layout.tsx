import Head from 'next/head'
import HeadContent from './HeadContent'
import ResponsiveContainer from './ResponsiveContainer'
import Footer from './Footer'

function Layout ({ children } : {children: any}) {
  return (
    <>
      <Head>
        <HeadContent />
        <link rel='stylesheet' type='text/css' href='/styles.css' />
        <link rel='stylesheet' type='text/css' href='/nprogress.css' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        <title>Khuong 's portfolio</title>
      </Head>
      <ResponsiveContainer>
          {children}
      </ResponsiveContainer>
      <Footer />
    </>
  )
}

export default Layout
