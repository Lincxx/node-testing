const express  = require('express');
const app = express();


//ROUTES

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    var users  = [
        {
            name: 'Jeremy',
            age: 40
        },
        {
            name: 'Paul',
            age: 34
        }
    ];
    res.send(users);
});

app.listen(3000, () => {
    console.log('Server Started');
});

module.exports.app = app;