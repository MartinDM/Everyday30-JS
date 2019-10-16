const express = require('express')
const markdown = require('markdown-it')
const { promisify } = require('util')
const fs = require('fs')

const md = new markdown()
const readFile = promisify(fs.readFile)

const app = express()
const PORT = 3000
const { log, error } = console

app.use((req, res, next) => {
    log(`${req.method} to ${req.path}`)
    next()
})

app.listen(PORT, () => {
    console.log(`🚀 server listening on ${PORT}`)
})