let lastImageSrc = document.getElementById('mainImage').src;

function swapImages(sectionElement, newImageSrc) {
    const mainImage = document.getElementById('mainImage');
    const currentImageSrc = mainImage.src; // Get current main image source

    // Set the current main image to the section image
    const sectionImage = sectionElement.querySelector('img');
    sectionImage.src = currentImageSrc; // Change section image to current main image

    // Swap main image
    mainImage.src = newImageSrc; // Set the new image as the main image

    lastImageSrc = newImageSrc; // Store the new main image src for future swaps
}