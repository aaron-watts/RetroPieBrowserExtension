class x11x1x11btn {
    constructor(_config, _callback=undefined) {
        this.config = {...x11x1x11btn._default, ..._config};
        this.callback = _callback;

        this.nodeType = this.config.nodeType;
        this.href = this.config.href;
        this.icon = this.config.icon;
        this.className = `${x11x1x11btn.conf.identifier}btn ${this.config.className}`;

        this.elem = document.createElement(this.nodeType);
        this.elem.innerHTML = this.icon;
        if (this.href) this.elem.href = this.href;
        if (this.callback) {
            this.elem.addEventListener('click', this.callback);
        }
        this.elem.className = this.className;
    }

    get node() {
        return this.elem;
    }

    static conf = {
        identifier: 'x11x1x11',
        svgColor: 'white',
        btnColor: '#585f66'
    };

    static _default = {
        nodeType: 'a',
        href: '',
        icon: '',
        className: ''
    };

    static icons = {
        home: /* html */`
        <svg class="svg-icon" viewBox="0 0 20 20">
        <path fill=${x11x1x11btn.conf.svgColor} d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
        </svg>
        `,
        back: /* html */`
        <svg class="svg-icon" viewBox="0 0 20 20">
        <path fill=${x11x1x11btn.conf.svgColor} d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
        L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
        c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
        c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
        S18.707,9.212,18.271,9.212z"></path>
        </svg>
        `,
        hide: /* html */`
        <div>`
    };

    static styles () {
        const styleSheet = document.createElement('style');
        const identifier = 'x11x1x11'

        styleSheet.innerText = /* CSS */ `
            :root {
                --x11x1x11-btn-size: 9vh;
                --x11x1x11-svg-size: calc(var(--x11x1x11-btn-size) * .7);
                --x11x1x11-svg-pos: 
                    calc(
                        calc(var(--x11x1x11-btn-size) / 2) - calc(var(--x11x1x11-svg-size) / 2)
                        );
                --x11x1x11-border-radius: calc(var(--x11x1x11-btn-size) * .2);
                --x11x1x11-panel-border-radius: 
                    0 
                    var(--x11x1x11-border-radius) 
                    var(--x11x1x11-border-radius)
                    0;
                --x11x1x11-btn-margin: calc(var(--x11x1x11-btn-size) * .06);
                --x11x1x11-btn-margin-lg: calc(var(--x11x1x11-btn-margin) * 2);
                --x11x1x11-btn-bs: ${x11x1x11btn.conf.btnColor};
                --x11x1x11-panel-bg: ${x11x1x11btn.conf.btnColor}e6;
            }

            div.${identifier}panel {
                background: var(--x11x1x11-panel-bg);
                position: fixed;
                bottom: calc(var(--x11x1x11-svg-pos) * 2);
                left: 0;
                padding: var(--x11x1x11-btn-margin-lg);
                border-radius: var(--x11x1x11-panel-border-radius);
                margin: 0;
            }
            div.${identifier}panel.active {}

            a.${identifier}btn:not(.hide) {
                display: none;
            }

            .active a.${identifier}btn:not(.hide) {
                display: inline-block;
            }

            a.${identifier}btn,
            button.${identifier}btn {
                display: inline-block;
                box-sizing: border-box;
                border-radius: var(--x11x1x11-border-radius);;
                border: none;
                box-shadow: 0 0 5px 5px var(--x11x1x11-panel-bg) inset;
                height: var(--x11x1x11-btn-size);
                width: var(--x11x1x11-btn-size);
                background: transparent;
                position: relative;
                padding: 0;
                margin: 
                    var(--x11x1x11-btn-margin)
                    var(--x11x1x11-btn-margin-lg);
                vertical-align: middle;
                cursor: pointer;
            }

            a.${identifier}btn svg,
            button.${identifier}btn svg {
                height: var(--x11x1x11-svg-size);
                transform-origin: center;
                transform: scale(.8);
            }
            a.${identifier}btn svg {
                position: absolute;
                top: var(--x11x1x11-svg-pos);
                left: var(--x11x1x11-svg-pos);
            }
            a.${identifier}btn.back svg {
                transform: scale(.75);
            }

            button.${identifier}btn.hide div,
            button.${identifier}btn.hide div::before,
            button.${identifier}btn.hide div::after {  
                background: white;
                margin: auto;
                border-radius: 2px;
                position: absolute;
            }
            button.${identifier}btn.hide div {
                height: 5%;
                width: 50%;
                top: calc(50% - 2.5%);
                left: 25%;
            }
            button.${identifier}btn.hide div::before,
            button.${identifier}btn.hide div::after {
                content: '';
                height: 100%;
                width: 100%;
                left: 0;
            }
            button.${identifier}btn.hide div::before {
                top: 350%;
            }
            button.${identifier}btn.hide div::after {
                top: -350%;
            }
        `;

        return styleSheet;
    }

    static btns = [
        [
            {
                className: 'home',
                icon: x11x1x11btn.icons.home,
                href: 'https://www.google.com'
            }
        ],
        [
            {
                className: 'back',
                icon: x11x1x11btn.icons.back,
                href: 'javascript:history.back()'
            }
        ],
        [
            {
                nodeType: 'button',
                className: 'hide',
                icon: x11x1x11btn.icons.hide,
                href: ''
            },
            e => {
                e.preventDefault();
                document.querySelector(`div.${x11x1x11btn.conf.identifier}panel`)
                    .classList.toggle('active');
            }
        ]
    ];

    static panel () {
        const panel = document.createElement('div');

        panel.className = `x11x1x11panel active`;
    
        return panel;
    };
}

const x11x1x11main = () => {
    const panel = x11x1x11btn.panel();

    for (let btn of x11x1x11btn.btns) {
        panel.appendChild(new x11x1x11btn(...btn).node);
    }

    document.head.appendChild(x11x1x11btn.styles());
    document.body.appendChild(panel);
};

window.addEventListener('load', e => {
    x11x1x11main();
});