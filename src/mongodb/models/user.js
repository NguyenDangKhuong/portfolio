import mongoose from 'mongoose'

const { String, Mixed } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  password: {
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
    type: Mixed,
    required: true
  },
  createdAt: {
    type: String,
    resolve: (user) => user.createdAt,
  },
  updatedAt: {
    type: String,
    resolve: (user) => user.updatedAt,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
