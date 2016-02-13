import React from 'react';
import bookData from './bookData';

// STEP 1

let Book = ({ title }) => {
  return <h1>{ title }</h1>
}

export default () => {
  return <Book title='Gödel, Escher, Bach' />
}


// `ReactDOM.render` gets called for us where
// this module is imported

// TODO
// + add text and image
























// STEP 2




// let Book = ({ title, author, text, image }) => {
//   return(
//     <div>
//       <h1>{ title }</h1>
//       <h2>{ author }</h2>
//       <p>{ text }</p>
//       <img src={ image } />
//     </div>
//   );
// }
//
// export default () => {
//   return <Book {...bookData} />
// }

// TODO: collapsible / expandable text
// + we need STATE
// + cannot use stateless functional components anymore
// => React component
