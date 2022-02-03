function CommentForm({ user, book, setBook }) {

    function createComment(content) {
        return fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: content,
                bookId: book.id,
                userId: user.id
            })
        }).then(resp => resp.json())
    }
    function submitComment(event) {
        event.preventDefault()
        createComment(event.target.comment.value).then(function (comment) {
            const updateComments = JSON.parse(JSON.stringify(book))
            updateComments.comments.push(comment)
            setBook(updateComments)
            event.target.reset()
        })
    }

    return (

        <form className="comment-form" onSubmit={(event) => {
            submitComment(event)
        }}>
            {user !== '' ? <div>
                <h3 style={{ color: '#007ead', padding: '1rem 0' }}>You are logged in as: {user.firstName}</h3>
                <input type="text" name="comment" className="comment-input" required />
                <button type="submit" className="post-button">Post</button>
            </div> : <h2>You need to login to comment</h2>}
        </form>

    )
}
export default CommentForm