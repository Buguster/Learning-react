import React from 'react'
import ReactDom from 'react-dom'

// CSS the . means that the file is in the same folder
import './index.css'

const title = "Soul Book";
const Author = "OLIVIA WILSON";
const image = 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg'
const BookList  = () => {
  return (
    <section className='book'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}


const Book = () => {
  return (
  <article className='book-item'>
    <img
      src= {image}
      alt='coverbook'
      style={{
        width: '200px', // Set a fixed width
        height: 'auto',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    />
    <h1>{title}</h1>
    <h4>{Author.toLowerCase()}</h4>
  </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root1'));
