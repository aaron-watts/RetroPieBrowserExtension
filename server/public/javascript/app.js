class Source {
    constructor(_source) {
        this.source = _source;
        this.strID = this.source.id;
        this.id = this.strID.slice(2)
        this.toggle = document.querySelector(`#${this.strID} .options`);

        this.toggle.addEventListener('click', () => this.toggleMenu());
    };

    toggleMenu() {
        return this.toggle.classList.toggle('show');
    };
};

const srcElems = document.querySelectorAll('.source');
const sources = [...srcElems].map(src => new Source(src));
