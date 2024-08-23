export default function Card({book}) {
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let bookTitle = item.volumeInfo.title;
                    let authors = item.volumeInfo.authors;
                    if (thumbnail !== undefined && authors !== undefined) {
                        return (
                            <>
                                <div className="card">
                                    <img src={thumbnail}/>
                                    <div className="bottom">
                                        <h3 className="title">{bookTitle}</h3>
                                        <p className="author">{authors}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}