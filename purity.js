let greeting = 'Salut';
function impureGreet(name) {
  console.log(`${greeting} ${name}`);
}

function pureGreet(greet, name) {
  console.log(`${greet} ${name}`);
}

greeting = 'wtf';

impureGreet('Cosmin');
pureGreet('Hello', 'Cosmin');
