const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const scrap = require('./scrap')

app.use(cors())

app.get('/', (req, res) => {
  res.send('To get your courses information use /your_account. For example /Luis_LiraC')
})

app.get('/:account', async (req, res) => {
  try {
    const { account } = req.params
    const data = await scrap(account)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})