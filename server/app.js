/*import express from 'express';
import cors from 'cors';
import router from './routers/router.js'
import { prepareDatabase } from './model/index.js';*/
const express = require('express')
const cors = require('cors')
const router = require('./routers/router')
const {prepareDatabase} = require('./model/index.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false}))
app.use(cors())

//create database and tables
app.use(prepareDatabase)

app.use('/api', router)

app.use((req, res, next) => {
    const error = new Error('page not found')
    error.status = 404
    next(error)
})

app.use((error, req,res, next) => {
    res.status(error.status || 500).json(error.message)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

