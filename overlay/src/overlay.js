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
        <div>
        `
    };

    static styles () {
        const styleSheet = document.createElement('style');
        const identifier = x11x1x11btn.conf.identifier;

        styleSheet.innerText = /* CSS */ `
            :root {
                --${identifier}-btn-size: 9vh;
                --${identifier}-svg-size: calc(var(--${identifier}-btn-size) * .7);
                --${identifier}-svg-pos: 
                    calc(
                        calc(var(--${identifier}-btn-size) / 2) - calc(var(--${identifier}-svg-size) / 2)
                        );
                --${identifier}-border-radius: calc(var(--${identifier}-btn-size) * .2);
                --${identifier}-panel-border-radius: 
                    0 
                    var(--${identifier}-border-radius) 
                    var(--${identifier}-border-radius)
                    0;
                --${identifier}-btn-margin: calc(var(--${identifier}-btn-size) * .06);
                --${identifier}-btn-margin-lg: calc(var(--${identifier}-btn-margin) * 2);
                --${identifier}-btn-bs: ${x11x1x11btn.conf.btnColor};
                --${identifier}-panel-bg: ${x11x1x11btn.conf.btnColor}e6;
                --${identifier}-burger-height: 
                    calc(
                        var(--${identifier}-btn-size) * 0.05
                    );
                --${identifier}-burger-width:
                        calc(
                            var(--${identifier}-btn-size) * .5
                        );
                --${identifier}-burger-compressed:
                    calc(
                        var(--${identifier}-btn-size) * .1
                    );
            }

            .${identifier}panel {
                background: var(--${identifier}-panel-bg);
                position: fixed;
                bottom: calc(var(--${identifier}-svg-pos) * 2);
                left: 0;
                padding: var(--${identifier}-btn-margin-lg);
                border-radius: var(--${identifier}-panel-border-radius);
                margin: 0;
                display: flex;
                justify-content: flex-start;
            }
            .${identifier}panel:not(.active) {
                padding: var(--${identifier}-btn-margin-lg) 0;
            }

            .${identifier}btn:not(.hide) {
                display: none;
            }
            .active .${identifier}btn:not(.hide) {
                display: inline-block;
            }
            .${identifier}btn.hide {
                width: calc(var(--${identifier}-btn-size) / 4);
                box-shadow: none;
                transition: width .1s 0s ease-in-out;
            }
            .${identifier}panel:hover .${identifier}btn.hide {
                width: var(--${identifier}-btn-size);
            }
            .active .${identifier}btn.hide {
                width: var(--${identifier}-btn-size);
                margin:
                    var(--${identifier}-btn-margin)
                    var(--${identifier}-btn-margin-lg);
                box-shadow: 0 0 5px 5px var(--${identifier}-panel-bg) inset;
            }

            a.${identifier}btn,
            button.${identifier}btn {
                display: inline-block;
                box-sizing: border-box;
                border-radius: var(--${identifier}-border-radius);;
                border: none;
                box-shadow: 0 0 5px 5px var(--${identifier}-panel-bg) inset;
                height: var(--${identifier}-btn-size);
                width: var(--${identifier}-btn-size);
                background: transparent;
                position: relative;
                padding: 0;
                margin: 
                    var(--${identifier}-btn-margin)
                    var(--${identifier}-btn-margin-lg);
                vertical-align: middle;
                cursor: pointer;
            }

            a.${identifier}btn svg,
            button.${identifier}btn svg {
                height: var(--${identifier}-svg-size);
                transform-origin: center;
                transform: scale(.8);
            }
            a.${identifier}btn svg {
                position: absolute;
                top: var(--${identifier}-svg-pos);
                left: var(--${identifier}-svg-pos);
            }
            a.${identifier}btn.back svg {
                transform: scale(.75);
            }

            button.${identifier}btn.hide div {
                height: var(--${identifier}-burger-height);
                width: var(--${identifier}-burger-compressed);
                top: calc(50% - 2.5%);
                left: 25%;
            }
            button.${identifier}btn.hide div,
            button.${identifier}btn.hide div::before,
            button.${identifier}btn.hide div::after {  
                background: white;
                margin: auto;
                border-radius: 2px;
                position: absolute;
                transition: width .1s 0s ease-in-out;
            }
            button.${identifier}btn.hide div::before,
            button.${identifier}btn.hide div::after {
                content: '';
                width: var(--${identifier}-burger-compressed);
                height: var(--${identifier}-burger-height);
                left: 0;
            }
            button.${identifier}btn.hide div::before {
                top: 350%;
            }
            button.${identifier}btn.hide div::after {
                top: -350%;
            }
            .${identifier}panel:hover .${identifier}btn.hide div,
            .${identifier}panel:hover .${identifier}btn.hide div::before,
            .${identifier}panel:hover .${identifier}btn.hide div::after {
                width: var(--${identifier}-burger-width);
            }
            .active button.${identifier}btn.hide div,
            .active button.${identifier}btn.hide div::before,
            .active button.${identifier}btn.hide div::after {
                width: var(--${identifier}-burger-width);
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