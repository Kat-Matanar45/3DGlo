const click = () => {
    const clickBtn = document.querySelector('main>a');

    clickBtn.addEventListener('click', () => {
        document.querySelector('#service-block').scrollIntoView({
            behavior: 'auto',
            block: 'center'
        });
    })
}

export default click