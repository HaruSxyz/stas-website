class ThemeSwitcher {
    selectors = {
        orbit: '.hero__scene-orbit',
        button: '.hero__scene-button',
    };

    state = {
        angle: 0,
        isAnimating: false,
    };

    constructor() {
        this.orbit = document.querySelector(this.selectors.orbit);
        this.button = document.querySelector(this.selectors.button);

        // Checking the saved state of the theme
        const storedTheme = localStorage.getItem('themeIsLight') === 'true';
        if (storedTheme) {
            document.documentElement.classList.add('theme-is-light', 'no-transition');

            // Removing animations in light theme
            this.state.angle = 90;
            if (this.orbit) {
                this.orbit.style.transition = 'none';
                this.orbit.style.transform = `rotate(${this.state.angle}deg)`;
                void this.orbit.offsetWidth;
                this.orbit.style.transition = '';
            }

            setTimeout(() => {
                document.documentElement.classList.remove('no-transition');
            }, 100);
        }

        this.updateImageSources(true);

        if (this.orbit && this.button) {
            this.bindEvents();
        }
    }


    updateImageSources = (disableAnimation = false) => {
        const isLight = document.documentElement.classList.contains('theme-is-light');

        document.querySelectorAll('.hero__scene-clouds img').forEach(img => {
            let src = img.getAttribute('src');
            const newSrc = isLight
                ? src.replace(/(\.\w{3,4})$/, '_light$1')
                : src.replace('_light', '');

            if (src !== newSrc) {
                if (disableAnimation) {
                    img.setAttribute('src', newSrc);
                } else {
                    setTimeout(() => {
                        img.classList.add('fade-img');

                        setTimeout(() => {
                            img.setAttribute('src', newSrc);

                            setTimeout(() => {
                                img.classList.remove('fade-img');
                            }, 100); // Image changing
                        }, 1400);  // Fade in delay
                    }, 0); // Fade out delay
                }
            }
        });

        document.querySelectorAll('.hero__scene-mountain').forEach(img => {
            let src = img.getAttribute('src');
            const newSrc = isLight
                ? src.replace(/(\.\w{3,4})$/, '_light$1')
                : src.replace('_light', '');

            if (src !== newSrc) {
                if (disableAnimation) {
                    img.setAttribute('src', newSrc);
                } else {
                    setTimeout(() => {
                        img.classList.add('fade-img');

                        setTimeout(() => {
                            img.setAttribute('src', newSrc);

                            setTimeout(() => {
                                img.classList.remove('fade-img');
                            }, 100); // Image changing
                        }, 1000);  // Fade in delay
                    }, 900); // Fade out delay
                }
            }
        });
    };


    rotateOrbit = () => {
        if (this.state.isAnimating) return;
        this.state.isAnimating = true;
        this.button.disabled = true;

        // Switch theme and save state
        if (document.documentElement.classList.contains('theme-is-light')) {
            document.documentElement.classList.remove('theme-is-light');
            localStorage.setItem('themeIsLight', 'false');
        } else {
            document.documentElement.classList.add('theme-is-light');
            localStorage.setItem('themeIsLight', 'true');
        }

        this.updateImageSources();

        // Add 90° to the current angle for the orbit
        this.state.angle += 90;
        this.orbit.style.transform = `rotate(${this.state.angle}deg)`;

        setTimeout(() => {
            this.state.isAnimating = false;
            this.button.disabled = false;
        }, 2200);
    };


    bindEvents() {
        this.button.addEventListener("click", this.rotateOrbit);
    }
}

export default ThemeSwitcher