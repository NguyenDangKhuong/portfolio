const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const ImageType = new GraphQLObjectType({
  name: 'Image',
  description: 'This represents a Image',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (image) => image.id,
    },
    url: {
      type: GraphQLString,
      resolve: (image) => image.url,
    }
  }),
});

module.exports = { ImageType };