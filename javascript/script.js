let isNavOpen = false;

function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const navTab = document.getElementById("navTab");

  if (isNavOpen) {
    sidenav.style.width = "0";
    navTab.style.left = "0"; // Reset the tab position
  } else {
    sidenav.style.width = "250px";
    navTab.style.left = "250px"; // Move the tab with the menu
  }

  isNavOpen = !isNavOpen;
}

let currentSlide = 0;

function updateCarousel() {
  const carouselImages = document.querySelector('.carousel-images');
  const totalSlides = document.querySelectorAll('.carousel-img').length;
  const offset = -currentSlide * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-img').length;
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.carousel-img').length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Modal functionality
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".GalleryImg");
const original = document.querySelector(".carousel-img");

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    currentSlide = 0; // Reset to the first slide
    updateCarousel();
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove("open");
  }
});