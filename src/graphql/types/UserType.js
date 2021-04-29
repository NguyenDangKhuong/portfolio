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
    _id: {
      type: GraphQLInt,
      resolve: (user) => user._id,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
    nickname: {
      type: GraphQLString,
      resolve: (user) => user.nickname,
    },
    position: {
      type: GraphQLString,
      resolve: (user) => user.position,
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