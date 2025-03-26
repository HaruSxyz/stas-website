class ActiveNavigation {
    selectors = {
        navLinks: '[data-js-nav-link]',
        sections: '[data-js-section]',
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor() {
        this.navLinks = document.querySelectorAll(this.selectors.navLinks);
        this.sections = document.querySelectorAll(this.selectors.sections);
        this.bindEvents();
    }


    updateActiveLink = () => {
        const scrollPosition = window.scrollY; // Get current scroll position
        const offset = 100; // Add small offset to trigger active state a bit earlier

        // Determine which section is currently in view
        this.sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            // Check if the section is currently in view
            if (scrollPosition >= sectionTop - offset &&
                scrollPosition < sectionTop + sectionHeight - offset) {

                // Remove active class from all links
                this.navLinks.forEach((link) => {
                    link.classList.remove(this.stateClasses.isActive);
                });

                // Add active class to current section link
                const activeLink = document.querySelector(`[data-js-nav-link][href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add(this.stateClasses.isActive);
                }
            }
        });

        // Special case for home section when at the very top of the page
        if (scrollPosition < offset) {
            this.navLinks.forEach((link) => {
                link.classList.remove(this.stateClasses.isActive);
            });
            const homeLink = document.querySelector('[data-js-nav-link][href="#home"]');
            if (homeLink) {
                homeLink.classList.add(this.stateClasses.isActive);
            }
        }
    };


    bindEvents() {
        window.addEventListener('scroll', this.updateActiveLink);
        window.addEventListener('load', this.updateActiveLink); // Initial update on page load
        document.addEventListener('DOMContentLoaded', this.updateActiveLink); // Also update on DOMContentLoaded in case load event fires too late
    }
}

export default ActiveNavigation