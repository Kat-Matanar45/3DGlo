const modal = () => {
    const modalWindow = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modalWindow.querySelector('.popup-close');
    const popupContent = modalWindow.querySelector('.popup-content');
    let count = 0;
    let interval;
    let active = false;
    const widthDoc = document.documentElement.clientWidth;

    const flyAnimation = () => {
        count += 0.010;
        interval = requestAnimationFrame(flyAnimation);
    
        if (count < 1) {popupContent.style.opacity = count}
        else { 
            cancelAnimationFrame(interval)
        }};

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            active = !active;
            modalWindow.style.display = 'block';
            if (widthDoc > 768) {flyAnimation()}
        })
    });

    closeBtn.addEventListener('click', () => {
        modalWindow.style.display = 'none';
        count = 0;
    });
}

export default modal