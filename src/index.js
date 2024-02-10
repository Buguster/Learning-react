import React from "react";
import ReactDom from "react-dom";

// CSS the . means that the file is in the same folder
import "./index.css";

const first_book = {
  title: "Soul Book",
  Author: "OLIVIA WILSON",
  image:
    "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
};

const second_book = {
  title: "Soul Book",
  Author: "OLIVIA WILSON",
  image: "https://i.imgur.com/g8kAD8n.jpg",
};

const third_book = {
  title: "Soul Book",
  Author: "OLIVIA WILSON",
  image: "https://content.wepik.com/statics/10345869/preview-page0.jpg",
};

const BookList = () => {
  return (
    <section className="book">
      <Book
        image={first_book.image}
        title={first_book.title}
        Author={first_book.Author}
      />
      <Book
        image={second_book.image}
        title={second_book.title}
        Author={second_book.Author}
      />
      <Book image={third_book.image} />
    </section>
  );
};

const Book = (props) => {
  // you destruct the object using the const
  // const { image, title, Author } = props;
  return (
    <article className="book-item">
      <img
        src={props.image}
        alt="coverbook"
        style={{
          width: "200px",
          height: "auto",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      />
      <h1>{props.title}</h1>
      <h4>{props.Author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root1"));
