import React, { useState } from 'react'
import { Tab, Container } from 'semantic-ui-react'
import GraphqlCrud from '../../components/organisms/Crud/GraphqlCrud'
import RestfulCrud from '../../components/organisms/Crud/RestfulCrud'
import styles from './styles.module.scss'

function Crud ({  } : any) {
  const [typeApi, setTypeApi] = useState(1) 
  console.log(typeApi, setTypeApi)
  return (
    <Container>
      <Tab className={styles.tabContainer} panes={[
        { menuItem: 'Graphql', pane: <Tab.Pane><GraphqlCrud key='graphql'/></Tab.Pane>},
        { menuItem: 'Restful', pane: <Tab.Pane><RestfulCrud key='Res'/></Tab.Pane>},
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
