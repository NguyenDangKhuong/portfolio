import React from 'react'
// import PropTypes from 'prop-types'
import { Table,  Image, Header} from 'semantic-ui-react'

function GraphqlCrudGetList () { 


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
      <Table.Row>
        <Table.Cell>
        <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Jamie Harington
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
            <Header.Content>
              Jill Lewis
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              John Lilki
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
            <Header.Content>
              John Lilki
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>January 11, 2014</Table.Cell>
        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
        <Table.Cell>Yes</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  )
}

GraphqlCrudGetList.propTypes = {
}

export default GraphqlCrudGetList