class Updates {
    selectors = {
        lineInner: '.updates__line-inner',
        previewInner: '.updates__preview-inner',
    }

    constructor() {
        this.lineInners = document.querySelectorAll(this.selectors.lineInner);
        this.previewInners = document.querySelectorAll(this.selectors.previewInner);
        this.init();
        this.bindEvents();
    }

    init() {
        this.lineInners.forEach(inner => {
            const originalContent = inner.innerHTML;
            inner.innerHTML += originalContent; // Дублирование элементов
            const groupWidth = inner.scrollWidth / 2;
            inner.style.setProperty('--scroll-distance-line', `${groupWidth}px`);
        });

        this.previewInners.forEach(inner => {
            const originalContent = inner.innerHTML;
            inner.innerHTML += originalContent;
            const groupWidth = inner.scrollWidth / 2;
            inner.style.transform = 'translateX(-50%)';
            inner.style.setProperty('--scroll-distance-preview', `${groupWidth}px`);
        });
    }

    onResize = () => {
        this.lineInners.forEach(inner => {
            const groupWidth = inner.scrollWidth / 2;
            inner.style.setProperty('--scroll-distance-line', `${groupWidth}px`);
        });

        this.previewInners.forEach(inner => {
            const groupWidth = inner.scrollWidth / 2;
            inner.style.transform = 'translateX(-50%)';
            inner.style.setProperty('--scroll-distance-preview', `${groupWidth}px`);
        });
    }

    bindEvents() {
        window.addEventListener('resize', this.onResize);
    }
}

export default Updates;