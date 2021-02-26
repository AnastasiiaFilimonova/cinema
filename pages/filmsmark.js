import Bookmark from '../components/social/Bookmark.js'
import Like from '../components/social/Like.js'
import Head from 'next/head'

const films = [{
    title: 'Титаник',
    genry: 'drama',
    year: 1997,
    src: 'https://i.artfile.ru/2560x1600_609983_[www.ArtFile.ru].jpg'
},{
    title: 'Ромео и Джульетта',
    genry: 'drama',
    year: 1968,
    src: 'https://avatars.mds.yandex.net/get-zen_doc/1110951/pub_5b097577799d9dc677baa922_5b0978573c50f79e15530303/scale_1200'
}]

const FilmsmarkPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/bookmark.css" />
            </Head>
            <div className="books">
            {
                films.map((film, index) => {
                    return (
                        <div className="book-card" key={index}>
                            <h1>{film.title}</h1>
                            <Bookmark />
                            <Like />
                            <span>{film.year}</span>
                            <span>{film.genry}</span>
                            <hr />
                            <img src={film.src}/>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default FilmsmarkPage