import { Button, Fab } from "@mui/material"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import '../styles/Details.css'
import AddIcon from '@mui/icons-material/Add';
import Tabs from "../components/Tabs";



function BookDetails({ user, book, setBook, setUser }) {

    const params = useParams()

    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:3000/books/${params.id}`)
            .then(resp => resp.json())
            .then(book => setBook(book))
    }, [])

    if (book === null) {
        return <h1>Loading</h1>
    }

    function addInLibrary(libraryUpdate) {
        return fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ library: libraryUpdate.library })
        }).then(resp => resp.json())
    }
    function addToLibrary() {
        const libraryUpdate = JSON.parse(JSON.stringify(user))
        libraryUpdate.library.push({ id: book.id, title: book.title, image: book.image, genre: book.genre, status: book.status })
        setUser(libraryUpdate)
        addInLibrary(libraryUpdate)

    }





    return (
        <main className="container">
            <section className="books-container">
                <h2 className="book-title">{book.title}</h2>
                <div className="img-container">
                    <img src={book.image} alt={book.title} />
                </div>
                <button></button>
                <div className="buttons">
                    <Button variant="contained">
                        Start Reading
                    </Button>

                    <Fab color="primary" size="small" variant="extended" onClick={() => addToLibrary()}>
                        <AddIcon />
                    </Fab>
                    <span>Add to library</span>
                </div>
            </section>
            <section className="book-details">
                <Tabs book={book} />

            </section>
            <section className="book-details">
                <h2>Comments</h2>
                <div>
                </div>
            </section>

        </main >
    )
}
export default BookDetails