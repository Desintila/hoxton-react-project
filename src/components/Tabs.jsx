import { useState } from "react"
import '../styles/Tabs.css'

function Tabs({ book }) {
    const [tab, setTab] = useState('info')

    return (
        <section className="book-details">
            <div >
                <div className="tab-menu">
                    <button className={`tab ${tab === 'info' ? "active-tab" : ""}`} onClick={() => setTab('info')}>
                        Info
                    </button>
                    <button className={`tab ${tab === 'chapters' ? "active-tab" : ""}`} onClick={() => setTab('chapters')}>
                        Chapters
                    </button>
                    <button className={`tab ${tab === 'review' ? "active-tab" : ""}`} onClick={() => setTab('review')}>
                        Reviews
                    </button>
                </div>

                <div className="content-section">
                    <div className={`content ${tab === 'info' ? "active-content" : ""}`}>
                        <h2 className="description-section">Novel Summary</h2>
                        <p className="description">{book.description}</p>
                        <section>
                            <h2 className="description-section">Details</h2>
                            <ul className="details-list">
                                <li className="detail">Author:  <span className="value">{book.author}</span>   </li>
                                <li className="detail">Status:     <span className="value">{book.status}</span></li>
                                <li className="detail">Genre:    <span className="value">{book.genre}</span> </li>
                                <li className="detail">Tags: {book.tags.map(tag => (
                                    <span className="value">{tag}</span>
                                ))}</li>
                            </ul>
                        </section>
                    </div>

                    <div className={`content ${tab === 'chapters' ? "active-content" : ""}`}>
                        <h2>Chapters</h2>
                    </div>

                    <div className={`content ${tab === 'review' ? "active-content" : ""}`}>
                        <h2>Ratings</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tabs