const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql');

const ImageInputType = new GraphQLInputObjectType({
  name: 'ImageInputType',
  fields: {
    id: { type: GraphQLID },
    url: { type: GraphQLString }
  },
});

module.exports = { ImageInputType };