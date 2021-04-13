function hideSelf() {
  const btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', (event) => {
    event.target.setAttribute('hidden', 'true');
  });
}