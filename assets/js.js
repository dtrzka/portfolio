document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
    const container = wrapper.querySelector('.slider-container');
    const slides = wrapper.querySelectorAll('.slide');
    const prevButton = wrapper.querySelector('.prev');
    const nextButton = wrapper.querySelector('.next');
    let currentIndex = 0;
    
    // Set initial heights
    function setContainerHeight() {
        // Find the tallest slide
        let maxHeight = 0;
        slides.forEach(slide => {
            slide.style.position = 'absolute'; // Make all absolute for measuring
            slide.style.opacity = '0';
            const height = slide.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
        });
        
        // Set the container height to the tallest slide
        container.style.height = maxHeight + 'px';
        
        // Reset the current slide to be visible
        slides[currentIndex].style.position = 'relative';
        slides[currentIndex].style.opacity = '1';
    }
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.position = 'relative';
                slide.style.opacity = '1';
            } else {
                slide.style.position = 'absolute';
                slide.style.opacity = '0';
            }
        });
    }
    
    // Call on load and resize
    window.addEventListener('load', setContainerHeight);
    window.addEventListener('resize', setContainerHeight);
    
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
    
    // Initial setup
    setContainerHeight();
    showSlide(currentIndex);
});