function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const container = document.querySelector('#text');
  btn.addEventListener('click', () => {
    if (container.getAttribute('hidden') !== null) {
      container.removeAttribute('hidden');
    } else {
      container.setAttribute('hidden', true);
    }
  });
}
