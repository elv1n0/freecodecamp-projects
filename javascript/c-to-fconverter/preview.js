const output = document.getElementById('output');
const originalLog = console.log.bind(console);
console.log = (...args) => { originalLog(...args); output.textContent += args.map(value => typeof value === 'string' ? value : JSON.stringify(value)).join(' ') + '\n'; };
