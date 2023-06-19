const express = require('express')
const app = express()
const port = 4323

app.listen(port, () => console.log('port is listening at ', port))