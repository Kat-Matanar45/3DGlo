const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    let empty;
    const formElements = form.querySelectorAll('input');
    const statusBlock = document.createElement('div');
    const errorText = 'Ошибка! Попробуйте повторить отправку позже!';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется.';
    const emptyText = 'Заполните все поля!';

    const emptyBan = () => {
        empty = false;
        formElements.forEach(elem => {
                console.log(elem)
                console.log(elem.value)
                if (elem.value === '' || elem.value === null) {return empty = true}
                else {return empty = false}
        });

    };

    const statusBlokImg = () => {
        const img = document.createElement('img');
        img.src = 'images/load.gif';
        img.alt = 'Загрузка';
        statusBlock.append(img);
    }

    const senData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {

        
        const formData = new FormData(form);
        const formBody = {};

        statusBlokImg();
        form.append(statusBlock);

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
        })

        senData({formBody})
            .then(data => {
                statusBlock.textContent = successText;

                if (formId === 'form3') {
                    statusBlock.style.color = "white"
                };

                formElements.forEach(input => input.value = '')
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            })
    }

    try {
        if (!form) {
            throw new Error("Для работы нужна форма! Верните её, пожалуйста!")
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            emptyBan();

            if (empty === false) {
                submitForm();

                setInterval(() => {
                statusBlock.textContent = ''
            }, 4000)
            } else {
                statusBlock.textContent = emptyText;
            } 
        })
    } catch (error) {
        console.log(error.message)
    }

}

export default sendForm