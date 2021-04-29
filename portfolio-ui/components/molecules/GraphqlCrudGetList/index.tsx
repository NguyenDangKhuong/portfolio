import React from 'react'
// import PropTypes from 'prop-types'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchUser } from '../../../redux/modules/user'
import { Table, Image, Header } from 'semantic-ui-react'

// interface RootState {
//   user: {
//     userList: []
//   }
// }

const GraphqlCrudGetList = ({ page, user }) => {
  // const {
  //   userList,
  // } = useSelector((state: RootState) => state.user)

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(fetchUser())
  // },[])

  console.log('user', user)

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
          user?.map(({ username, avatar, position, email, nickname }) => (
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={avatar} rounded size='mini' />
                  <Header.Content>
                    {nickname}
                    <Header.Subheader>{position}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{username}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  )
}

GraphqlCrudGetList.propTypes = {
}

export default GraphqlCrudGetList