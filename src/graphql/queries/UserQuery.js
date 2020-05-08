const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  // GraphQLObjectType
} = require('graphql');

const { UserType, ImageType } = require('../types');
const { User } = require('../../mongodb/models');

const userQuery = {
  type: new GraphQLList(UserType),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    username: {
      name: 'username',
      type: GraphQLString,
    },
    password: {
      name: 'password',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
    avatar: {
      name: 'avatar',
      type: GraphQLString,
    },
    // images: {
    //   name: 'images',
    //   type: new GraphQLList(ImageType)
    // },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: async (user, args) => await User.find({ ...args })
};

module.exports = { userQuery };