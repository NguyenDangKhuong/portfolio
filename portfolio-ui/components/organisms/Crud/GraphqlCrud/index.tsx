import React from 'react'
// import PropTypes from 'prop-types'
import { Tab } from 'semantic-ui-react'
import GraphqlCrudGetList from '../../../molecules/GraphqlCrudGetList'

interface Props {
  user: 
}

const GraphqlCrud: React.FC<Props> = ({ page,  }) { 
  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane><GraphqlCrudGetList page={page} /></Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]

  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  )
}

GraphqlCrud.propTypes = {
}

export default GraphqlCrud