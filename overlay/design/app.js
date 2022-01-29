const menu = document.querySelector('.panel .btn.menu');
const notify = document.querySelector('.panel .notify');

menu.addEventListener('click', () => {
    return document.querySelector('.panel')
        .classList.toggle('compact');
});

const dropNotify = () => {
    notify.classList.toggle('hide');
};

// window.setInterval(dropNotify, 5000);