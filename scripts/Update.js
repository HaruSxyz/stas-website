document.addEventListener('DOMContentLoaded', () => {
    // line (moving left)
    const lineInners = document.querySelectorAll('.updates__line-inner');
    lineInners.forEach(inner => {
        const originalContent = inner.innerHTML;
        inner.innerHTML += originalContent; // duplication of elements

        const groupWidth = inner.scrollWidth / 2; // orignial elements width
        inner.style.setProperty('--scroll-distance-line', groupWidth + 'px');
    });

    // prview (moving right)
    const previewInners = document.querySelectorAll('.updates__preview-inner');

    previewInners.forEach(inner => {
        const originalContent = inner.innerHTML;
        inner.innerHTML += originalContent; // duplication of elements

        const groupWidth = inner.scrollWidth / 2; // orignial elements width
        inner.style.transform = `translateX(-50%)`; // Move the container to the left so that the original content is on the right (left of the screen)
        inner.style.setProperty('--scroll-distance-preview', groupWidth + 'px');
    });

    // line resize
    window.addEventListener('resize', () => {
        lineInners.forEach(inner => {
            const groupWidth = inner.scrollWidth / 2;
            inner.style.setProperty('--scroll-distance-line', groupWidth + 'px');
        });
    });

    // previev resize
    window.addEventListener('resize', () => {
        previewInners.forEach(inner => {
            const groupWidth = inner.scrollWidth / 2;
            inner.style.transform = `translateX(-50%)`;
            inner.style.setProperty('--scroll-distance-preview', groupWidth + 'px');
        });
    });
});
