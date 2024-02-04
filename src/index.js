import React from 'react'
import ReactDom from 'react-dom'

// CSS the . means that the file is in the same folder
import './index.css'

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
  return <article className='book-item'>
    <Image></Image>
    <Title/>
    <Author/>
  </article>
}

const Image = () => (
  <img
     src='https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg'
     alt='coverbook'
     style={{
       width: '200px', // Set a fixed width
       height: 'auto',
       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
       borderRadius: '8px',
     }}
  />
 );
 

const Title = () => (
  <h5>Book Title: SOUL</h5>
)
const Author = () => (
  <h4>OLIVIA WILSON</h4>
)

const  Greeting = () =>{
  return (
    <>
    <div>
      <Person/>
      <h1>Hello world</h1>
      <ul>
        <li>  here </li>
        <li>  you </li>
        <li> go </li>
       </ul>
    </div>
    <div>
      <Message/>
      <img src="" alt="" />
    </div>
    </>
  );
}
const Person = () => <h1>soumia ouzat</h1>

const Message = () => {
  return <h1>Hello Again</h1>
}

// ReactDom.render(<Greeting />, document.getElementById('root'));
ReactDom.render(<BookList />, document.getElementById('root1'));

// we are just calling function 
// we don't need to return html here 
// // this is called JSX
// function Greeting(){
//   return <div>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//   </div>
// }