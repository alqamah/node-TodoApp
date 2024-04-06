require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/web')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const { connectMongoose } = require('./app/Database/db')
connectMongoose();

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}...`)
})


