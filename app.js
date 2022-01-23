const express = require('express')
const app = express()
const port = 8080

app.use('/api', require('./routes/index'))

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})