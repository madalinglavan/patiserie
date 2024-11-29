// Selectăm div-ul cu butoanele
const buttonsContainer = document.getElementById('buttons-container');

// Funcția care adaugă clasa "fixed" după scroll
function toggleFixedButtons() {
  if (window.scrollY > 100) { // Dacă s-a derulat mai mult de 100px
    buttonsContainer.classList.add('fixed');
  } else {
    buttonsContainer.classList.remove('fixed');
  }
}

// Adăugăm un event listener pentru scroll
window.addEventListener('scroll', toggleFixedButtons);
