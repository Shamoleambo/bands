import { AuthorInfo } from "./AuthorInfo";

export interface Book {
  id: number;
  title: string;
  author: string;
  covers: string[];
  year: number;
  amazonLink: string;
  about: string;
  authorInfo: AuthorInfo;
}
