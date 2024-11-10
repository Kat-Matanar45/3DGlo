const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    let interval;
    let timeRemaining2;

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const hours = Math.floor(timeRemaining / 60 / 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);
        
        return {timeRemaining, hours, minutes, seconds};
    }

    const timerStop = () => {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    }

    const updateClock = () => {
        const getTime = getTimeRemaining();

        if (getTime.hours < 10) {timerHours.textContent = '0' + getTime.hours}
        else {timerHours.textContent = getTime.hours};
        if (getTime.minutes < 10) {timerMinutes.textContent = '0' + getTime.minutes}
        else {timerMinutes.textContent = getTime.minutes};
        if (getTime.seconds < 10) {timerSeconds.textContent = '0' + getTime.seconds}
        else {timerSeconds.textContent = getTime.seconds};

        timeRemaining2 = getTime.timeRemaining;
    }

    updateClock();

    if (timeRemaining2 > 0) {interval = setInterval(updateClock, 1000)}; 
        if ((timeRemaining2 === 0) || (timeRemaining2 < 0)) {
            clearInterval(interval);
            timerStop()
        };
    
}

export default timer