const inputBan = () => {
    const inputTel = document.querySelectorAll('input[type=tel]');
    const inputPla = document.querySelector('input[placeholder="Ваше сообщение"]');
    const inputEmail = document.querySelectorAll('input[type=email]');
    const inputTextAll = document.querySelectorAll('input[type=text]');
    const inputArray = Array.from(inputTextAll);
    const arrayThree = [inputArray[0], inputArray[inputArray.length-2], inputArray[inputArray.length-1]];

    const inputText = (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]+/, '')
    };

    inputTel.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\-\(\)]+/, '')
        })
    });

    inputPla.addEventListener('input', inputText);

    inputEmail.forEach((item) => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']+/, '')
        })
    });

    arrayThree.forEach((item) => {
        item.addEventListener('input', inputText)
    });
}

export default inputBan