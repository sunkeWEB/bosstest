const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DB_URL = "mongodb://127.0.0.1:27017/imooc";
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
    console.log("mongoose success");
});
app.get('/', (req, res) => {
    res.json({
        code:1,
        msg:"ok"
    });
});

app.listen('9093',()=>{
    console.log("node server start success");
});