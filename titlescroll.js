// Get references to the comparison images
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

// Add a scroll event listener to the window
window.addEventListener('scroll', function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    console.log('Scroll Position:', scrollPosition);

    // Check if the scroll position is within the desired range
    if (scrollPosition >= 3155 && scrollPosition < 4500) {
        // Add the 'sticky' class to each comparison image
        image1.classList.add('sticky');
        image2.classList.add('sticky');
        image3.classList.add('sticky');

    } else {
        // Remove the 'sticky' class from each comparison image
        image1.classList.remove('sticky');
        image2.classList.remove('sticky');
        image3.classList.remove('sticky');

        console.log('Sticky class removed');
    }
});
