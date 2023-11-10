// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    {
        name: 'Bob',
        comment: 'I like it!',
    },
    {
        name: 'Jack',
        comment: 'Good job!',
    },
];
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set view engine
app.set('view engine', 'pug');
// Set view directory
app.set('views', './views');
// Get request
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments: comments });
});
app.get('/comments/create', (req, res) => {
    res.render('comments/create');
});
// Post request
app.post('/comments/create', (req, res) => {
    comments.push(req.body);
    res.redirect('/comments');
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//# sourceMappingURL=comments.js.map