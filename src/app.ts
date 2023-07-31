import express from 'express';
require('dotenv').config()

const app = express();

app.use(express.json());

const start = async () => {
    try {
        console.log(`Server is listening at localhost ${process.env.LOCALHOST}`);
        app.listen(process.env.LOCALHOST);
    }
    catch (error) {
        console.log(error);
    }
}

start();