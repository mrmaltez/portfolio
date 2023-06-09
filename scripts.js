const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const carouselPrev = carousel.querySelector('.carousel-prev');
const carouselNext = carousel.querySelector('.carousel-next');
const carouselItemWidth = carouselItems[0].offsetWidth;
let currentIndex = 0;

carouselPrev.addEventListener('click', (event) => {
  event.preventDefault();
  currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
  carouselContainer.style.transform = `translateX(-${currentIndex * carouselItemWidth}px)`;
});

carouselNext.addEventListener('click', (event) => {
  event.preventDefault();
  currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
  carouselContainer.style.transform = `translateX(-${currentIndex * carouselItemWidth}px)`;
});


// Definindo a função que irá mudar os slides

function slide() {

  const firstItem = carousel.querySelector('.carousel-item:first-child');
  const lastItem = carousel.querySelector('.carousel-item:last-child');
  const cloneFirstItem = firstItem.cloneNode(true);
  
  // Adicionando a classe que irá fazer a transição do slide
  carouselContainer.classList.add('transition');
  
  // Movendo o carrossel para a esquerda
  carouselContainer.style.transform = `translateX(-${firstItem.offsetWidth}px)`;
  
  // Quando a transição terminar, remova o primeiro item e adicione-o como clone do último item
  setTimeout(() => {
    firstItem.remove();
    carouselContainer.appendChild(cloneFirstItem);
    carouselContainer.classList.remove('transition');
    carouselContainer.style.transform = 'translateX(0)';
  }, 300);
}

// Definindo o intervalo de tempo para mudar os slides (5 segundos)
setInterval(slide, 5000);


//Tradução do site
window.onload=function() {

const translateBtnEng = document.getElementById("translateEng");
const translateBtnEsp = document.getElementById("translateEsp");
const translateBtnPor = document.getElementById("translatePor");
const currentLanguage = document.documentElement.lang;

translateBtnEng?.addEventListener("click", function() {
  if (currentLanguage === "en") {
    return; // current language is already English, no need to translate
  }

  // perform translation
  const currentUrl = window.location.href;
  const newUrl = currentUrl.replace(`/${currentLanguage}/`, "/en/");
  window.location.href = newUrl;
});

translateBtnEsp?.addEventListener("click", function() {
  if (currentLanguage === "es") {
    return; // current language is already Spanish, no need to translate
  }

  // perform translation
  const currentUrl = window.location.href;
  const newUrl = currentUrl.replace(`/${currentLanguage}/`, "/es/");
  window.location.href = newUrl;
});

translateBtnPor?.addEventListener("click", function() {
  if (currentLanguage === "pt") {
    return; // current language is already Portuguese, no need to translate
  }

  // perform translation
  const currentUrl = window.location.href;
  const newUrl = currentUrl.replace(`/${currentLanguage}/`, "/pt/");
  window.location.href = newUrl;
})};
