document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close navbar when clicking on a nav item
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
        observer.observe(el);
    });

    // Image sliders
    let slideIndices = [0, 0, 0];
    showSlides();

    function showSlides() {
        let sliderContainers = document.getElementsByClassName("slider-container");
        for (let j = 0; j < sliderContainers.length; j++) {
            let slides = sliderContainers[j].getElementsByClassName("slider-image");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndices[j]++;
            if (slideIndices[j] > slides.length) {slideIndices[j] = 1}
            slides[slideIndices[j]-1].style.display = "block";
        }
      // setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    window.changeSlide = function(n, sliderIndex) {
        let sliderContainer = document.getElementsByClassName("slider-container")[sliderIndex];
        let slides = sliderContainer.getElementsByClassName("slider-image");
        slideIndices[sliderIndex] += n;
        if (slideIndices[sliderIndex] > slides.length) {slideIndices[sliderIndex] = 1}
        if (slideIndices[sliderIndex] < 1) {slideIndices[sliderIndex] = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndices[sliderIndex]-1].style.display = "block";
    }
});

        
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const text = document.querySelector('.read-more-text');

    readMoreBtn.addEventListener('click', (e) => {
        text.classList.toggle('expanded');
        if (text.classList.contains('expanded')) {
            e.target.textContent = 'Read Less';
            text.style.animation = 'fadeIn 0.5s ease';
        } else {
            e.target.textContent = 'Read More';
            text.style.animation = 'none';
        }
    });
});
