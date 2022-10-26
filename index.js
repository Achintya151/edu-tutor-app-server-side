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

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '8') {
        res.send(courses);
    } else {
        const categoryCourse = courses.filter(course => course.category_id === id);
        res.send(categoryCourse);
    }

})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Server running on port', port);
})