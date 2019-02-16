let deadLine = '2019-04-07';

    const getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()), //.parse превращает любую дату в мс  и используем для остановки таймера как только t<=0 таймер останавливатеся 
            seconds = Math.floor((t / 1000) % 60), //Math.floor() для округления, (t/1000)%60 берем остаток секунд от минуты
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return { //вычленяем значения полностью времени, часов, минут, секунд в массив
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (id /*id elementa*/ , endtime /*time stop variable*/ ) => {
        let days = document.querySelector('.days'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds');


        const updateClock = () => {
            let tm = getTimeRemaining(endtime);

            days.innerHTML = (`0${tm.days}`).slice(-2);
            hours.innerHTML = (`0${tm.hours}`).slice(-2);
            minutes.innerHTML = (`0${tm.minutes}`).slice(-2);
            seconds.innerHTML = (`0${tm.seconds}`).slice(-2);

            //timer stop

            function timerOff(n) {
                n.innerHTML = "00";
            }

            if (tm.total <= 0) {
                clearInterval(timeInterval);

                timerOff(days);
                timerOff(hours);
                timerOff(minutes);
                timerOff(seconds);
            }
        };
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadLine);