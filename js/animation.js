document.addEventListener("DOMContentLoaded", function() {
    window.sr = ScrollReveal();
        sr.reveal('.title', {
            delay: 300,
            distance: '50px',
            reset: false,
            duration: 1200
        });

        sr.reveal('.subtitle', {
            delay: 800,
            reset: false,
            duration: 1200
        });

        sr.reveal('.container', {
            delay: 500,
            reset: true,
            distance: '50px',
            duration: 1200
        });

        sr.reveal('.container-full, .components-img', {
            delay: 500,
            reset: true,
            distance: '50px',
            duration: 1200
        });

        sr.reveal('.container-footer', {
            delay: 500,
            reset: true,
            duration: 1200,
        });
});
