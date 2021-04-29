import React from 'react'
// import PropTypes from 'prop-types'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchUser } from '../../../redux/modules/user'
import { Table,  Image, Header} from 'semantic-ui-react'

// interface RootState {
//   user: {
//     userList: []
//   }
// }

function GraphqlCrudGetList ({ page }) { 
  // const {
  //   userList,
  // } = useSelector((state: RootState) => state.user)

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(fetchUser())
  // },[])

  console.log('page', page)

  return (
    <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Avatar</Table.HeaderCell>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        
      }
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  )
}

GraphqlCrudGetList.propTypes = {
}

export default GraphqlCrudGetList