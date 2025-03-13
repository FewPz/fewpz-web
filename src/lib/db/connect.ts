import type { DB } from './db'
import { createPool } from 'mysql2'
import { Kysely, MysqlDialect } from 'kysely'
import { env } from '$env/dynamic/private'

const dialect = new MysqlDialect({
  pool: createPool({
    uri: env.DATABASE_URL,
    connectionLimit: 10,
  })
})

export const db = new Kysely<DB>({
  dialect,
})