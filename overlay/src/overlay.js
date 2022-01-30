class x11x1x11btn {
    constructor(_config, _callback=undefined) {
        this.config = {...x11x1x11btn._default, ..._config};
        this.callback = _callback;

        this.nodeType = this.config.nodeType;
        this.href = this.config.href;
        this.icon = this.config.icon;
        this.className = `btn ${this.config.className}`;

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
        btnFG: '#e1e8ee',
        btnBG: '#585f66e6',
        seperator: '#e1e8ee75',
        btnSize: '9vh'
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
            <path fill=${x11x1x11btn.conf.btnFG} d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
            </svg>
            `,
        back: /* html */`
            <svg class="svg-icon" viewBox="0 0 20 20">
            <path fill=${x11x1x11btn.conf.btnFG} d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
            L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
            c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
            c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
            S18.707,9.212,18.271,9.212z"></path>
            </svg>
            `,
        hide: /* html */`
            <div></div>
            `
    };

    static styles () {
        const styleSheet = document.createElement('style');
        const id = x11x1x11btn.conf.identifier;
        const panel = `#${id}.panel`;

        styleSheet.innerText = /* CSS */ `
            :root {
                --btn-size: ${x11x1x11btn.conf.btnSize};
                --btn-bg: ${x11x1x11btn.conf.btnBG};
                --btn-fg: ${x11x1x11btn.conf.btnFG};
                --border-fg: ${x11x1x11btn.conf.seperator};
                --border-h: calc(var(--btn-size) * .7);
                --border-top: calc(var(--border-h) * .25);
            
                --animate-fast: .12s 0s linear;
                --animate-slow: .18s 0s linear;
            
                --svg-size: calc(var(--btn-size) * .7);
                --svg-pos: 
                    calc(
                        calc(var(--btn-size) * .5)
                        -
                        calc(var(--svg-size) * .5)
                    );
            
                --panel-bottom: calc(var(--btn-size) * .6);
            
                --menu-w-compact: calc(var(--btn-size) * .25);
                --menu-burger-h: calc(var(--btn-size) * .04);
                --menu-burger-w: calc(var(--btn-size) * .5);
                --menu-burger-left: 
                    calc(
                        calc(var(--btn-size) * .5)
                        -
                        calc(var(--menu-burger-w) * .5) 
                    );
                --menu-burger-top: calc(
                    calc(var(--btn-size) * .5)
                    -
                    calc(var(--menu-burger-h) * .5) 
                );
                --menu-burger-offset: calc(
                    var(--menu-burger-top)
                    -
                    calc(var(--btn-size) * .65)
                );
            }
            
            
            .panel {
                position: fixed;
                bottom: var(--panel-bottom);
                left: 0;
                background: transparent;
                font-size: 0;
            }
            
            .panel .btn.notify {
                width: calc(var(--btn-size) * 3);
                font-size: calc(var(--btn-size) * .2);
                color: var(--btn-fg);
                font-family: sans-serif;
                cursor: default;
                padding: 
                    calc(var(--btn-size) * .1)
                    calc(var(--btn-size) * .2);
            }
            ${panel} .btn.notify p {
                margin: 0;
                word-wrap: break-all;
                line-break: anywhere;
            }
            ${panel} .btn.notify p:first-of-type {
                font-weight: 700;
            }
            
            ${panel} .btn {
                box-sizing: border-box;
                height: var(--btn-size);
                width: var(--btn-size);
                background: var(--btn-bg);
            
                display: inline-block;
                position: relative;
                border-radius: 0;
                border: none;
                cursor: pointer;
            
                vertical-align: middle;
                margin: 0;
            
                box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
            }
            
            ${panel} > 
            .btn:not(:first-child):not(.hide)::before {
                content: '';
                height: var(--border-h);
                width: 1px;
                background: var(--border-fg);
            
                position: absolute;
                top: var(--border-top);
                left: 0;
            }
            
            ${panel} .btn {
                transition: 
                    transform var(--animate-slow),
                    background var(--animate-fast);
            }
            ${panel} .btn:hover {
                background: #626a72c0;
                transition: background var(--animate-fast);
            }
            
            ${panel}.compact > *:not(:first-child),
            ${panel} .btn.hide {
                transform: scaleX(0);
            }
            
            ${panel}.compact .btn.menu {
                transform: scaleX(.35);
                transform-origin: left;
            }
            ${panel}.compact .btn.menu:hover {
                transform: scaleX(1);
                transform-origin: left;
                transition: 
                    transform var(--animate-slow),
                    background var(--animate-fast);
            }
            ${panel}.compact .btn.menu div {
                background: var(--btn-fg);
                transform: translateX(0);
            }
            ${panel}.compact .btn.menu div::before,
            ${panel}.compact .btn.menu div::after {
                width: var(--menu-w-compact);
                transform: rotate(0);
            }
            ${panel}.compact .btn.menu:hover div::before,
            ${panel}.compact .btn.menu:hover div::after {
                width: var(--menu-burger-w);
            }
            
            ${panel} .btn.menu div,
            ${panel} .btn.menu div::before,
            ${panel} .btn.menu div::after {
                background: var(--btn-fg);
                width: var(--menu-burger-w);
                height: var(--menu-burger-h);
                border-radius: calc(var(--menu-burger-h) * .5);
                margin: 0 auto;
                position: absolute;
                transition: all var(--animate-fast);
            }
            ${panel} .btn.menu div {
                left: var(--menu-burger-left);
                top: var(--menu-burger-top);
            
                transform: translateX(
                        calc(
                            var(--menu-burger-w) * .15
                        )
                    );
                background: transparent;
            }
            ${panel} .btn.menu div::before,
            ${panel} .btn.menu div::after {
                content: '';
                left: 0;
            }
            ${panel} .btn.menu div::before {
                top: var(--menu-burger-offset);
                transform: rotate(45deg);
                transform-origin: top left;
            }
            ${panel} .btn.menu div::after {
                bottom: var(--menu-burger-offset);
                transform: rotate(-45deg);
                transform-origin: bottom left;
            }
            
            ${panel} .btn svg {
                height: var(--svg-size);
                transform-origin: center;
                transform: scale(.8);
                position: absolute;
                top: var(--svg-pos);
                left: var(--svg-pos);
            }
            
            ${panel} .btn.back svg {
                transform: scale(.75);
            }
        `;

        return styleSheet;
    }

    static btns = [
        [
            {
                nodeType: 'button',
                className: 'menu',
                icon: x11x1x11btn.icons.hide,
                href: ''
            },
            e => {
                e.preventDefault();
                document.querySelector(`.panel`)
                    .classList.toggle('compact');
            }
        ],
        [
            {
                className: 'home',
                icon: x11x1x11btn.icons.home,
                href: 'http://127.0.0.1:3030'
            }
        ],
        [
            {
                className: 'back',
                icon: x11x1x11btn.icons.back,
                href: 'javascript:history.back()'
            }
        ]
    ];

    static panel () {
        const panel = document.createElement('div');

        panel.id = x11x1x11btn.conf.identifier;
        panel.className = `panel compact`;
    
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
