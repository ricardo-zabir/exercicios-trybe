import { product } from "../interface";
import ProductService from "../services/Product";
import { Request, Response, NextFunction } from 'express';

export default class ProductController {
    private service: ProductService
    constructor() {
        this.service = new ProductService()
    }
    async getAll(_req: Request, res: Response, _next: NextFunction):Promise<product[]> {
        const result = await this.service.getAll();
        return result
    }
}