const express = require('express')
const app = express()
const port = 8080

app.use('/api', require('./routes/index'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})