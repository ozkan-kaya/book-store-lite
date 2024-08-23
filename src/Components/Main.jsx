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

    let theme = "dark"
    function changeTheme() {

            if (theme !== "dark") {

                document.querySelector("body").style.backgroundColor = "rgb(34, 36, 41)";
                document.querySelector(".footer").style.color = "white";
                document.querySelector(".change-theme-button").style.color = "white";
                document.querySelector(".change-theme-button").style.backgroundColor = "black";
                document.querySelector(".change-theme-button").style.borderColor = "white";

                theme = "dark";

            } else {

                document.querySelector("body").style.backgroundColor = "lightgrey";
                document.querySelector(".footer").style.color = "black";
                document.querySelector(".change-theme-button").style.color = "black";
                document.querySelector(".change-theme-button").style.backgroundColor = "white";
                document.querySelector(".change-theme-button").style.borderColor = "black";
                theme = "light";
            }

    }

    return (
        <>
            <div className="header">
                <h1>Book Store</h1>
                <p>The biggest online book store</p>
                <button className="change-theme-button" onClick={changeTheme}>Change Theme</button>
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