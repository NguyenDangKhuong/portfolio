const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

import { ImageType }  from './ImageType';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (user) => user.id,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
    password: {
      type: GraphQLString,
      resolve: (user) => user.password,
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email,
    },
    avatar: {
      type: GraphQLString,
      resolve: (user) => user.avatar,
    },
    images: {
      type: new GraphQLList(ImageType),
      resolve: (user) => user.images,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (user) => user.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (user) => user.updatedAt,
    },
  }),
});

module.exports = { UserType };