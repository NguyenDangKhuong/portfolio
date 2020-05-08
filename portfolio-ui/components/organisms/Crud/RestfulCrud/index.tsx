import React from 'react'
// import PropTypes from 'prop-types'
import { Tab } from 'semantic-ui-react'

function RestfulCrud () { 
  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]

  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  )
}

RestfulCrud.propTypes = {
}

export default RestfulCrud