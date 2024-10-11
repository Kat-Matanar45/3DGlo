const modal = () => {
    const modalWindow = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modalWindow.querySelector('.popup-close');
    const popupContent = modalWindow.querySelector('.popup-content');
    let count = 0;
    let interval;
    let active = false;
    const widthDoc = document.documentElement.clientWidth;
    console.log(widthDoc);

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

    const flyAnimation = () => {
        count++;
        interval = requestAnimationFrame(flyAnimation);
    
        if (count < 100) {
            popupContent.style.top = count * 2 + 'px';
            popupContent.style.left = count * 8 + 'px'
        }
        else { 
            cancelAnimationFrame(interval)
        }};
}

export default modal