const express = require('express')

const exApp = express()

exApp.get('/api/student', (req, res) => {
    res.end("Hello from express JS app created by many students...")
})

exApp.get('/api/faculty', (req, res) => {
    res.end("Hello from express JS app created by faculty...")
})

module.exports = exApp


 