export class Source {
    constructor(_source) {
        this.source = _source;
        this.strID = this.source.id;
        this.id = this.strID.slice(2)
        this.menu = document.querySelector(`#${this.strID} .options`);

        this.menu.addEventListener(
            'pointerover',
            () => this.toggleMenuOn()
        );
        this.menu.addEventListener(
            'pointerleave',
            () => this.toggleMenuOff()
        )
        
        this.delete = 
            document.querySelector(`#${this.strID} form.delete`);
        this.deleteCtl = 
            [...this.delete].filter(i => Source.isSubmitBtn(i))[0];

        this.deleteCtl.addEventListener('click', evt => {
            evt.preventDefault();
            Source.confirm(`Delete Source:${'SOURCE'}`, this.delete);
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

    static modal = {
        modal: document.querySelector('.confirm'),
        message: document.querySelector('.confirm .message'),
        execFn: document.querySelector('.confirm .safe'),
        cancel: document.querySelector('.confirm .danger')
    }

    static confirm(_message, _form) {
        const source = Source.modal;
        const execFn = () => _form.submit();
        const cancel = () => {
            source.modal.classList.remove('show');
            removeEventListener('click', execFn);
        }

        source.execFn.addEventListener('click', execFn);
        source.cancel.addEventListener(
            'click',
            cancel,
            { once : true }
        );

        source.message.innerText = _message;
        source.modal.classList.add('show');
    }
};