const timer = (id, deadline) => {

    const getRemoveTime = function (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor((t / (1000 * 60 * 60 * 24)) % 24),
              hours = Math.floor((t / (1000 * 60 * 60)) % 60),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
         return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    };

    function zero(num) {
        if (num <= 9) {
            return `0${num}`
        } else {
            return num
        }
    }

    function showTime(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

              updateClock();
      
      
        function updateClock() {
            const t = getRemoveTime(endtime);
      
             if( t.total <= 0) {
                clearInterval(timeInterval);
                  }

            days.textContent = zero(t.days);
            hours.textContent =zero(t.hours);
            minutes.textContent = zero(t.minutes);
            seconds.textContent = zero(t.seconds);
              }

    }
    showTime(id, deadline);
    
}

export default timer;