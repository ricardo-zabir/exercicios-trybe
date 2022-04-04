"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = require("../controllers/books.controller");
const book_middleware_1 = __importDefault(require("../middlewares/book.middleware"));
const router = (0, express_1.Router)();
const booksSlashId = 'books/:id';
router.get('/books', books_controller_1.getAll);
router.get('/books/:id', books_controller_1.getById);
router.post('/books/', book_middleware_1.default, books_controller_1.create);
router.put(booksSlashId, book_middleware_1.default, books_controller_1.update);
router.delete(booksSlashId, books_controller_1.remove);
exports.default = router;
