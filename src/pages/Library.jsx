
import { useNavigate } from "react-router-dom"

function Library({ user }) {

    const navigate = useNavigate()

    return (

        < main className="container" >
            <section className="books-container">
                <ul className="books-list">
                    {
                        user !== '' ? user.library.map(book =>
                            <li key={book.id}>
                                <article className="book-item" onClick={() => navigate(`/home`)} >
                                    <div className='book-img'>
                                        <img src={book.image} />
                                        <span className={`status ${book.status === 'ongoing' ? 'ongoing' : book.status === 'completed' ? 'completed' : 'dropped'}`} >{book.status}</span>
                                        <span className='chapters'>{book.chapters} ch</span>
                                    </div>

                                    <h3 className='book-title'>{book.title}</h3>

                                </article>
                            </li>
                        )
                            : null
                    }
                </ul>
            </section>


        </main >
    )

}
export default Library