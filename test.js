const express = require('express');

const app = express();

app.get('/api/get', (req,res) => {
    res.send({message : 'Nodejs Aws deployment'});

})

app.listen(9000, (req,res) => {
    console.log('server is runing on port 9000')
})



