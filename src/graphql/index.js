const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const { userQuery } = require('./queries');
// const {
//   updateUser,
//   deleteUser,
// } = require('./mutations');
const { pageQuery } = require('./queries');
// const {
//   createNote,
//   updateNote,
//   deleteNote,
// } = require('./mutations');

const RootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
  fields: () => ({
    // user: userQuery,
    page: pageQuery,
  }),
});


const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: RootMutation,
});

module.exports = { schema };