const express = require('express')
const exphbs = require('express-handlebars').engine
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const port = 3000

// setting template engine
app.engine('hbs', exphbs ({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
// setting static files
app.use(express.static('public'))
// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.use(routes)


// listen on the Express server
app.listen(port, () => {
  console.log(`Express app is running on the http://localhost:${port}`)
})