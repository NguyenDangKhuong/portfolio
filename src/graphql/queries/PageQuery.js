
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
      type: GraphQLInt,
    },
    userId: {
      name: 'userId',
      type: GraphQLInt,
    },
    page: {
      name: 'page',
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
  resolve: (user, args) => Page.find()
};

module.exports = { pageQuery };