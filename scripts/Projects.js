class ProjectsFilter {
    constructor() {
        this.filterLinks = document.querySelectorAll('[data-filter]');
        this.projects = document.querySelectorAll('[data-category]');
        this.bindEvents();
    }

    onFilterClick = (event) => {
        event.preventDefault();
        const filter = event.target.dataset.filter;

        this.filterLinks.forEach(link => link.classList.remove('is-active'));
        event.target.classList.add('is-active');

        this.projects.forEach(project => {
            project.style.display = (filter === 'all' || project.dataset.category === filter) ? 'block' : 'none';
        });
    };

    bindEvents() {
        this.filterLinks.forEach(link => link.addEventListener('click', this.onFilterClick));
    }
}

export default ProjectsFilter