import express from 'express';
import routes from './routes';
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(routes);

const start =  () => {
    try {
        console.log(`Server is listening at localhost ${process.env.LOCALHOST}`);
        app.listen(process.env.LOCALHOST);
    }
    catch (error) {
        console.log(error);
    }
}

start();