// Article Page JavaScript

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
let isMenuOpen = false;

hamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');
    
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (isMenuOpen) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = '';
            span.style.opacity = '1';
        }
    });
});

// Smooth scroll to sections
function scrollToElement(tagName, index) {
    event.preventDefault();
    const elements = document.querySelectorAll(`.article-main ${tagName}`);
    if (elements[index]) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementTop = elements[index].offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
        });
    }
}

// Progress bar on scroll
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 80px;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #4a90e2, #7b68ee);
        z-index: 999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createProgressBar();

// Highlight current section in TOC
const highlightTOC = () => {
    const sections = document.querySelectorAll('.article-main h2');
    const tocLinks = document.querySelectorAll('.toc a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            if (section.offsetTop <= scrollPosition) {
                current = index;
            }
        });
        
        tocLinks.forEach((link, index) => {
            link.style.borderLeftColor = index === current ? '#4a90e2' : 'transparent';
            link.style.background = index === current ? 'rgba(74, 144, 226, 0.05)' : 'transparent';
            link.style.color = index === current ? '#4a90e2' : '#666';
        });
    });
};

highlightTOC();

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing! You\'ll receive our latest updates soon.');
            e.target.reset();
        }
    });
}

// Share buttons functionality
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        let shareUrl = '';
        
        if (btn.classList.contains('facebook')) {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (btn.classList.contains('twitter')) {
            shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        } else if (btn.classList.contains('linkedin')) {
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        } else if (btn.classList.contains('email')) {
            shareUrl = `mailto:?subject=${title}&body=Check out this article: ${url}`;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank');
        }
    });
});

// Add fade-in animation to images as they load
const articleImages = document.querySelectorAll('.article-image');
articleImages.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    // If image is already cached and loaded
    if (img.complete) {
        img.style.opacity = '1';
    }
});

// Copy code functionality (if code blocks are added)
const addCopyButtons = () => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 5px;
            right: 5px;
            padding: 5px 10px;
            background: #4a90e2;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
        `;
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent);
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addCopyButtons();
});