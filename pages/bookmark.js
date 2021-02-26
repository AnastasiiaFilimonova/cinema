import Head from 'next/head'
// https://ru.wikipedia.org/wiki/Список_произведений_Уильяма_Шекспира
import Bookmark from '../components/social/Bookmark.js'

const books = [{
    title: 'Ромео и Джульетта',
    author: 'Уильям Шекспир',
    year: 1597,
    src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Romeo_and_juliet_title_page.jpg'
},{
    title: 'Гамлет',
    author: 'Уильям Шекспир',
    year: 1603,
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Hamlet_quarto_3rd.jpg'
}]

const BookmarkPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/bookmark.css" />
            </Head>
            <div className="books">
            {
                books.map((book, index) => {
                    return (
                        <div className="book-card" key={index}>
                            <h1>{book.title}</h1>
                            <Bookmark />
                            <span>{book.year}</span>
                            <span>{book.author}</span>
                            <hr />
                            <img src={book.src}/>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default BookmarkPage