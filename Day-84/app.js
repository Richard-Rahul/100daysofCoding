// Selecting elements by ID
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');

    // Selecting elements by class name
    const menuItems = document.getElementsByClassName('menu-item');

    // Selecting elements by tag name
    const navLinks = document.getElementsByTagName('a');

    // Query selectors
    const firstMenuItem = document.querySelector('#main-menu li:first-child');
    const lastMenuItem = document.querySelector('#main-menu li:last-child');

    // Setting content in objects
    homeLink.textContent = 'New Home';
    aboutLink.innerHTML = '<em>About Us</em>';

    // Manipulating attributes
    contactLink.setAttribute('href', 'https://example.com/contact');

    // Adding and removing classes
    firstMenuItem.classList.add('active');
    lastMenuItem.classList.remove('active');

    // Navigation on page
    homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('content').innerHTML = '<h2>Home Page</h2><p>Welcome to the Home Page!</p>';
    });

    aboutLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('content').innerHTML = '<h2>About Us</h2><p>Learn more about our company...</p>';
    });

    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('content').innerHTML = '<h2>Contact Us</h2><p>Reach out to us at <a href="mailto:info@example.com">info@example.com</a></p>';
    });

    // Adding element on page
    const newMenuItem = document.createElement('li');
    newMenuItem.innerHTML = '<a href="#" class="menu-item">New Page</a>';
    document.querySelector('#main-menu ul').appendChild(newMenuItem);

    // Removing element from page
    const removeMenuItem = document.getElementById('about-link').parentNode;
    removeMenuItem.parentNode.removeChild(removeMenuItem);