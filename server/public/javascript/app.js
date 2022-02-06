class Source {
    constructor(_source) {
        this.source = _source;
        this.strID = this.source.id;
        this.id = this.strID.slice(2)
        this.menu = document.querySelector(`#${this.strID} .options`);
        this.menu.addEventListener('pointerover', () => this.toggleMenuOn());
        this.menu.addEventListener('pointerleave', () => this.toggleMenuOff())
        
        this.delete = document.querySelector(`#${this.strID} form.delete`);
        this.deleteCtl = [...this.delete].filter(i => Source.isSubmitBtn(i))[0];

        this.deleteCtl.addEventListener('click', evt => {
            evt.preventDefault();
            if (confirm('Are you sure?')) this.delete.submit();
        });
    };

    toggleMenuOn() {
        return this.menu.classList.add('show');
    };

    toggleMenuOff() {
        return this.menu.classList.remove('show');
    }

    static isSubmitBtn(btn) {
        return btn.nodeName === 'BUTTON' && btn.type === "submit";
    }
};

const srcElems = document.querySelectorAll('.source');
const sources = [...srcElems].map(src => new Source(src));
