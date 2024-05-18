import { Database } from './types' // this is the Database interface we defined earlier
import { createPool } from 'mysql2' // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from 'kysely'
import 'dotenv/config'

const pool=createPool(process.env.DBURI as string)

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