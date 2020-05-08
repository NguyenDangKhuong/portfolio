import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react'
// import HomepageHeading from './HomepageHeading'
import getWidth from '../../../utils/getWidth'

function MobileContainer ({ children } : any) {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>()

  const handleSidebarHide = () => setSidebarOpened(false)
  const handleToggle = () => setSidebarOpened(true)

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation='push'
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as='a' active>
          Home
        </Menu.Item>
        <Menu.Item as='a'>Work</Menu.Item>
        <Menu.Item as='a'>Company</Menu.Item>
        <Menu.Item as='a'>Careers</Menu.Item>
        <Menu.Item as='a'>Log in</Menu.Item>
        <Menu.Item as='a'>Sign Up</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={handleToggle}>
                <Icon name='sidebar' />
              </Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted>
                  Log in
                </Button>
                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          {/* <HomepageHeading mobile /> */}
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer