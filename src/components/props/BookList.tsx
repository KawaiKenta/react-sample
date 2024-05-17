import { Book } from "./books";


const BookList = ({children, books}: {children: React.ReactNode, books: Book[]}) => {
    return (
    <>
        {children}
        <h3>Books</h3>
        <div>
            {books.map((book) => (
                <div key={book.ISBN}>title:{book.title} author:{book.author}
                , isbn:{book.ISBN}</div>
            ))}
        </div>
    </>
    )
}

export default BookList;