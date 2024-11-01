import { useState, useEffect } from "../Hook/Hook"
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("./booksData.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="grid grid-cols-3 gap-6">
            {
                books.map(book => <Book key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default Books;
