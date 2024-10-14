const calc = () => {
    const calcBloc = document.querySelector('.calc-block');
    const calcSquare = calcBloc.querySelector('.calc-square');
    const calcCount = calcBloc.querySelector('.calc-count');
    const calcDay = calcBloc.querySelector('.calc-day');

    const figures = (e) => {
        e.target.value = e.target.value.replace(/\D+/, '')
    };
    
    calcSquare.addEventListener('input', figures);
    calcCount.addEventListener('input', figures);
    calcDay.addEventListener('input', figures);
}

export default calc