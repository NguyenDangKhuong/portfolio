const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
// const merge = require('lodash.merge');

const { PageType } = require('../types');
const { Page } = require('../../mongodb/models');

const createPage = {
  type: PageType,
  description: 'The mutation that allows you to create a new Page',
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      name: 'title',
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      name: 'description',
      type: new GraphQLNonNull(GraphQLString),
    },
    mediaUrl: {
      name: 'mediaUrl',
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: async (value, args) => {
    const { name, title, description, mediaUrl } = args 
    const newPage = await new Page({
      name,
      title,
      mediaUrl,
      description
    }).save()
    if(!newPage) {
      throw new Error('Error')
  }
    return newPage
  },
};

// const updatePage = {
//   type: PageType,
//   description: 'The mutation that allows you to update an existing Page by Id',
//   args: {
//     id: {
//       name: 'id',
//       type: new GraphQLNonNull(GraphQLInt),
//     },
//     userId: {
//       name: 'userId',
//       type: new GraphQLNonNull(GraphQLInt),
//     },
//     page: {
//       name: 'page',
//       type: GraphQLString,
//     },
//   },
//   resolve: async (value, { id, userId, page }) => {
//     const foundPage = await Page.findByPk(id);

//     if (!foundPage) {
//       throw new Error(`Page with id: ${id} not found!`);
//     }

//     const updatedPage = merge(foundPage, {
//       userId,
//       page,
//     });

//     return foundPage.update(updatedPage);
//   },
// };

// const deletePage = {
//   type: PageType,
//   description: 'The mutation that allows you to delete a existing Page by Id',
//   args: {
//     id: {
//       name: 'id',
//       type: new GraphQLNonNull(GraphQLInt),
//     },
//   },
//   resolve: async (value, { id }) => {
//     const foundPage = await Page.findByPk(id);

//     if (!foundPage) {
//       throw new Error(`Page with id: ${id} not found!`);
//     }

//     await Page.destroy({
//       where: {
//         id,
//       },
//     });

//     return foundPage;
//   },
// };

module.exports = {
  createPage,
  // updatePage,
  // deletePage,
};