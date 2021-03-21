const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Views Engine
app.set('viewengine', 'ejs')

// Router for Pages

// Error Page
app.use((req, res) => {
  res.status(404)
  res.send('404.ejs', '404')
})

// Listener
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(``)
})