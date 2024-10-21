const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    let id;

document.body.addEventListener('click', (e) => {

    if (e.target.closest('.menu')) {
        menu.classList.add('active-menu');
    }

    if (e.target.classList.contains('close-btn') || (!e.target.closest('menu') && !e.target.closest('.menu'))) {
        menu.classList.remove('active-menu');
    };

    if ((e.target.tagName === 'A') && (e.target.closest('menu'))) {
        e.preventDefault(); 
        id = e.target.getAttribute('href'); 
        menu.classList.remove('active-menu'); 

        if (id !== '#close') {
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }); 
    };
    };
});
}

export default menu