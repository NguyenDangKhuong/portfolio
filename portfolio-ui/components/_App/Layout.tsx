import Head from 'next/head'
import HeadContent from './HeadContent'
import ResponsiveContainer from './ResponsiveContainer'
import Footer from './Footer'

function Layout ({ children } : {children: any}) {
  return (
    <>
      <Head>
        <HeadContent />
      </Head>
      <ResponsiveContainer>
          {children}
      </ResponsiveContainer>
      <Footer />
    </>
  )
}

export default Layout
