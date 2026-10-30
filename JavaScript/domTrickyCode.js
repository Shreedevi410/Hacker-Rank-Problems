// DOM related tricky JavaScript code

const box = document.getElementById('box');

if (box) {
  console.log('Before:', box.textContent);
  box.textContent = 'Updated text';
  console.log('After:', box.textContent);

  const newButton = document.createElement('button');
  newButton.textContent = 'Click Me';
  box.appendChild(newButton);

  newButton.addEventListener('click', function () {
    console.log('Button clicked!');
    this.textContent = 'Clicked';
  });
}

console.log('First child:', document.body.firstChild.nodeName);
console.log('Children count:', document.body.children.length);
