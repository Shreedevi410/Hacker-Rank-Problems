// DOM practice code

const heading = document.getElementById('heading');
const list = document.getElementById('list');

if (heading) {
  heading.textContent = 'Updated Heading';
}

if (list) {
  const items = ['JavaScript', 'HTML', 'CSS', 'DOM'];
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

const button = document.getElementById('toggleBtn');
if (button) {
  button.addEventListener('click', () => {
    const color = heading ? heading.style.color : 'black';
    heading.style.color = color === 'red' ? 'blue' : 'red';
  });
}
