const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Finding links in header/nav
let header = document.querySelector('header');
let links = header.querySelectorAll('a');

// Updating links content
for (let i = 0; i < links.length; i++) {
    links[i].textContent = siteContent["nav"]["nav-item-" + i];
}


// Finding CTA section
let ctaSection = document.querySelector('.cta');
ctaSection.querySelector('h1').textContent = siteContent["cta"]["h1"];
ctaSection.querySelector('button').textContent = siteContent["cta"]["button"];
ctaSection.querySelector('#cta-img').src = siteContent["cta"]["img-src"];

// Finding main content section
let mainContent = document.querySelector('.main-content');
let features = mainContent.querySelector('.top-content :nth-child(1)');
let about = mainContent.querySelector('.top-content :nth-child(2) div.text-content');

console.log(about)

features.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
features.querySelector('p').textContent = siteContent["main-content"]["features-content"];

// about.querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
// about.querySelector('p').textContent = siteContent["main-content"]["about-content"];