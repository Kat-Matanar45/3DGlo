import { animate } from "./helpers";

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const total = document.querySelector('#total');
    let totalValue = 0;
    let number;

    const figures = (e) => {
        e.target.value = e.target.value.replace(/\D+/, '')
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue = calcCountValue + (+calcCount.value / 10)
        };

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        };

        if (calcTypeValue && calcSquareValue) {
            totalValue = Math.round(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue);
        } else {
            totalValue = 0;
        }
    };

    calcSquare.addEventListener('input', figures);
    calcCount.addEventListener('input', figures);
    calcDay.addEventListener('input', figures);
    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            countCalc();
        };

       animate({
        duration: 2000,
        timing(timeFraction) {
          return Math.pow(timeFraction, 2);
        },
        draw(progress) {
            number = 0;
        if (totalValue !== 0 && number !== totalValue) {
            number = Math.round(totalValue * progress);
        }
        total.textContent = number;
    }});
    });
}

export default calc