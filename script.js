function fadeInElements(offering) {
    const images = offering.querySelectorAll(".img2, .img21, .img22");
    const textElements = offering.querySelectorAll(".para, .pa");

    textElements.forEach(text => {
        text.style.opacity = 1;
    });

    setTimeout(() => {
        images.forEach(image => {
            image.style.opacity = 1;
        });
    }, 500);
}

function fadeInHeader() {
    const header = document.querySelector('.head');
    header.style.opacity = 1;
}

document.querySelectorAll('.offeringclass > div').forEach(offering => {
    offering.addEventListener('mouseover', () => fadeInElements(offering));
});

document.querySelectorAll('.offeringclass > div').forEach(offering => {
    offering.addEventListener('mouseout', () => {
        const images = offering.querySelectorAll(".img2, .img21, .img22");
        const textElements = offering.querySelectorAll(".para, .pa");


    });
});

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('head')) {
                fadeInHeader();
            } else {
                fadeInElements(entry.target);
            }
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, options);

const offerings = document.querySelectorAll('.offeringclass > div');
observer.observe(document.querySelector('.head'));
offerings.forEach(offering => {
    observer.observe(offering);
});



document.addEventListener('DOMContentLoaded', () => {
    const shopingDivs = document.querySelectorAll('.maindiv, .collections');
    const collections = document.querySelectorAll('.maindiv > div');

    let lastColorChangeTime = 0;
    const debounceTime = 100;

    const observerOptions = {
        root: null,
        threshold: 0.1 
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const now = Date.now();

            if (entry.isIntersecting && now - lastColorChangeTime > debounceTime) {
              
                shopingDivs.forEach(div => {
                    div.style.backgroundColor = '#B14021'; 
                });
                lastColorChangeTime = now;
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    collections.forEach(collection => {
        observer.observe(collection); 
    });
});

const slidebar = document.getElementById('slidebar');
const images = Array.from(slidebar.children); // Get all image elements

document.getElementById('scrollBtn').addEventListener('click', function() {
  const firstImage = slidebar.firstElementChild; // Get the first image

  // Create a new image element
  const newImage = document.createElement('img');
  newImage.src = firstImage.src; // Use the same src
  newImage.alt = firstImage.alt;
  newImage.className = 'd1'; // Apply the same class

  // Append the new image to the end
  slidebar.appendChild(newImage);

  // Enable transition for the slidebar
  slidebar.style.transition = 'transform 0.5s ease'; 

  // Move slidebar to the left
  slidebar.style.transform = `translateX(-${firstImage.offsetWidth + 20}px)`; 

  // Fade out the first image
  firstImage.style.transition = 'opacity 0.5s ease'; // Smooth opacity transition
  firstImage.style.opacity = '0'; // Fade out

  // Use requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    // Remove the first image after the fade out completes
    setTimeout(() => {
      slidebar.removeChild(firstImage); // Remove the first image
      slidebar.style.transition = 'none'; // Disable transition for resetting
      slidebar.style.transform = 'translateX(0)'; // Reset position
      
      // Reset opacity of new image to ensure it's fully visible
      newImage.style.opacity = '1'; // Ensure the new image is visible
    }, 500); // Match this duration with your CSS transition time (0.5s)
  });
});

