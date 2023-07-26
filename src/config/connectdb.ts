import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const configDatabase = {
    connectionString: process.env.DATABASE_URL
}
 new Pool({
    
 })
export const db = new Pool(configDatabase)