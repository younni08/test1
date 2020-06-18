// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("receive request\n");
    res.send('Hello World!')
});
app.listen(3000, () => console.log('server is running on port 3000'));