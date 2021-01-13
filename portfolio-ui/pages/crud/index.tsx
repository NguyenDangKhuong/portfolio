import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { Tab, Container } from 'semantic-ui-react'
import gql from 'graphql-tag'

import GraphqlCrud from '../../components/organisms/Crud/GraphqlCrud'
import RestfulCrud from '../../components/organisms/Crud/RestfulCrud'
import styles from './styles.module.scss'
import { updateUserList } from '../../redux/modules/user'

const GET_PAGE = gql`
  query getPage {
    page {
      _id,
      name,
      title,
      description,
      mediaUrl,
    }
  }
`;

const Crud = ({  } : any) => {
  const dispatch = useDispatch()
  const { data } = useQuery(GET_PAGE)
  console.log('data', data)
  
  useEffect(() => {
    dispatch(updateUserList(data))
  }, [])
  
  // const {
  //   userList
  // } = useSelector(state => state.user)
  // console.log('userList', userList)

  
  // const [typeApi, setTypeApi] = useState(1) 
  return (
    <Container>
      <Tab className={styles.tabContainer} panes={[
        { menuItem: 'Graphql', pane: <Tab.Pane key={1}><GraphqlCrud key='graphql'/></Tab.Pane>},
        { menuItem: 'Restful', pane: <Tab.Pane key={2}><RestfulCrud key='Res'/></Tab.Pane>},
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
