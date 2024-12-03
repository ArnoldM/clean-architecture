import { BookOutputDto } from './book.dto';
import { GetBookOutPutDto } from './get-book.dto';
import { z } from 'zod';

export const PostBookInputDto = z.object({
  title: z.string().min(1),
  summary: z.string().min(5),
  author: z.string().min(1),
  totalPages: z.number().min(1),
});
export type PostBookInputDto = ReturnType<typeof PostBookInputDto.parse>;

export const PostBookOutPutDto = BookOutputDto;
export type PostBookOutPutDto = ReturnType<typeof GetBookOutPutDto.parse>;
