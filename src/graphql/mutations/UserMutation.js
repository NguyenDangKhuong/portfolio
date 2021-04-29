const {
  GraphQLString,
  // GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');
const { UserType } = require('../types');
const { ImageInputType } = require('../inputTypes');
const { User } = require('../../mongodb/models');

const createUser = {
  type: UserType,
  description: 'The mutation that allows you to create a new Page',
  args: {
    username: {
      name: 'username',
      type: new GraphQLNonNull(GraphQLString),
    },
    nickname: {
      name: 'nickname',
      type: new GraphQLNonNull(GraphQLString),
    },
    position: {
      name: 'position',
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      name: 'password',
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      name: 'email',
      type: new GraphQLNonNull(GraphQLString),
    },
    avatar: {
      name: 'avatar',
      type: new GraphQLNonNull(GraphQLString),
    },
    images: {
      name: 'images',
      type: new GraphQLList(ImageInputType)
    }
  },
  resolve: async (value, args) => {
    const { username, nickname, position, password, email, avatar, images } = args 
    const newUser = await new User({ username, password, nickname, position, email, avatar, images }).save()
    if(!newUser) {
      throw new Error('Error')
    }
    return newUser
  },
};

// const updateUser = {
//   type: UserType,
//   description: 'The mutation that allows you to update an existing User by Id',
//   args: {
//     user: {
//       name: 'user',
//       type: UserInputType('update'),
//     },
//   },
//   resolve: async (_, { user }) => {
//     const foundUser = await User.findByPk(user.id);

//     if (!foundUser) {
//       throw new Error(`User with id: ${user.id} not found!`);
//     }

//     const updatedUser = merge(foundUser, {
//       username: user.username,
//       email: user.email,
//     });

//     return foundUser.update(updatedUser);
//   },
// };

// const deleteUser = {
//   type: UserType,
//   description: 'The mutation that allows you to delete a existing User by Id',
//   args: {
//     user: {
//       name: 'user',
//       type: UserInputType('delete'),
//     },
//   },
//   resolve: async (_, { user }) => {
//     const foundUser = await User.findByPk(user.id);

//     if (!foundUser) {
//       throw new Error(`User with id: ${user.id} not found!`);
//     }

//     await User.destroy({
//       where: {
//         id: user.id,
//       },
//     });

//     return foundUser;
//   },
// };

module.exports = {
  createUser
  // updateUser,
  // deleteUser,
};