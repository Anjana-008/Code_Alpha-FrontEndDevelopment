// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission simulation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent! Thank you for reaching out.');
});
