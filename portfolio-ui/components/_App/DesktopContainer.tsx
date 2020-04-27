import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
// import HomepageHeading from './HomepageHeading'
import getWidth from '../../utils/getWidth'

if (typeof window !== "undefined") {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}

function DesktopContainer ({
  children
} : any) {
  const router = useRouter()
  const [fixed, setFixed] = useState<boolean>()

  const isActive = (route: string) => {
    return route === router.pathname
  }
  const hideFixedMenu = () => setFixed(false)
  const showFixedMenu = () => setFixed(true)

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={() => showFixedMenu}
        onBottomPassedReverse={() => hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 500 }}
          vertical
        >
          <Menu
          fixed={fixed ? 'top' : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Link href='/'>
                <Menu.Item as='a' active={isActive('/')}>
                  Home
                </Menu.Item>
              </Link>
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              <Link href='/profile'>
                <Menu.Item as='a' active={isActive('/profile')}>Profile</Menu.Item>
              </Link>
              <Menu.Item position='right'>
                <Button as='a' inverted={!fixed}>
                  Log in
                </Button>
                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          {/* <HomepageHeading /> */}
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer