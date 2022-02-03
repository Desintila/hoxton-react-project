import { useNavigate } from "react-router-dom"

function Book({ book }) {
    const navigate = useNavigate()
    return (
        <li >

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
    )
}
export default Book