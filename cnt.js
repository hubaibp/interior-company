const counters = document.querySelectorAll('.count');
const speed = 200;

const startCounting = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'));
                const count = parseInt(counter.innerText);
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 50);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
            observer.unobserve(counter);
        }
    });
};

const observer = new IntersectionObserver(startCounting, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

counters.forEach(counter => {
    observer.observe(counter);
});

