import { Pool, PoolClient, PoolConfig } from "pg"

export const secret: string = '26774b20a3f70239de74748a3eb839b77490df401acfd942a0c0da3d03d44b7bad159453baa985a8396c1cc30d2ae59a3def06912beac40d1c09993b1f4cafb2dc36041c80478fd512f9db74ff'
export const salt: string = 'd50b439bdcfb69b042334b95cce3d98eac3321as3fadbc4bef0038d31d0dab1fe0acd8e65c054e5ab31b2dad4a9c8c1a5df8f3185acefe9bf9419e44411f3286a82d7cb4a3faed2'

export const database: PoolConfig = {
    user: 'marcatupyme',
    database: 'marca_pymes_db_332',
    host: 'localhost',
    password: 'mtp32235257',
    port: 5432,
}

export const  sessionTable = 'sess_tbl';

export const pool: Pool = new Pool(database)

export const getClient: () => Promise<PoolClient> = async () => await pool.connect()

export const closePool: () => Promise<void> = async () => await pool.end();