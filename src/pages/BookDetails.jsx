
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../styles/Details.css'

import Tabs from "../components/Tabs";
import CommentForm from "../components/CoomentForm";
import Details from "../components/Details";




function BookDetails({ user, book, setBook, setUser, users, books }) {

    const params = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/books/${params.id}?_embed=bookChapters`)
            .then(resp => resp.json())
            .then(book => setBook(book))
    }, [])
    useEffect(() => {
        fetch(`http://localhost:3000/comments?_expand=book&_expand=user`)
            .then(resp => resp.json())
            .then(comments => setComments(comments))
    }, [])


    if (book === null) {
        return <h1>Loading...</h1>
    }
    let getComments = comments
    getComments = getComments.filter((comment) => {

        if (comment.bookId === book.id) {
            if (comment.userId === user.id) {
                return true
            }
            return true
        }






    })



    return (
        <main className="container">
            <Details user={user} book={book} setUser={setUser} />

            <Tabs book={book} />


            <section className="book-details">
                <h2>Comments</h2>
                <CommentForm user={user} book={book} comments={comments} setComments={setComments} />

                <div>
                    <ul>
                        {getComments.map(comment => (

                            <li key={comment.id} className="comment">
                                < img src={comment.user.avatar} width="50" />
                                <p>{comment.content}</p>

                            </li>))}
                    </ul>

                </div>

            </section>

        </main >
    )
}
export default BookDetails