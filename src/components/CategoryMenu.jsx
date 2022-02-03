import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionSummary, } from "@mui/material"

function Menu({ handleChange, setGenre, setStatus }) {

    return (
        <section className="books-container">
            <h2 className='section-title'>Categories</h2>


            <div>
                <Accordion onChange={() => handleChange()}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h2>Genre</h2>
                    </AccordionSummary>
                    <div className="category-section">
                        <ul className="category-buttons">
                            <li><button className="button-category" onClick={() => {
                                setGenre('Adventure')
                            }}>Adventure</button></li>
                            <li><button className="button-category" onClick={() => setGenre('Fiction')}>Fiction</button></li>
                            <li><button className="button-category" onClick={() => setGenre('Children')}>Children</button></li>
                            <li><button className="button-category" onClick={() => setGenre('Drama')}>Drama</button></li>
                            <li><button className="button-category" onClick={() => setGenre('Mystery')}>Mystery</button></li>

                        </ul>
                    </div>


                </Accordion>
                <Accordion onChange={() => handleChange()}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <h2>Status</h2>
                    </AccordionSummary>
                    <div className="category-section">
                        <ul className="category-buttons">

                            <li><button className="button-category" onClick={() => {
                                setStatus('completed')
                            }}>Completed</button></li>
                            <li><button className="button-category" onClick={() => setStatus('ongoing')}>Ongoing</button></li>
                            <li><button className="button-category" onClick={() => setStatus('dropped')}>Dropped</button></li>


                        </ul>
                    </div>


                </Accordion>

            </div>
        </section>
    )
}
export default Menu