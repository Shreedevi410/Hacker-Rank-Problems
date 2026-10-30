// Event bubbling example

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', (event) => {
  console.log('Child clicked');
  event.stopPropagation();
});
