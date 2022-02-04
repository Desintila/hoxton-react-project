import { useNavigate } from "react-router-dom"
import { Button, Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

function Details({ book, user, setUser }) {
    const navigate = useNavigate()

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
        libraryUpdate.library.push({ id: book.id, title: book.title, image: book.image, genre: book.genre, status: book.status, chapters: book.chapters })
        setUser(libraryUpdate)
        addInLibrary(libraryUpdate)
        navigate('/library')

    }




    return (
        <section className="books-container">
            <h2 className="book-title">{book.title}</h2>
            <div className="img-container">
                <img src={book.image} alt={book.title} />
            </div>

            <div className="buttons">
                <Button variant="contained" onClick={() => navigate('/chapters')}>
                    Start Reading
                </Button>

                <Fab color="primary" size="small" variant="extended" onClick={() => addToLibrary()}>
                    <AddIcon />
                </Fab>
                <span>Add to library</span>
            </div>
        </section>
    )
}
export default Details