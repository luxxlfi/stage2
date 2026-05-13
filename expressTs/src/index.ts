import express, { Request, Response } from 'express';
import router from './routes/userRout';

const app = express();
const port = 3000;
app.use(express.json());
app.use('/lux', router);

app.listen(port, () => {
    console.log(`server is runing on http://localhost:${port}`);
})
