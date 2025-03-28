class HeaderScroll {
    selectors = {
        root: '[data-js-header]',
        mini: '[data-js-header-mini]',
    }

    stateClasses = {
        isExpanded: 'is-expanded',
        isScrolled: 'scrolled',
        closing: 'closing',
    }

    constructor() {
        this.mediaQuery = window.matchMedia('(max-width: 767.98px)');
        if (this.mediaQuery.matches) return; // Don't run on mobile

        this.rootelement = document.querySelector(this.selectors.root)
        this.miniElement = document.querySelector(this.selectors.mini)
        this.bindEvents()
    }


    onScroll = () => {
        if (this.mediaQuery.matches) return;

        const headerHeight = this.rootelement.offsetHeight;
        if (window.scrollY > headerHeight / 2) {
            this.rootelement.classList.add(this.stateClasses.isScrolled);
            this.miniElement.classList.add(this.stateClasses.isScrolled);
        } else {
            if (this.rootelement.classList.contains(this.stateClasses.isExpanded)) {
                this.rootelement.classList.add(this.stateClasses.closing);
                this.miniElement.classList.add(this.stateClasses.closing);

                setTimeout(() => {
                    this.rootelement.classList.remove(this.stateClasses.isExpanded, this.stateClasses.closing);
                    this.miniElement.classList.remove(this.stateClasses.isExpanded, this.stateClasses.closing);
                }, 300);
            }

            this.miniElement.classList.remove(this.stateClasses.isScrolled);
            this.rootelement.classList.remove(this.stateClasses.isScrolled);

        }
    };


    onMiniClick = () => {
        if (this.mediaQuery.matches) return;

        if (this.rootelement.classList.contains(this.stateClasses.isExpanded)) {
            this.rootelement.classList.add(this.stateClasses.closing)
            this.miniElement.classList.add(this.stateClasses.closing)

            setTimeout(() => {
                this.rootelement.classList.remove(this.stateClasses.isExpanded, this.stateClasses.closing)
                this.miniElement.classList.remove(this.stateClasses.isExpanded, this.stateClasses.closing)
            }, 300)
        } else {
            this.rootelement.classList.add(this.stateClasses.isExpanded)
            this.miniElement.classList.add(this.stateClasses.isExpanded)
        }
    }

    
    bindEvents() {
        window.addEventListener('scroll', this.onScroll)
        this.miniElement.addEventListener('click', this.onMiniClick)
    }
}

export default HeaderScroll