import express, { Request, Response } from 'express';
import mainRoute from './routes/index';

const app = express();
const port = 3000;
app.use(express.json());
app.use('/lux', mainRoute);

app.listen(port, () => {
    console.log(`server is runing on http://localhost:${port}`);
})
