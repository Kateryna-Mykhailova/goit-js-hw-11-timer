class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector('[data-value = "days"]'),
            hours: document.querySelector('[data-value = "hours"]'),
            minutes: document.querySelector('[data-value = "mins"]'),
            seconds: document.querySelector('[data-value = "secs"]'),
        };

        this.id = null;
        this.dataEnd = this.targetDate;
        this.createTime = this.createTime.bind(this);
        this.timerStart = this.timerStart.bind(this);
    }

    timerStart() {
     
        this.id = setInterval(() => {

            const startDate = Date.now();
            const time = this.dataEnd - startDate;

            if (time <= 0) {
                clearInterval(this.id);
                return
            }
            this.createTime(time)
        },
            1000);
    };

    createTime(time) {
  
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        
        this.refs.days.textContent = days < 10 ? `0${days}` : days;
        this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
        this.refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
            this.refs.seconds.textContent = secs < 10 ? `0${secs}` : secs;
    };
    };

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 19, 2022'),
});


timer.timerStart();
