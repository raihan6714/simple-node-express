const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('wow!iam very excited learning Node');
});

const users = [
    { id: 0, name: 'raihan', email: 'raihan@gmail.com', phone: '01812345678' },
    { id: 1, name: 'sumon', email: 'sumon@gmail.com', phone: '01812345678' },
    { id: 2, name: 'samad', email: 'samad@gmail.com', phone: '01812345678' },
    { id: 3, name: 'raihan', email: 'raihan@gmail.com', phone: '01812345678' },
    { id: 4, name: 'khokon', email: 'khokon@gmail.com', phone: '01812345678' },
    { id: 5, name: 'humayun', email: 'humayun@gmail.com', phone: '01812345678' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple', 'malta'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('khub moja fajli aaammm');
})

app.listen(port, () => {
    console.log('listening to port', port);
})