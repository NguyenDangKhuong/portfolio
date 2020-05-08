const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql');

const ImageInputType = new GraphQLInputObjectType({
  name: 'InputImage',
  description: 'This represents a Image',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString }
  }),
});

module.exports = { ImageInputType };