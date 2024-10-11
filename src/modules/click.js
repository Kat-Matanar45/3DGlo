const click = () => {
    const clickBtn = document.querySelector('main>a');

    clickBtn.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#service-block').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

export default click