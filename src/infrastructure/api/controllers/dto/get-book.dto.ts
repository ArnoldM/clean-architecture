import { BookOutputDto } from './book.dto';
import { z } from 'zod';

export const GetBookOutPutDto = BookOutputDto;
export type GetBookOutPutDto = ReturnType<typeof GetBookOutPutDto.parse>;

export const GetBooksOutPutDto = z.array(BookOutputDto);
export type GetBooksOutPutDto = ReturnType<typeof GetBooksOutPutDto.parse>;
