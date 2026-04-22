const words = ['future', 'life', 'vision', 'dream', 'career'];
const rotatingText = document.querySelector('.rotating-text');
let currentIndex = 0;

// Pre-calculate the next index
function getNextIndex() {
    return (currentIndex + 1) % words.length;
}

function rotateText() {
    // Fade out current text
    rotatingText.style.opacity = '0';
    
    // Immediately prepare next word
    const nextWord = words[getNextIndex()];
    
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
        // Update text and fade in
        rotatingText.textContent = nextWord;
        rotatingText.style.opacity = '1';
        currentIndex = getNextIndex();
    });
}

// Initial setup
rotatingText.textContent = words[0];

// Start rotation with optimized timing
setInterval(rotateText, 2500); // Reduced from 3000ms to 2500ms for snappier feel 