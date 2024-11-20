let currentIndex = 0;
const slides = ['slide-1', 'slide-2', 'slide-3'];
const hero = document.querySelector('.hero');
        
function changeSlide() {
hero.classList.remove(slides[currentIndex]);
currentIndex = (currentIndex + 1) % slides.length;
hero.classList.add(slides[currentIndex]);
}

        
hero.classList.add(slides[currentIndex]);

        
setInterval(changeSlide, 5000);