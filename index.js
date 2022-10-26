const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/categories.json');
const courses = require('./Data/courses.json');

app.get('/', (req, res) => {
    res.send('Server running');
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.get('/courses/', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('Server running on port', port);
})