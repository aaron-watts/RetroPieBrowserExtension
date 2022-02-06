class Source {
    constructor(_source) {
        this.source = _source;
        this.strID = this.source.id;
        this.id = this.strID.slice(2)
        this.toggle = document.querySelector(`#${this.strID} .options`);
        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        this.delete = document.querySelector(`#${this.strID} form.delete`);
        this.deleteCtl = [...this.delete].filter(i => Source.isSubmitBtn(i))[0];
        this.deleteCtl.addEventListener('click', evt => {
            evt.preventDefault();
            if (confirm('Are you sure?')) this.delete.submit();
        });
    };

    toggleMenu() {
        return this.toggle.classList.toggle('show');
    };

    static isSubmitBtn(btn) {
        return btn.nodeName === 'BUTTON' && btn.type === "submit";
    }
};

const srcElems = document.querySelectorAll('.source');
const sources = [...srcElems].map(src => new Source(src));
