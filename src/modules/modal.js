const modal = () => {
    const modalWindow = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modalWindow.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalWindow.style.display = 'block';
        })
    });

    closeBtn.addEventListener('click', () => {
        modalWindow.style.display = 'none';
    })
}

export default modal