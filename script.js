/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')
/*=============== BUTTON STAR EFFECT ===============*/
const glowButtons = document.querySelectorAll('.box button');
let activeStars = [];

glowButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        // Remove any existing stars
        removeAllStars();

        // Create new stars
        for (let i = 0; i < 5; i++) {
            createStar(button);
        }
    });

    button.addEventListener("mouseleave", () => {
        removeAllStars();
    });
});

function createStar(button) {
    const star = document.createElement("div");
    star.classList.add("stars");
    if (Math.random() > 0.5) star.classList.add("large");
    document.body.appendChild(star);

    const buttonRect = button.getBoundingClientRect();
    const startX = Math.random() * buttonRect.width + buttonRect.left;
    const startY = Math.random() * buttonRect.height + buttonRect.top;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    setTimeout(() => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 50 + 20;
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        star.style.transform = `rotate(45deg) translate(${moveX}px, ${moveY}px)`;
        star.style.opacity = "1";
    }, 50);

    activeStars.push(star);
}
function removeAllStars() {
    activeStars.forEach(star => {
        star.style.opacity = "0";
        setTimeout(() => star.remove(), 500);
    });
    activeStars = [];
}

// Dropdown işlevselliği
const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const dropdown3 = document.getElementById('dropdown3');
const dropdown4 = document.getElementById('dropdown4');

// Dropdown seçenekleri için veri yapısı
const dropdownData = {
    kategori1: {
        options: ['Seçenek 1A', 'Seçenek 1B', 'Seçenek 1C'],
        subOptions: {
            'Seçenek 1A': {
                options: ['Alt Seçenek 1A1', 'Alt Seçenek 1A2'],
                subOptions: {
                    'Alt Seçenek 1A1': ['Final 1A1-1', 'Final 1A1-2'],
                    'Alt Seçenek 1A2': ['Final 1A2-1', 'Final 1A2-2']
                }
            },
            'Seçenek 1B': {
                options: ['Alt Seçenek 1B1', 'Alt Seçenek 1B2'],
                subOptions: {
                    'Alt Seçenek 1B1': ['Final 1B1-1', 'Final 1B1-2'],
                    'Alt Seçenek 1B2': ['Final 1B2-1', 'Final 1B2-2']
                }
            },
            'Seçenek 1C': {
                options: ['Alt Seçenek 1C1', 'Alt Seçenek 1C2'],
                subOptions: {
                    'Alt Seçenek 1C1': ['Final 1C1-1', 'Final 1C1-2'],
                    'Alt Seçenek 1C2': ['Final 1C2-1', 'Final 1C2-2']
                }
            }
        }
    },
    kategori2: {
        options: ['Seçenek 2A', 'Seçenek 2B', 'Seçenek 2C'],
        subOptions: {
            'Seçenek 2A': {
                options: ['Alt Seçenek 2A1', 'Alt Seçenek 2A2'],
                subOptions: {
                    'Alt Seçenek 2A1': ['Final 2A1-1', 'Final 2A1-2'],
                    'Alt Seçenek 2A2': ['Final 2A2-1', 'Final 2A2-2']
                }
            },
            'Seçenek 2B': {
                options: ['Alt Seçenek 2B1', 'Alt Seçenek 2B2'],
                subOptions: {
                    'Alt Seçenek 2B1': ['Final 2B1-1', 'Final 2B1-2'],
                    'Alt Seçenek 2B2': ['Final 2B2-1', 'Final 2B2-2']
                }
            },
            'Seçenek 2C': {
                options: ['Alt Seçenek 2C1', 'Alt Seçenek 2C2'],
                subOptions: {
                    'Alt Seçenek 2C1': ['Final 2C1-1', 'Final 2C1-2'],
                    'Alt Seçenek 2C2': ['Final 2C2-1', 'Final 2C2-2']
                }
            }
        }
    },
    kategori3: {
        options: ['Seçenek 3A', 'Seçenek 3B', 'Seçenek 3C'],
        subOptions: {
            'Seçenek 3A': {
                options: ['Alt Seçenek 3A1', 'Alt Seçenek 3A2'],
                subOptions: {
                    'Alt Seçenek 3A1': ['Final 3A1-1', 'Final 3A1-2'],
                    'Alt Seçenek 3A2': ['Final 3A2-1', 'Final 3A2-2']
                }
            },
            'Seçenek 3B': {
                options: ['Alt Seçenek 3B1', 'Alt Seçenek 3B2'],
                subOptions: {
                    'Alt Seçenek 3B1': ['Final 3B1-1', 'Final 3B1-2'],
                    'Alt Seçenek 3B2': ['Final 3B2-1', 'Final 3B2-2']
                }
            },
            'Seçenek 3C': {
                options: ['Alt Seçenek 3C1', 'Alt Seçenek 3C2'],
                subOptions: {
                    'Alt Seçenek 3C1': ['Final 3C1-1', 'Final 3C1-2'],
                    'Alt Seçenek 3C2': ['Final 3C2-1', 'Final 3C2-2']
                }
            }
        }
    }
};

// Dropdown'ları temizleme fonksiyonu
function clearDropdown(dropdown) {
    dropdown.innerHTML = '<option value="">Seçim Yapın</option>';
    dropdown.disabled = true;
}

// Dropdown'a seçenekleri ekleme fonksiyonu
function populateDropdown(dropdown, options) {
    dropdown.innerHTML = '<option value="">Seçim Yapın</option>';
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
    dropdown.disabled = false;
}

// İlk dropdown değiştiğinde
dropdown1.addEventListener('change', function() {
    clearDropdown(dropdown2);
    clearDropdown(dropdown3);
    clearDropdown(dropdown4);

    if (this.value) {
        populateDropdown(dropdown2, dropdownData[this.value].options);
    }
});

// İkinci dropdown değiştiğinde
dropdown2.addEventListener('change', function() {
    clearDropdown(dropdown3);
    clearDropdown(dropdown4);

    if (this.value) {
        const firstChoice = dropdown1.value;
        populateDropdown(dropdown3, dropdownData[firstChoice].subOptions[this.value].options);
    }
});

// Üçüncü dropdown değiştiğinde
dropdown3.addEventListener('change', function() {
    clearDropdown(dropdown4);

    if (this.value) {
        const firstChoice = dropdown1.value;
        const secondChoice = dropdown2.value;
        populateDropdown(dropdown4, dropdownData[firstChoice].subOptions[secondChoice].subOptions[this.value]);
    }
});

// Mobil menü işlevselliği
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.querySelector('.nav__close');



// Star efekti fonksiyonu
function createStar(event, button) {
    const star = document.createElement('div');
    star.className = 'stars';
    if (Math.random() > 0.5) star.classList.add('large');
    
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    star.style.left = centerX + 'px';
    star.style.top = centerY + 'px';
    
    document.body.appendChild(star);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    const duration = Math.random() * 0.5 + 0.5;
    
    star.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(45deg)`;
    star.style.opacity = '0';
    star.style.transition = `all ${duration}s ease-out`;
    
    setTimeout(() => star.remove(), duration * 1000);
}

// Butonlara star efekti ekleme
document.querySelectorAll('#glowButton, .run-button').forEach(button => {
    button.addEventListener('mouseover', (e) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createStar(e, button), i * 100);
        }
    });
});
        