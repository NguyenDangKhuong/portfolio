import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import { Tab, Container } from 'semantic-ui-react'
import gql from 'graphql-tag'

import GraphqlCrud from '../../components/organisms/Crud/GraphqlCrud'
import RestfulCrud from '../../components/organisms/Crud/RestfulCrud'
import styles from './styles.module.scss'
import { updateUserList } from '../../redux/modules/user'

export interface 

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
`

const GET_USER = gql`
  query getPage {
    page {
      _id,
      name,
      title,
      description,
      mediaUrl,
    }
}
`

const GET_USERS = gql`
  query getUser {
    user {
      username,
      password,
      email,
      avatar,
      images { url }
    }
  }
`

const Crud = ({  } : any) => {
  const dispatch = useDispatch()
  const { data } = useQuery(GET_PAGE)
  console.log('data', data)
  const { data: userData } = useQuery(GET_USERS)
  console.log('aaa', userData)
  
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
        { menuItem: 'Graphql', pane: <Tab.Pane key={1}><GraphqlCrud key='graphql' user={userData} page={data}/></Tab.Pane>},
        { menuItem: 'Restful', pane: <Tab.Pane key={2}><RestfulCrud key='rest'/></Tab.Pane>},
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
