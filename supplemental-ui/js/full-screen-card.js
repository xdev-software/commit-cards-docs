document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card-image').forEach(container => {
        container.addEventListener('click', function () {
            const img = container.querySelector('img');
            if (!img) return;

            // Create overlay
            const overlay = document.createElement('div');
            overlay.classList.add('lightbox-overlay');

            // Create image inside overlay
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            overlay.appendChild(fullImg);

            // Add overlay to body
            document.body.appendChild(overlay);

            // Trigger fade-in
            requestAnimationFrame(() => {
                overlay.classList.add('visible');
            });

            // Close overlay on click
            overlay.addEventListener('click', () => {
                overlay.classList.remove('visible');
                overlay.addEventListener('transitionend', () => {
                    overlay.remove();
                }, { once: true });
            });
        });
    });
});
