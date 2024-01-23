function openNavBar() {
    var mobileNavbar = document.querySelector('.mobile-navbar');

    if (mobileNavbar.style.display === 'flex') {
        mobileNavbar.style.display = 'none';
        removeMobileNavbarStyles();
    } else {
        mobileNavbar.style.display = 'flex';
        addMobileNavbarStyles();
    }
}

function addMobileNavbarStyles() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('id', 'mobile-navbar-styles');
    styleElement.innerHTML = `
        .mobile-navbar {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #0000009c;
            /*background: linear-gradient(173deg, #c7eaaf36, #b9b8ef5d);*/
            padding: 20px;
            position: absolute;
            top: 88px; /* Adjust the top position as needed */
            left: 0;
            width: 50%;
            z-index: 99;
            margin-left: 50%;
            box-shadow: -15px 15px 20px #000;
        }
        .mobile-navbar a {
            font-size: 1.8rem;
            margin: 10px 0;
            color: #dfeab5;
            font-weight: bold;
        }
    `;
    document.head.appendChild(styleElement);
    
}

function removeMobileNavbarStyles() {
    var styleElement = document.getElementById('mobile-navbar-styles');
    if (styleElement) {
        styleElement.remove();
    }
}

var mobileNavbarLinks = document.querySelectorAll('.mobile-navbar a');
mobileNavbarLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        closeMobileNavbar(); // Close the mobile navbar after scrolling
    });
});
function closeMobileNavbar() {
    var mobileNavbar = document.querySelector('.mobile-navbar');
    mobileNavbar.style.display = 'none';
}

document.body.addEventListener('click', function(e) {
    if(e.target.closest('.mobile-navbar') == null && e.target.closest('.hamburger-btn') == null) {
        closeMobileNavbar();
    }
});

document.body.addEventListener('touchmove', function(e) {
    if(document.querySelector('.mobile-navbar').style.display === 'flex') {
        closeMobileNavbar();
    }
});
document.body.addEventListener('wheel', function(e) {
    if(document.querySelector('.mobile-navbar').style.display === 'flex') {
        closeMobileNavbar();
    }
});