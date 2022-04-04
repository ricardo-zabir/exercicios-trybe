import { Router } from 'express';
import { getAll, getById, create, update, remove} from '../controllers/books.controller';
import validationBook from '../middlewares/book.middleware';

const router = Router();

const booksSlashId = 'books/:id'
router.get('/books', getAll);
router.get('/books/:id', getById);
router.post('/books/', validationBook, create);
router.put(booksSlashId, validationBook, update);
router.delete(booksSlashId, remove);

export default router;