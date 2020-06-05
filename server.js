const http = require('http')

const app = require('./backend/app')

const PORT = process.env.PORT || 3000
const server = http.createServer(app)

// start server
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
