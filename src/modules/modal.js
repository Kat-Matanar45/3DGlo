import { animate } from "./helpers";

const modal = () => {
    const modalWindow = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popupContent = modalWindow.querySelector('.popup-content');
    let active = false;
    const widthDoc = document.documentElement.clientWidth;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            active = !active;
            modalWindow.style.display = 'block';
            if (widthDoc > 768) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                      return Math.pow(timeFraction, 2);
                    },
                    draw(progress) {
                        popupContent.style.opacity = 2 * progress;
                    }
                  });
            }
        })
    });

    modalWindow.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modalWindow.style.display = 'none';
        }
    })
}

export default modal