import React from 'react';

class ES67 extends React.Component {

  static john = 'John'
  peter = 'Peter'

  render() {
    let youngPeter = { first: 'Peter', last: 'Parker', age: 20 };
    let oldPeter = { ...youngPeter, age: 70 };

    return <div>
        { [youngPeter, oldPeter].map((el, i) => {
          return <p key={ i }>{ JSON.stringify(el) }</p>
          })
        }
        <hr />
        <p>this.john: { this.john }</p>
        <p>ES67.john: { ES67.john }</p>
        <hr />
        <p>this.peter: { this.peter }</p>
        <p>ES67.peter: { ES67.peter }</p>
      </div>
  }
}

export default () => {
  return <ES67 />
}
