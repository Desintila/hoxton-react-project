function Chapters({ book }) {

    return (
        <main className="container">
            <section className="books-container">
                <ul className="chapter-list">
                    {book.bookChapters.map(page =>
                        <li>  {page.chapter.map(chapter =>
                            <div>
                                <h2 className="chapter-title">{chapter.chapterTitle}</h2>
                                <p>{chapter.text}</p>
                            </div>
                        )}
                        </li>
                    )}
                </ul>
            </section>
        </main>
    )

}
export default Chapters