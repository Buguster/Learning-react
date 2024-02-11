import React from "react";

const Book = ({ image, title, Author }) => {
  const clickHandler = () => {
    alert("hello World:");
  };
  const moreComplexHandler = (Author) => {
    console.log(Author);
  };
  return (
    <article
      className="book-item"
      onMouseOver={() => {
        console.log(title);
      }}
    >
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

export default Book;
