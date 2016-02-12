// in Babel REPL

// rendering to the DOM in vanilla JavaScript
document.body.innerHTML = '<h1>Gödel Escher Bach</h1>';

let printTitle = (title) => { return '<h1>' + title + '</h1>' };
document.body.innerHTML = printTitle('Gödel Escher Bach');

// rendering to the DOM with JSX: strip the quotes!
document.body.innerHTML = <h1>Hello world</h1>

let printTitle = (title) => { return <h1>{ title }</h1> };
document.body.innerHTML = printTitle('Gödel Escher Bach');
// doesn't really render, though, b/c JSX doesn't return a string :(


// `ReactDOM.render` handles rendering for us:
ReactDOM.render(printTitle('Gödel Escher Bach'), document.body);

// müssen jetzt in Komponente props destrukturieren
// JSX attribute kommen alle zusammen als Objekt-Parameter rein
ReactDOM.render(<printTitle title='Gödel Escher Bach' />, document.body);

let printTitle = ({ title }) => { return <h1>hello { title }</h1> };

// nächstes: Book mit expandable text -> brauchen State
