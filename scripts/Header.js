class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootelement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootelement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootelement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }


    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
    }


    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default Header