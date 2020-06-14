import express from 'express';

const app = express();

const users = [
    'Fer',
    'Nando',
    'juao'
];

app.get('/users', (request, response) => {
    console.log('listagem de usuarios');
    response.json(users);
});

app.get('/users:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Fernando',
        email: 'fedssdd'
    };

    return response.json(user);
});

app.listen(3333);