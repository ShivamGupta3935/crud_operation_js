const app = require('./app.js')

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`app is listening on port http://localhost:${PORT}...`)
})



