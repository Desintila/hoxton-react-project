
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import '../styles/Details.css'

import Tabs from "../components/Tabs";
import CommentForm from "../components/CoomentForm";
import Details from "../components/Details";




function BookDetails({ user, book, setBook, setUser, users }) {

    const params = useParams()


    useEffect(() => {
        fetch(`http://localhost:3000/books/${params.id}?_embed=comments&_embed=bookChapters`)
            .then(resp => resp.json())
            .then(book => setBook(book))
    }, [])



    if (book === null) {
        return <h1>Loading...</h1>
    }







    let getUsers = users
    getUsers = getUsers.filter(user => {
        for (const comment of book.comments) {
            if (comment.userId === user.id)
                return true
        }


    })


    return (
        <main className="container">
            <Details user={user} book={book} setUser={setUser} />

            <Tabs book={book} />


            <section className="book-details">
                <h2>Comments</h2>
                <CommentForm user={user} book={book} setBook={setBook} />

                <ul>
                    {book.comments.map(comment => (
                        getUsers.map(target =>
                            <li key={book.id} className="comment">
                                < img src={target.avatar} width="50" />
                                <p>{comment.content}</p>

                            </li>
                        )))}
                </ul>

            </section>

        </main >
    )
}
export default BookDetails