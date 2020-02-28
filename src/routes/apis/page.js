import express from express
import Page from '../../models/Page'

const router = express.router()

router.get('/', async (req, res, next) => {
  try {
    const page = await Post.find()
    console.log(page)
  } catch (err) {
    console.log(err)
  }
})

export default router