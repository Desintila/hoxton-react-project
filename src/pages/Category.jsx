
import { useState } from "react"

import '../styles/Category.css'


import Menu from "../components/CategoryMenu"
import Book from "../components/Book"

function Category({ books }) {
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState('')
    const [genre, setGenre] = useState('')


    function handleChange() {
        setOpen(!open)
        setStatus('')
        setGenre('')
    }



    const filteredBooks = books.filter(book => book.status === status)
    const filteredGenres = books.filter(book => book.genre === genre)


    return (
        <main className="container">
            <Menu setStatus={setStatus} setGenre={setGenre} handleChange={handleChange} />

            {status !== '' ?
                <section className="books-container">

                    <h2 className='section-title'>Novels Status :  {status}</h2>
                    <ul className="books-list">
                        {filteredBooks.map(book =>
                            <Book book={book} key={book.id} />)
                        }
                    </ul>


                </section> : null}




            {genre !== '' ? <section className="books-container">

                <h2 className='section-title'>Novels Genre :  {genre}</h2>
                <ul className="books-list">
                    {filteredGenres.map(book =>
                        <Book book={book} key={book.id} />)
                    }

                </ul>

            </section> : null}
        </main>

    )
}
export default Category