import { handleActions, createAction } from 'redux-actions'
// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'


const USER = 'USER'

export const UPDATE_LIST_USER = `${USER}/UPDATE_LIST_USER`

// const GET_USERS = gql`
//   query getUser {
//     user {
//       username,
//       password,
//       email,
//       avatar,
//       images { url }
//     }
//   }
// `
// const { data } = useQuery(GET_USERS)
// const aaa = useQuery(GET_USERS)
// console.log('aaa', aaa)

// Action Creator
// export const fetchUser = () => async (dispatch: any) => {
//   try {
//     dispatch(updateUserList(data))
//   } catch (e) {
//     console.log(e)
//   }
// }



export const updateUserList = createAction(UPDATE_LIST_USER)

// Initial State
const initialState = {
  userList: []
}

// reducer
export default handleActions(
  {
    [UPDATE_LIST_USER]: (state: any, { payload }: any) => ({
      ...state,
      userList: payload,
    })
  },
  initialState
)
