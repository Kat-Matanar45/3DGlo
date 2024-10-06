const output = document.querySelector('.data');

let dates = new Date();
console.log(dates);
let time = dates.toTimeString();

const dayWeekElem = () => {
    let dayWeek = dates.getDay();

    switch (dayWeek) {
        case 1: return "Понедельник"; break; 
        case 2: return "Вторник"; break;
        case 3: return "Среда"; break;
        case 4: return "Четверг"; break;
        case 5: return "Пятница"; break;
        case 6: return "Суббота"; break;
        case 0: return "Воскресенье"; break;
    };
};

const newYear = () => {
    let dayNewYear = Date.parse('01.01.2025');
    let dateToday = Date.now();
    let dayResidue = Math.floor((dayNewYear - dateToday) / 1000 / 60 / 60 / 24); 
    return dayResidue;
}

const timeDay = () => {
    let dayHour = dates.getHours();

    if ((dayHour >= 22) && (dayHour <= 6)) {return "Доброй ночи!"};
    if ((dayHour >= 7) && (dayHour <= 12)) {return "Доброе утро!"};
    if ((dayHour >= 13) && (dayHour <= 17)) {return "Добрый день!"};
    if ((dayHour >= 18) && (dayHour <= 21)) {return "Добрый вечер!"};
}

const conclusion = () => {
    
}