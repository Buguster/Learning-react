import React from 'react'
import ReactDom from 'react-dom'

const BookList  = () => {
  return (
    <section>
      this is a book list
  
    </section>
  )
}

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