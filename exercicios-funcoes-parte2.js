// 1-2. Parameters validation
function validateNumber(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    throw new Error('O valor deve ser um número.');
  }
  return true;
}

function validateUser(name, age) {
  return typeof name === 'string' && name.trim() !== '' && typeof age === 'number' && age >= 0;
}

// 3-4. Recursion
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('O valor deve ser um inteiro maior ou igual a zero.');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function countDown(n) {
  if (n <= 0) {
    return;
  }

  console.log(n);
  countDown(n - 1);
}

// 5-6. Functions as first-class members
function applyFunction(fn, value) {
  return fn(value);
}

const operations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
];

const results = operations.map((operation) => operation(4, 2));
console.log(results);

// 7-8. Function expressions
const greet = function (name) {
  return `Olá, ${name}!`;
};

const user = {
  sayHi: function () {
    return 'Oi!';
  },
};

// 9-10. Callbacks
function calculate(a, b, callback) {
  return callback(a, b);
}

function formatMessage(msg, formatter) {
  return formatter(msg);
}

// 11-12. Asynchronous callbacks
function fakeRequest(url, callback) {
  setTimeout(() => {
    callback(null, 'OK');
  }, 1000);
}

fakeRequest('https://api.exemplo.com/a', function (error, response) {
  console.log('Primeira requisição:', error, response);

  fakeRequest('https://api.exemplo.com/b', function (error2, response2) {
    console.log('Segunda requisição:', error2, response2);

    fakeRequest('https://api.exemplo.com/c', function (error3, response3) {
      console.log('Terceira requisição:', error3, response3);
    });
  });
});

// 13-14. setTimeout / setInterval
function delayedHello() {
  setTimeout(() => {
    console.log('Hello after 1 second');
  }, 1000);
}

function countToFive() {
  let count = 1;
  const intervalId = setInterval(() => {
    console.log(count);

    if (count === 5) {
      clearInterval(intervalId);
    }

    count += 1;
  }, 1000);
}

// 15-16. Arrow functions
const sum = (a, b) => a + b;

const person = {
  name: 'Ana',
  sayThis: () => {
    console.log('Arrow this:', this);
    return this;
  },
  sayThisTraditional() {
    console.log('Traditional this:', this);
    return this;
  },
};

// Exemplos de uso
console.log(validateNumber(10));
console.log(validateUser('Maria', 25));
console.log('Fatorial de 5:', factorial(5));
countDown(5);
console.log('Aplicação:', applyFunction((x) => x * 2, 4));
console.log('Greet:', greet('João'));
console.log('Say hi:', user.sayHi());
console.log('Callback de soma:', calculate(4, 2, (a, b) => a + b));
console.log('Mensagem:', formatMessage('JavaScript', (msg) => msg.toUpperCase()));
console.log('Soma arrow:', sum(3, 7));
person.sayThis();
person.sayThisTraditional();

delayedHello();
countToFive();
