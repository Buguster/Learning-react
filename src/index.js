import React from 'react'
import ReactDom from 'react-dom'

// CSS the . means that the file is in the same folder
import './index.css'

const first_book = {
  title :"Soul Book",
  Author:"OLIVIA WILSON",
  image:'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg'
}

const BookList  = () => {
  return (
    <section className='book'>
      <Book 
        image={first_book.image} 
        title={first_book.title} 
        Author={first_book.Author}
      />
      <Book 
        title="random title" 
      />
    </section>
  )
}

const Book = (Props) => {
  return (
  <article className='book-item'>
    <img
      src= {Props.image}
      alt='coverbook'
      style={{
        width: '200px', // Set a fixed width
        height: 'auto',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    />
    <h1>{Props.title}</h1>
    <h4>{Props.Author}</h4>

  </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root1'));
