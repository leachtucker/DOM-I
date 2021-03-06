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
        "h1": "DOM\nIs\nAwesome",
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
let mainContent = document.querySelector('section.main-content');
let features = mainContent.querySelector('.top-content').querySelector('div.text-content:nth-child(1)');
let about = mainContent.querySelector('.top-content').querySelector('div.text-content:nth-child(2)');

features.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
features.querySelector('p').textContent = siteContent["main-content"]["features-content"];

about.querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
about.querySelector('p').textContent = siteContent["main-content"]["about-content"];

mainContent.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

let bottomContent = mainContent.querySelector('.bottom-content');

// Services
bottomContent.querySelector('div.text-content:nth-child(1)').querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
bottomContent.querySelector('div.text-content:nth-child(1)').querySelector('p').textContent = siteContent["main-content"]["services-content"];

// Product
bottomContent.querySelector('div.text-content:nth-child(2)').querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
bottomContent.querySelector('div.text-content:nth-child(2)').querySelector('p').textContent = siteContent["main-content"]["product-content"];

// Vision
bottomContent.querySelector('div.text-content:nth-child(3)').querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
bottomContent.querySelector('div.text-content:nth-child(3)').querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// Finding contact section
let contactContent = document.querySelector('section.contact');
contactContent.querySelector('h4').textContent = siteContent["contact"]["contact-h4"];
contactContent.querySelector('p:nth-child(2)').textContent = siteContent["contact"]["address"];
contactContent.querySelector('p:nth-child(3)').textContent = siteContent["contact"]["phone"];
contactContent.querySelector('p:nth-child(4)').textContent = siteContent["contact"]["email"];

// Finding footer
let footer = document.querySelector('footer');
footer.querySelector('p').textContent = siteContent["footer"]["copyright"];

// Change color of nav text
let nav = header.querySelector('nav');
// Even while in the CSS file, changing the color property of 'nav' does nothing, so I selected each individual anchor tag instead.
nav.querySelectorAll('a').forEach(anchor => anchor.style.color = 'green');

// Creating new links in the nav
let newLink1 = document.createElement('a');
newLink1.textContent = "Our Team";

let newLink2 = document.createElement('a');
newLink2.textContent = "Support";

nav.appendChild(newLink1);
nav.prepend(newLink2);

// Stretch
nav.querySelectorAll('a').forEach(anchor => anchor.style.color = 'grey');

document.querySelectorAll('h4').forEach(h4 => {
    h4.style.fontSize = "1.5rem";
    h4.style.letterSpacing = "4px";
});

document.querySelectorAll('p').forEach(p => {
    p.style.fontSize = "1rem";
    p.style.color = "grey";
});