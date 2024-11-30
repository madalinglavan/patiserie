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



document.getElementById('toggle-menu').addEventListener('click', function() {
  // Obține elementul către care vrei să faci scroll
  const menuSection = document.getElementById('menu');
  
  // Derulează până la el
  menuSection.scrollIntoView({ behavior: 'smooth' });
});












  // Selectează toate imaginile
  const images = document.querySelectorAll('.hero-image');
  let currentIndex = 0;

  // Funcția care schimbă imaginile
  function changeImage() {
    // Ascunde imaginea curentă
    images[currentIndex].classList.remove('active');
    // Calculează următoarea imagine
    currentIndex = (currentIndex + 1) % images.length;
    // Afișează următoarea imagine
    images[currentIndex].classList.add('active');
  }

  // Setează intervalul pentru schimbarea imaginilor
  setInterval(changeImage, 10000); // 10 secunde







  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelector('.menu-items');

    if (!menuItems) {
        console.error('Elementul .menu-items nu a fost găsit în DOM.');
        return;
    }

    // Funcție pentru debounce
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // Funcție principală pentru gestionarea scroll-ului
    function handleScroll() {
        const { scrollLeft, scrollWidth, clientWidth } = menuItems;

        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
            // La capătul containerului
            menuItems.classList.add('scroll-end');
        } else {
            // Înainte de capăt
            menuItems.classList.remove('scroll-end');
        }

        // Opțional: pentru începutul listei
        if (scrollLeft === 0) {
            menuItems.classList.add('scroll-start');
        } else {
            menuItems.classList.remove('scroll-start');
        }
    }

    // Eveniment pentru scroll cu debounce
    menuItems.addEventListener('scroll', debounce(handleScroll, 50));

    // Apel inițial pentru a seta starea corectă
    handleScroll();
});
