import React from "react";
import "./Quotes.css"; //import CSS file

function Quotes({ text, author, date }) {
  return (
    <div className="Quotes">
      <h3>Quote by {author}</h3>
      <p>"{text}"</p>
      {date && <p>Date: {date}</p>}
    </div>
  );
}
export default Quotes;
