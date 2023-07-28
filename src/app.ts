import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';



import {signinRoute , customersRoute} from '@/routers';

const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/signin', signinRoute)
  .use('/customers' , customersRoute)


const port = process.env.port || 4000

app.listen(port ,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
export default app;