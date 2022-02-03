import { useEffect } from 'react'
import '../styles/Homepage.css'
import { useNavigate } from "react-router-dom"
function Home({ books, setBooks }) {

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(resp => resp.json()
                .then(books => setBooks(books)))
    }, [])


    const navigate = useNavigate()




    return (
        <main className="container">
            <section className="books-container">
                <h2 className='section-title'>Novels</h2>
                <ul className="books-list">
                    {books.map(book => (
                        <li key={book.id}>

                            <article className="book-item" onClick={() => navigate(`/home/${book.id}`)} >
                                <div className='book-img'>
                                    <img src={book.image} />
                                    <span className={`status ${book.status === 'ongoing' ? 'ongoing' : book.status === 'completed' ? 'completed' : 'dropped'}`} >{book.status}</span>
                                    <span className='chapters'>{book.chapters} ch</span>
                                </div>

                                <h3 className='book-title'>{book.title}</h3>
                                <span className='book-genre'>{book.genre}</span>
                            </article>

                        </li>
                    ))

                    }
                </ul>
            </section>
        </main>
    )
}
export default Home