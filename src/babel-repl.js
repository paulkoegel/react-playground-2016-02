// in Babel REPL

document.body.innerHTML = '<h1>hello world</h1>'

function sayHello(who) { return '<h1>hello ' + who + '</h1>'}

document.body.innerHTML = sayHello('paul')

document.body.innerHTML = <h1>hello world</h1>

function sayHello(who) { return <h1>hello {who}</h1>}

document.body.innerHTML = sayHello('paul')
// doesn't really render, though b/c JSX doesn't return a string

ReactDOM.render(sayHello('paul'), document.body);

// müssen jetzt in Komponente props destrukturieren
// JSX attribute kommen alle zusammen als Objekt-Parameter rein
ReactDOM.render(<sayHello who='paul' />, document.body);

function sayHello({ who }) { return <h1>hello {who}</h1>}


// nächstes: Book mit expandable text -> brauchen State
