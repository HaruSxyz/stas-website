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
        if (this.orbit && this.button) {
            this.bindEvents();
        }
    }

    rotateOrbit = () => {
        if (this.state.isAnimating) return;

        this.state.isAnimating = true;
        this.button.disabled = true;

        this.state.angle += 90;
        this.orbit.style.transform = `rotate(${this.state.angle}deg)`;

        setTimeout(() => {
            this.state.isAnimating = false;
            this.button.disabled = false;
        }, 2200); // 1000 = 1 sec (2 sec for animation)
    };

    bindEvents() {
        this.button.addEventListener("click", this.rotateOrbit);
    }
}

export default ThemeSwitcher