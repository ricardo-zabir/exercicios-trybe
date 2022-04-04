"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
const http_status_codes_1 = require("http-status-codes");
const books_service_1 = __importDefault(require("../services/books.service"));
const bookService = new books_service_1.default();
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield bookService.getAll();
    res.status(http_status_codes_1.StatusCodes.OK).json(books);
});
exports.getAll = getAll;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const book = yield bookService.getById(id);
    if (!book) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message: 'Book not found!' });
    }
    res.status(http_status_codes_1.StatusCodes.OK).json(book);
});
exports.getById = getById;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    const bookCreated = yield bookService.create(book);
    res.status(http_status_codes_1.StatusCodes.CREATED).json(bookCreated);
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const book = req.body;
    yield bookService.update(id, book);
    res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    yield bookService.remove(id);
    res.status(http_status_codes_1.StatusCodes.OK).json({ message: 'Book deleted successfully' });
});
exports.remove = remove;
