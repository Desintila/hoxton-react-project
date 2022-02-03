
import Book from "../components/Book"

function Library({ user }) {

    if (user !== '') {
        if (user.library.length === 0) {
            return (<main className="container">
                <section className="books-container">
                    <h1 >Your Reading List is empty</h1>
                </section></main>)
        }


        return (


            < main className="container" >
                <section className="books-container">
                    <ul className="books-list">
                        {
                            user.library.map(book =>
                                <Book book={book} key={book.id} />
                            )
                        }
                    </ul>
                </section>
            </main >
        )
    }
    else {
        return (<main className="container">
            <section className="books-container">
                <h1 className="message">Login to see your saved books</h1>
            </section></main>)
    }


}
export default Library