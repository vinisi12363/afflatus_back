import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { loadEnv } from './config/envs';
import {signInRoute ,signUpRoute, customersRoute, childsRoute, specialDateRoute, eventsRoute} from '@/routers';

loadEnv();
const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/signin", signInRoute)
  .use("/signup", signUpRoute)
  .use("/customers", customersRoute)
  .use("/child", childsRoute)
  .use("/specialDate", specialDateRoute)
  .use("/events", eventsRoute)

const port = process.env.port || 4000

app.listen(port ,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
export default app;