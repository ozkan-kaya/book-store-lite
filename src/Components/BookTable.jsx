import React from "react";

export default function BookTable({ books }) {
    let counter = 0;

    return (
        <table>
            <thead>
            <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Publisher</th>
            </tr>
            </thead>
            <tbody>
            {
                books.map((item) => {

                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let bookTitle = item.volumeInfo.title;
                    let authors = item.volumeInfo.authors;

                    if (thumbnail !== undefined && authors !== undefined) {
                        counter++;

                        return (
                            <tr>
                                <td>{counter}</td>
                                <td>{bookTitle}</td>
                                <td>{authors}</td>
                            </tr>
                        );
                    }
                    return null;
                })
            }
            </tbody>
        </table>
    );
}
