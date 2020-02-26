import mongoose from 'mongoose'

const { String } = mongoose.Schema.Types

const PageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mediaUrl: {
    type: String,
    required: true
  }
})

export default mongoose.models.Page || mongoose.model('Page', PageSchema)
