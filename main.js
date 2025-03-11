function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
}

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
  
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(progress => {
            if (isInViewport(progress) && !progress.style.width) {
                const percent = progress.getAttribute('data-percent');
                progress.style.width = `${percent}%`;
            }
        });
    }

    animateProgressBars();
    
    window.addEventListener('scroll', animateProgressBars);
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const subject = "Nuevo mensaje desde el formulario";
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
  
    const mailtoLink = `mailto:tu-email@dominio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  });