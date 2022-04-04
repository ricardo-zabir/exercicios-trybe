import { Router, Request, Response, NextFunction } from "express";
import ProductController from "../controllers/Product";

const router = Router();
const controller = new ProductController();
router.get('/', async(req: Request, res: Response, next: NextFunction) => {
    await controller.getAll(req, res, next)
});

export default router