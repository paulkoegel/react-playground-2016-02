import React from 'react';
import bookData from './bookData';

// STEP 1 - - - - - - -

class Book extends React.Component {
  render() {
    let { title, author, text, image } = this.props;
    return(
      <div>
        <h1>{ title }</h1>
        <h2>{ author }</h2>
        <p style={{ fontSize: 25 }}>{ text }</p>
        <img src={ image } />
      </div>
    );
  }
}

export default () => {
  return <Book {...bookData} />
}
// - - - END STEP 1 - - -


// + state vs props: props can't be changed
// TODO:
// + add default prop price
// + validate props (comment out `text` in bookData and see what happens...)
// + add state, set default state





// STEP 2 - - - - - - -

// class Book extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {}; // initialise state
//     //this.state = { expanded: true }; // could also set custom default state
//   }
//
//   handleClick() {
//     this.setState({ ...this.state, expanded: !this.state.expanded });
//   }
//
//   render() {
//     let { title, author, text, image, price } = this.props;
//     return(
//       <div>
//         <h1>{ title }</h1>
//         <h2>{ author }</h2>
//         <code>{ price || 'no price' }</code>
//         <p style={{ fontSize: 25 }} onClick={ this.handleClick.bind(this) }> {/* breaks without bind, alternative: handleClick = () => { ... } */ }
//           { this.state.expanded ? text : `${text.slice(0,140)} ...` }
//         </p>
//         <img src={ image } />
//       </div>
//     );
//   }
// }
//
// // set class properties - they need to be present before an instance
// // is initialised and aren't needed on instances themselves
// Book.defaultProps = {
//   price: 50
// };
//
// // string, number, bool, object, array, func
// // element (react element)
// // React.PropTypes.instanceOf(Message) - instance of a class
// // React.PropTypes.oneOf(['News', 'Photos'])
//
// // React.PropTypes.oneOfType([
// //   React.PropTypes.string,
// //   React.PropTypes.number])
// //
// // and more validations: https://facebook.github.io/react/docs/reusable-components.html#prop-validation
// //
// // add `.isRequired` at the end to indicate that a prop is required
// // `React.PropTypes.any.isRequired` - provide anything, but it has to be something
//
// Book.propTypes = {
//   title: React.PropTypes.string.required, // all keys are optional by default
//   author: React.PropTypes.string,
//   price: React.PropTypes.number,
//   image: React.PropTypes.string,
//   text: React.PropTypes.string //.required
// };


// // -- -- -- -- BONUS -- -- -- -- --
//
// // 1. could avoid `bind` for `handleClick` with ES7's:
// // handleClick = () => { ... }
//
// // 2. alternative ES7 syntax for defaultProps and propTypes:
// // class Book ...
// //   static defaultProps = { // `static` b/c they are class properties, `=` makes them properties
// //   }
// //
// //   static propTypes = {
// //   }


// - - - - - END STEP 2 - - - - -


export default () => {
  return <Book {...bookData} />
}
