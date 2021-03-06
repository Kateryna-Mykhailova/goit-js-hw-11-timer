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
        this.dataEnd = null;
        this.id = null;
        this.startTime = null;
        this.createTime = this.createTime.bind(this);
        this.timerStart = this.timerStart.bind(this);
    }

    timerStart() {
        this.id = setInterval(this.createTime, 1000);
    };

    createTime() {
    
        this.dataEnd = this.targetDate;
         this.startTime = Date.now();
        const time = this.dataEnd - this.startTime;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        
        if (this.startTime < this.dataEnd) {
        
        this.refs.days.textContent = days < 10 ? `0${days}` : days;
        this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
        this.refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
            this.refs.seconds.textContent = secs < 10 ? `0${secs}` : secs;
        };
    };
    };

       
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 19, 2020'),
});


timer.timerStart();
