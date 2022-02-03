
import '../styles/Homepage.css'

import Book from '../components/Book'
function Home({ books, search }) {

    let filteredBooks = books
    filteredBooks = filteredBooks.filter(function (book) {
        return book.title.toLowerCase().includes(search.toLowerCase())
    })






    return (
        <main className="container">
            <section className="books-container">
                <h2 className='section-title'>Novels</h2>
                <ul className="books-list">
                    {filteredBooks.map(book => <Book book={book} key={book.id} />)


                    }
                </ul>
            </section>
        </main>
    )
}
export default Home