
type Book = {
    title: string,
    author: string,
    genre: string,
    year: number,
    ISBN: string,
}

const books: Book[] = [
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Fiction",
        "year": 1925,
        "ISBN": "978-0-7432-7356-5"
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Fiction",
        "year": 1960,
        "ISBN": "978-0-06-112008-4"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "genre": "Fiction",
        "year": 1949,
        "ISBN": "978-0-452-28423-4"
    }
]

export { books }
export type { Book }