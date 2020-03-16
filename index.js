const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const cors = require('cors')
const scrap = require('./scrap')

app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/scrap/:account', async (req, res) => {
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