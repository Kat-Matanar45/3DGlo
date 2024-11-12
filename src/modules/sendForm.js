const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const formElements = form.querySelectorAll('input');
    const errorText = 'Ошибка! Попробуйте повторить отправку позже!';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется.';
    const emptyText = 'Заполните все поля!';
    let empty;

    const emptyBan = () => {
        empty = false;
        formElements.forEach(elem => {
                if (elem.value.trim() === '') {empty = true}
        });
        return empty;
    };

    const addStatusBlock = () => {
        
        statusBlokImg();
        form.append(statusBlock);

        if (formId === 'form3') {
            statusBlock.style.color = "white"
        };
    };

    const statusBlokImg = () => {
        const img = document.createElement('img');
        img.src = 'images/load.gif';
        img.alt = 'Загрузка';
        statusBlock.append(img);
    };

    const senData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    };

    const submitForm = () => {

        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            };
            if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        senData({formBody})
            .then(data => {
                statusBlock.textContent = successText;

                formElements.forEach(input => input.value = '')
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            })
    };

    try {
        if (!form) {
            throw new Error("Для работы нужна форма! Верните её, пожалуйста!")
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            emptyBan();

            addStatusBlock();

            if (empty == false) {
                submitForm();
            } else {
                statusBlock.textContent = emptyText;
            };

            setInterval(() => {
                statusBlock.textContent = ''
            }, 4000)
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm