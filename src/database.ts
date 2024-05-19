import { Database } from './types' // this is the Database interface we defined earlier
import { createPool } from 'mysql2' // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from 'kysely'
import 'dotenv/config'


const dbconfig2={
  database: process.env.DBNAME,
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  port: parseInt(process.env.DBPORT as string),
  connectionLimit: 10,
}

const dbConfig=process.env.DBURI as string


const pool=createPool(dbConfig as any || dbconfig2)

pool.on('connection',()=>{
    console.log('Connection with db estabished')
})

const dialect = new MysqlDialect({
  pool: pool
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely 
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
})