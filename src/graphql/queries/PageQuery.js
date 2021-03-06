
const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { PageType } = require('../types');
import { Page } from '../../mongodb/models';

const pageQuery = {
  type: new GraphQLList(PageType),
  args: {
    id: {
      name: 'id',
      type: GraphQLString,
    },
    // userId: {
    //   name: 'userId',
    //   type: GraphQLString,
    // },
    // page: {
    //   name: 'page',
    //   type: GraphQLString,
    // },
    name: {
      name: 'name',
      type: GraphQLString,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    description: {
      name: 'description',
      type: GraphQLString,
    },
    mediaUrl: {
      name: 'mediaUrl',
      type: GraphQLString,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: async (user, args) => await Page.find({ ...args })
};

module.exports = { pageQuery };