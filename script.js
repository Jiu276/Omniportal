// Blog Articles Data (15 articles from Feb-Sep 2025) - Already sorted by date (newest first)
const blogArticles = [
    {
        id: 11,
        title: "Cryptocurrency Investment Strategies for Beginners in 2025",
        category: "tips",
        excerpt: "Navigate the complex world of cryptocurrency with confidence. Learn essential investment strategies, risk management, and how to build a balanced crypto portfolio.",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
        date: "2025-09-12",
        content: "Cryptocurrency has matured significantly, offering both opportunities and risks for new investors. This guide provides essential strategies for beginners..."
    },
    {
        id: 12,
        title: "Slack vs Microsoft Teams: Which Collaboration Tool Wins?",
        category: "platform-review",
        excerpt: "A comprehensive comparison of the two leading workplace collaboration platforms. We analyze features, integrations, pricing, and user experience.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop",
        date: "2025-08-28",
        content: "As remote and hybrid work models become permanent, choosing the right collaboration platform is crucial for team productivity..."
    },
    {
        id: 1,
        title: "Top 10 AI Writing Tools That Will Transform Your Content in 2025",
        category: "product-review",
        excerpt: "Discover the most powerful AI writing tools that are revolutionizing content creation. From ChatGPT to Jasper, we review the best options for writers, marketers, and businesses.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
        date: "2025-08-15",
        content: "In 2025, AI writing tools have become indispensable for content creators. This comprehensive review covers the top 10 tools that can help you create better content faster..."
    },
    {
        id: 13,
        title: "Breaking: Major Google Algorithm Update Impacts SEO",
        category: "news",
        excerpt: "Google's latest algorithm update prioritizes user experience and AI-generated content detection. Learn what changed and how to adapt your SEO strategy.",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&h=300&fit=crop",
        date: "2025-08-10",
        content: "Google's August 2025 core update represents a significant shift in how search results are ranked, with major implications for content creators and SEO professionals..."
    },
    {
        id: 2,
        title: "Shopify vs WooCommerce: Complete Platform Comparison for E-commerce",
        category: "platform-review",
        excerpt: "Choosing between Shopify and WooCommerce for your online store? We break down the pros, cons, pricing, and features to help you make the right decision.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        date: "2025-07-28",
        content: "When it comes to building an online store, Shopify and WooCommerce are two of the most popular choices. Each platform has its strengths and weaknesses..."
    },
    {
        id: 14,
        title: "Ultimate Guide to Cloud Storage Solutions for Businesses",
        category: "product-review",
        excerpt: "Compare top cloud storage providers including AWS, Google Cloud, Microsoft Azure, and Dropbox Business. Find the perfect solution for your business needs.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
        date: "2025-07-25",
        content: "Cloud storage has become essential for modern businesses. This comprehensive guide compares the leading providers to help you make an informed decision..."
    },
    {
        id: 3,
        title: "Best Project Management Software for Remote Teams in 2025",
        category: "product-review",
        excerpt: "Managing remote teams effectively requires the right tools. We review Asana, Monday.com, Trello, and other top project management platforms to help you choose.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
        date: "2025-07-10",
        content: "Remote work has become the norm, making project management software more crucial than ever. Here's our comprehensive review of the best platforms..."
    },
    {
        id: 15,
        title: "Building a Personal Brand: Complete Strategy Guide",
        category: "tips",
        excerpt: "Transform yourself into a recognized authority in your field. Learn how to build, grow, and monetize your personal brand across digital platforms.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
        date: "2025-07-05",
        content: "Personal branding is no longer optional in the digital age. This comprehensive guide shows you how to establish and grow your professional presence online..."
    },
    {
        id: 4,
        title: "How to Create Engaging Social Media Content: 15 Proven Strategies",
        category: "tips",
        excerpt: "Learn the secrets to creating viral social media content. From storytelling techniques to visual design tips, master the art of social media engagement.",
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop",
        date: "2025-06-22",
        content: "Creating engaging social media content is both an art and a science. Here are 15 proven strategies that will help your content stand out..."
    },
    {
        id: 5,
        title: "Canva Pro vs Adobe Creative Suite: Design Tool Showdown",
        category: "platform-review",
        excerpt: "Which design platform offers better value for money? We compare Canva Pro and Adobe Creative Suite across features, pricing, and ease of use.",
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&h=300&fit=crop",
        date: "2025-06-05",
        content: "For designers and content creators, choosing between Canva Pro and Adobe Creative Suite is a crucial decision that affects both budget and workflow..."
    },
    {
        id: 6,
        title: "Email Marketing Automation: Tools and Strategies for 2025",
        category: "tips",
        excerpt: "Maximize your email marketing ROI with automation. Discover the best tools, workflows, and strategies to nurture leads and boost conversions.",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
        date: "2025-05-18",
        content: "Email marketing automation has evolved significantly in 2025. Here's everything you need to know about setting up effective automated campaigns..."
    },
    {
        id: 7,
        title: "Google Analytics 4 vs Universal Analytics: Migration Guide",
        category: "news",
        excerpt: "GA4 has fully replaced Universal Analytics. Learn the key differences, new features, and how to make the most of Google's latest analytics platform.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        date: "2025-04-30",
        content: "The transition from Universal Analytics to GA4 is complete. This comprehensive guide helps you understand the new interface and advanced features..."
    },
    {
        id: 8,
        title: "Best VPN Services for Digital Nomads and Remote Workers",
        category: "product-review",
        excerpt: "Stay secure while working remotely with our top VPN recommendations. We tested speed, security, and reliability across different locations worldwide.",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=300&fit=crop",
        date: "2025-04-12",
        content: "As a digital nomad or remote worker, a reliable VPN is essential for security and accessing geo-restricted content. Here are our top picks..."
    },
    {
        id: 9,
        title: "Content Marketing Trends That Will Dominate 2025",
        category: "news",
        excerpt: "Stay ahead of the curve with the latest content marketing trends. From AI-generated content to interactive experiences, here's what's shaping the industry.",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
        date: "2025-03-25",
        content: "Content marketing continues to evolve rapidly. These trends will define successful content strategies in 2025 and beyond..."
    },
    {
        id: 10,
        title: "WordPress vs Webflow: Which Platform is Right for Your Website?",
        category: "platform-review",
        excerpt: "Comparing two popular website building platforms. We analyze WordPress and Webflow's features, pricing, learning curve, and ideal use cases.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
        date: "2025-02-08",
        content: "Choosing between WordPress and Webflow depends on your specific needs, technical skills, and budget. Here's a detailed comparison to help you decide..."
    }
];

// Products Data
const products = [
    {
        id: 1,
        title: "Notion Pro Workspace",
        description: "All-in-one workspace for notes, tasks, wikis, and databases. Perfect for teams and individuals who want to organize their digital life.",
        price: "$8/month",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        title: "Adobe Creative Cloud",
        description: "Complete suite of creative applications including Photoshop, Illustrator, Premiere Pro, and more for professional designers.",
        price: "$52.99/month",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        title: "Grammarly Premium",
        description: "Advanced writing assistant that helps you write clearly and effectively. Essential tool for writers, students, and professionals.",
        price: "$12/month",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop"
    },
    {
        id: 4,
        title: "Canva Pro",
        description: "Professional design platform with premium templates, stock photos, and advanced features for creating stunning visuals.",
        price: "$14.99/month",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
    },
    {
        id: 5,
        title: "Shopify Plus",
        description: "Enterprise e-commerce platform for high-growth businesses. Includes advanced features and dedicated support.",
        price: "$2000/month",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
        id: 6,
        title: "Mailchimp Premium",
        description: "Advanced email marketing platform with automation, analytics, and personalization features for growing businesses.",
        price: "$299/month",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop"
    }
];

// Global variables
let currentPage = 1;
const articlesPerPage = 6;
let filteredArticles = [...blogArticles];
let isMenuOpen = false;

// DOM Elements
const blogGrid = document.getElementById('blog-grid');
const pagination = document.getElementById('pagination');
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const backToTopBtn = document.getElementById('back-to-top');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderBlogArticles();
    renderProducts();
    setupEventListeners();
    setupScrollAnimations();
    setupSmoothScrolling();
}

// Blog Functions
function renderBlogArticles() {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);

    blogGrid.innerHTML = '';

    if (articlesToShow.length === 0) {
        blogGrid.innerHTML = '<div class="no-results"><h3>No articles found</h3><p>Try adjusting your search or filter criteria.</p></div>';
        pagination.innerHTML = '';
        return;
    }

    articlesToShow.forEach((article, index) => {
        const articleCard = createBlogCard(article);
        articleCard.classList.add('fade-in');
        blogGrid.appendChild(articleCard);
        
        // Staggered animation
        setTimeout(() => {
            articleCard.classList.add('visible');
        }, index * 100);
    });

    renderPagination();
}

function createBlogCard(article) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="blog-card-image">
        <div class="blog-card-content">
            <div class="blog-card-category">${formatCategory(article.category)}</div>
            <h3 class="blog-card-title">${article.title}</h3>
            <p class="blog-card-excerpt">${article.excerpt}</p>
            <div class="blog-card-meta">
                <div class="blog-card-date">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(article.date)}</span>
                </div>
                <a href="article-${article.id}.html" class="blog-card-readmore">Read More</a>
            </div>
        </div>
    `;
    return card;
}

function renderProducts() {
    productsGrid.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.classList.add('fade-in');
        productsGrid.appendChild(productCard);
        
        // Staggered animation
        setTimeout(() => {
            productCard.classList.add('visible');
        }, index * 150);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-card-image">
        <div class="product-card-content">
            <h3 class="product-card-title">${product.title}</h3>
            <p class="product-card-description">${product.description}</p>
            <div class="product-card-price">${product.price}</div>
            <div class="product-card-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span>(${product.rating}/5)</span>
            </div>
            <button class="product-card-button" onclick="viewProduct(${product.id})">View Product</button>
        </div>
    `;
    return card;
}

function renderPagination() {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;
            pageBtn.className = i === currentPage ? 'active' : '';
            pageBtn.onclick = () => changePage(i);
            pagination.appendChild(pageBtn);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.className = 'ellipsis';
            pagination.appendChild(ellipsis);
        }
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(nextBtn);
}

function changePage(page) {
    currentPage = page;
    renderBlogArticles();
    scrollToSection('blog');
}

// Search and Filter Functions
function searchArticles() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    filteredArticles = blogArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) || 
                             article.excerpt.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || article.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    // Sort by date (newest first)
    filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    currentPage = 1;
    renderBlogArticles();
}

// Event Listeners
function setupEventListeners() {
    // Search and filter
    searchInput.addEventListener('input', searchArticles);
    categoryFilter.addEventListener('change', searchArticles);

    // Mobile navigation
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMobileMenu();
            }
        });
    });

    // Back to top button
    window.addEventListener('scroll', handleScroll);
    backToTopBtn.addEventListener('click', scrollToTop);

    // Contact form
    document.querySelector('.contact-form').addEventListener('submit', handleContactForm);
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Animate hamburger icon
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
}

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Back to top button
    if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleContactForm(e) {
    e.preventDefault();
    
    // Simple form validation and submission simulation
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    if (name && email && message) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        e.target.reset();
    }
}

// Utility Functions
function formatCategory(category) {
    const categoryMap = {
        'product-review': 'Product Review',
        'platform-review': 'Platform Review',
        'tips': 'Tips & Guides',
        'news': 'News'
    };
    return categoryMap[category] || category;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }

    return starsHtml;
}

// Navigation Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight - 20;

    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                scrollToSection(targetId);
            }
        });
    });
}

// Animation Functions
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });

    // Add animation classes to section titles
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('fade-in');
        observer.observe(title);
    });

    // Add animation classes to feature cards
    document.querySelectorAll('.feature').forEach((feature, index) => {
        feature.classList.add('fade-in');
        feature.style.animationDelay = `${index * 0.2}s`;
        observer.observe(feature);
    });
}

// Article and Product Modal Functions
function openArticle(articleId) {
    const article = blogArticles.find(a => a.id === articleId);
    if (!article) return;

    // Create modal for full article view
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${article.image}" alt="${article.title}" class="modal-image">
            <div class="modal-body">
                <div class="modal-category">${formatCategory(article.category)}</div>
                <h1 class="modal-title">${article.title}</h1>
                <div class="modal-meta">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(article.date)}</span>
                </div>
                <div class="modal-content-text">
                    <p>${article.content}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal events
    modal.querySelector('.modal-close').onclick = () => closeModal(modal);
    modal.onclick = (e) => {
        if (e.target === modal) closeModal(modal);
    };
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Create modal for product details
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${product.image}" alt="${product.title}" class="modal-image">
            <div class="modal-body">
                <h1 class="modal-title">${product.title}</h1>
                <div class="modal-price">${product.price}</div>
                <div class="modal-rating">
                    <div class="stars">${generateStars(product.rating)}</div>
                    <span>(${product.rating}/5)</span>
                </div>
                <div class="modal-content-text">
                    <p>${product.description}</p>
                    <p>This product offers excellent value for money and has been tested by our expert team. We recommend it for professionals and businesses looking for reliable solutions.</p>
                    <div class="modal-buttons">
                        <button class="btn btn-primary">Get Started</button>
                        <button class="btn btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal events
    modal.querySelector('.modal-close').onclick = () => closeModal(modal);
    modal.onclick = (e) => {
        if (e.target === modal) closeModal(modal);
    };
}

function closeModal(modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
}

// Add modal styles
const modalStyles = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }

    .modal-content {
        background: white;
        border-radius: 15px;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        animation: slideUp 0.3s ease;
        margin: 20px;
    }

    .modal-close {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 2rem;
        color: #999;
        cursor: pointer;
        z-index: 1;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-close:hover {
        color: #333;
    }

    .modal-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 15px 15px 0 0;
    }

    .modal-body {
        padding: 2rem;
    }

    .modal-category {
        color: #4a90e2;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
    }

    .modal-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #333;
        line-height: 1.3;
    }

    .modal-meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #666;
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
    }

    .modal-price {
        font-size: 2rem;
        font-weight: 700;
        color: #4a90e2;
        margin-bottom: 1rem;
    }

    .modal-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .modal-content-text {
        line-height: 1.8;
        color: #555;
    }

    .modal-content-text p {
        margin-bottom: 1.5rem;
    }

    .modal-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        flex-wrap: wrap;
    }

    .no-results {
        text-align: center;
        padding: 3rem;
        color: #666;
    }

    .no-results h3 {
        margin-bottom: 1rem;
        color: #333;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideUp {
        from { 
            opacity: 0;
            transform: translateY(50px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .modal-content {
            margin: 10px;
            max-height: 95vh;
        }

        .modal-title {
            font-size: 1.5rem;
        }

        .modal-body {
            padding: 1.5rem;
        }

        .modal-buttons {
            flex-direction: column;
        }
    }
`;

// Inject modal styles
const styleElement = document.createElement('style');
styleElement.textContent = modalStyles;
document.head.appendChild(styleElement);