const  express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

//sets the default timeout for the application to 3s
// app.use(function (req , res, next){
    // setTimeout(next, 3000)
// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'index.html'));
})

app.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'login.html'));
})

app.post('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'logout.html'))
})

app.get('/noids', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'noids.html'))
})

//starting the server on port 3000
app.listen(PORT, ()=> console.log('Server started on port ${PORT}'));