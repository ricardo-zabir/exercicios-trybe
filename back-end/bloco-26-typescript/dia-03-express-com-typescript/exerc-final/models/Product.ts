import { Pool, RowDataPacket} from 'mysql2/promise'
import { product } from '../interface'
export default class ProductModel {
    constructor(private connection: Pool) {
        this.connection = connection
    }
    async getAll():Promise<product[]>{
        const [result] = await this.connection.execute<RowDataPacket []>('SELECT * FROM products');
        return result as product[]
    }
}
