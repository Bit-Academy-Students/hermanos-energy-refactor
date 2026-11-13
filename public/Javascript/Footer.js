const Footerbar = `
<div id="img">
    <a href="index.html">
        <img src="src/Hermanos-Logo.png" alt="Hermanos Energy logo">
    </a>
</div>

<div class="Footer-links" id="FooterLinks">
    <div id="Product">
        <h3><a class="Footer-item ${currentPage === 'Product.html' ? 'active' : ''}" href="Product.html">Product</a></h3>
    </div>

    <div id="About">
        <h3><a class="Footer-item ${currentPage === 'About.html' ? 'active' : ''}" href="About.html">About us</a></h3>
    </div>

    <div id="Contact">
        <h3><a class="Footer-item ${currentPage === 'Contact.html' ? 'active' : ''}" href="Contact.html">Contact us</a></h3>
    </div>
</div>
`;

const Footer = document.createElement('Footer');
Footer.innerHTML = Footerbar;
document.body.appendChild(Footer);