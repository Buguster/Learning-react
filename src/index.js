import React from "react";
import ReactDom from "react-dom";

// CSS the . means that the file is in the same folder
import "./index.css";

const books = [
  {
    id: 1,
    title: "Soul Book",
    Author: "OLIVIA WILSON",
    image:
      "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
  },

  {
    id: 2,
    title: "Psychology of money",
    Author: "OLIVIA WILSON",
    image: "https://i.imgur.com/g8kAD8n.jpg",
  },

  {
    id: 3,
    title: "Startegy",
    Author: "OLIVIA WILSON",
    image: "https://content.wepik.com/statics/10345869/preview-page0.jpg",
  },
  {
    id: 4,
    title: "Soul Book",
    Author: "OLIVIA WILSON",
    image:
      "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
  },

  {
    id: 5,
    title: "Psychology of money",
    Author: "OLIVIA WILSON",
    image: "https://i.imgur.com/g8kAD8n.jpg",
  },

  {
    id: 6,
    title: "Startegy",
    Author: "OLIVIA WILSON",
    image: "https://content.wepik.com/statics/10345869/preview-page0.jpg",
  },
];

const BookList = () => {
  return (
    <section className="book">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const Book = ({ image, title, Author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello World:");
  };
  const moreComplexHandler = (Author) => {
    console.log(Author);
  };
  return (
    <article className="book-item">
      <img
        src={image}
        alt="coverbook"
        style={{
          width: "200px",
          height: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      />
      <h4>{title}</h4>
      <h4>{Author}</h4>
      <button type="button" onClick={clickHandler}>
        click
      </button>
      <button type="button" onClick={() => moreComplexHandler(Author)}>
        more complex examples
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root1"));
