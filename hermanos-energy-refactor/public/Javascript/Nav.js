// Get the current filename from the URL (defaults to index.html if empty)
const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navbar = `
<div id="img">
    <a href="index.html">
        <img src="scr/Hermanos-Logo.png" alt="Hermanos Energy logo">
    </a>
</div>

<div id="Product">
    <h3><a class="nav-item ${currentPage === 'Product.html' ? 'active' : ''}" href="Product.html">Product</a></h3>
</div>

<div id="About">
    <h3><a class="nav-item ${currentPage === 'About.html' ? 'active' : ''}" href="About.html">About us</a></h3>
</div>

<div id="Contact">
    <h3><a class="nav-item ${currentPage === 'Contact.html' ? 'active' : ''}" href="Contact.html">Contact us</a></h3>
</div>

<div id="Sign">
    <a href="https://www.hermanos.energy/" target="_blank" rel="noopener noreferrer">Sign in</a>
</div>
`;

const Nav = document.createElement('nav');
Nav.innerHTML = navbar;
document.body.appendChild(Nav);