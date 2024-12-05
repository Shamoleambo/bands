type AuthorInfo = {
  about: string
  picture: string
  otherBooks: string[]
}

export interface Book {
  id: number
  title: string;
  author: string;
  cover: string;
  year: number;
  amazonLink: string;
  authorInfo: AuthorInfo
}
