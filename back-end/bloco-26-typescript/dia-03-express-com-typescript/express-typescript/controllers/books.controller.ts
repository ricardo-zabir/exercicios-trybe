import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/books.service';

const bookService = new BookService();

export const getAll = async (_req: Request, res: Response) => {
  const books = await bookService.getAll();
  res.status(StatusCodes.OK).json(books);
};

export const getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const book = await bookService.getById(id);

  if (!book) {
    return res.status(StatusCodes.NOT_FOUND)
      .json({ message: 'Book not found!'});
  }

  res.status(StatusCodes.OK).json(book);
}

export const create = async (req: Request, res: Response) => {
  const book = req.body;

  const bookCreated = await bookService.create(book);
  res.status(StatusCodes.CREATED).json(bookCreated);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = req.body;
  await bookService.update(id, book);

  res.status(StatusCodes.NO_CONTENT).end();
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await bookService.remove(id);

  res.status(StatusCodes.OK).json({ message: 'Book deleted successfully' });
};

