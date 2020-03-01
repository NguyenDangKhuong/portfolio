import express from 'express'
import Page from '../../mongodb/models/Page'

const router = express.Router()


// get all
router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.find()
    res.status(200).json(pages)
    console.log(pages)
  } catch (err) {
    console.log(err)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const { name, title, description, mediaUrl } = req.body
    const page = await new Page({
      name,
      title,
      mediaUrl,
      description
    }).save()
    res.status(201).json(page)
  } catch (err) {
    console.log(err)
  }
})

router.put('/update/:_id', async (req, res, next) => {
  console.log('req', req)
  try {
    const { _id } = req.params
    await Page.findByIdAndUpdate({ _id }, { ...req.body })
    res.status(203).send('Page updated')
  } catch (err) {
    console.log(err)
  }
})

router.delete('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params
    await Page.findByIdAndRemove({ _id })
    res.status(204).send('Page delete')
  } catch (err) {
    console.log(err)
  }
})

export default router