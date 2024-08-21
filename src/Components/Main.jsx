import React, {useState, useEffect} from "react";
import Card from "./Card";
import axios from "axios";
import BookTable from "./BookTable";

export default function Main() {

    const [bookData, setData] = useState([]);

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyDUrNGWE-U_qO_cvDgIlxPkhNtFZKn_c14&maxResults=40")
            .then(res => setData(res.data.items))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="header">
                <h1>Book Store</h1>
                <p>The biggest online book store</p>
            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
            <div className="footer">
                <BookTable books={bookData}/>
            </div>
        </>
    );
}