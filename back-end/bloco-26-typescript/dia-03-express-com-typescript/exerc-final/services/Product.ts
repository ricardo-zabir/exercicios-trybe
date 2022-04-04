import ProductModel from "../models/Product"
import connection from "../models/connection"
import { product } from "../interface";

export default class ProductService {
    private model: ProductModel
    constructor() {
        this.model = new ProductModel(connection);
    }
    async getAll():Promise<product[]> {
        const result = await this.model.getAll();
        return result
    }
}