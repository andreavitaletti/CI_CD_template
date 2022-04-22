const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Ciao Mondo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
