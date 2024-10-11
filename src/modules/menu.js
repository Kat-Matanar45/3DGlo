const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    let id;

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    const animation = () => {
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    };

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => menuItem.addEventListener('click', (event) => {
        handleMenu();
        id = menuItem.getAttribute('href');
        event.preventDefault();
        animation();
    }));
}

export default menu