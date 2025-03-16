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

        // Проверяем сохранённое состояние темы
        const storedTheme = localStorage.getItem('themeIsLight') === 'true';
        if (storedTheme) {
            document.documentElement.classList.add('theme-is-light');
            // Устанавливаем угол 90° без анимации:
            this.state.angle = 90;
            if (this.orbit) {
                // Отключаем анимацию временно:
                this.orbit.style.transition = 'none';
                this.orbit.style.transform = `rotate(${this.state.angle}deg)`;
                // Форсируем перерасчёт стилей:
                void this.orbit.offsetWidth;
                // Возвращаем стандартное значение transition (если оно задано в CSS)
                this.orbit.style.transition = '';
            }
        }
        if (this.orbit && this.button) {
            this.bindEvents();
        }
    }

    rotateOrbit = () => {
        if (this.state.isAnimating) return;
        this.state.isAnimating = true;
        this.button.disabled = true;

        // Переключаем тему и сохраняем состояние
        if (document.documentElement.classList.contains('theme-is-light')) {
            document.documentElement.classList.remove('theme-is-light');
            localStorage.setItem('themeIsLight', 'false');
        } else {
            document.documentElement.classList.add('theme-is-light');
            localStorage.setItem('themeIsLight', 'true');
        }

        // Накопительное вращение: добавляем 90° к текущему углу
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