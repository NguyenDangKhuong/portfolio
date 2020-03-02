const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const PageType = new GraphQLObjectType({
  name: 'Page',
  description: 'This represents a Page',
  fields: () => ({
    name: {
      type: GraphQLInt,
      resolve: (page) => page.name,
    },
    title: {
      type: GraphQLString,
      resolve: (page) => page.title,
    },
    description: {
      type: GraphQLString,
      resolve: (page) => page.description,
    },
    mediaUrl: {
      type: GraphQLString,
      resolve: (page) => page.mediaUrl,
    },
  }),
});

module.exports = { PageType };