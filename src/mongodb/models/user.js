import mongoose from 'mongoose'

const { String, List } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  images: {
    type: List,
    required: true
  },
  createdAt: {
    type: GraphQLString,
    resolve: (user) => user.createdAt,
  },
  updatedAt: {
    type: GraphQLString,
    resolve: (user) => user.updatedAt,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
