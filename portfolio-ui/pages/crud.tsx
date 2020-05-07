import React, { useState } from 'react'
import { Tab, Container } from 'semantic-ui-react'

function Crud ({  } : any) {
  const [typeApi, setTypeApi] = useState(1) 
  console.log(typeApi, setTypeApi)
  return (
    <Container>
      <Tab panes={[
        { menuItem: 'Graphql', pane: <Tab.Pane key='Graphql'>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Restful', pane: <Tab.Pane key='Restful'>Tab 2 Content</Tab.Pane> },
      ]} 
      renderActiveOnly={false} 
      />
    </Container>
  )
}

Crud.getInitialProps = async () => {
  // const url = `${baseUrl}/api/Profile`
  // const payload = { params: { _id } }
  // const response = await axios.get(url, payload)
  return { 
    profile: 'Profile Data Test' 
  }
}

export default Crud
