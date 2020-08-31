const transferToGoogle = () => {
    let content = document.querySelector('input.searchField').value;
    window.open(`https://www.google.com/search?q=${content}`, '_self')
}

const postLoad = () => {
    const clockEle = document.querySelector('.clock');
    const docTitle = document.querySelector('title');

    const updateTime = () => {
        // SECTION: Clock
        let now = new Date();
        let times = new Array(now.getHours(), now.getMinutes(), now.getSeconds());
        let newTimes = new Array();
        times.forEach(time => {newTimes.push(String(time).padStart(2, '0'))})
        clockEle.innerHTML = newTimes.join(':');

        //SECTION: Title Greeting
        let hour = now.getHours();
        let greetTime;
        if (hour < 12) {
            greetTime = 'Morning';
        } else if (hour >= 12 && hour <=18) {
            greetTime = 'Afternoon';
        } else {
            greetTime = 'Evening';
        }
        docTitle.innerHTML = `Good ${greetTime}, Nick`;
    }

    const delegateSubmission = (event) => {
        if (event.keyCode == 13) {
            transferToGoogle();
        }
    }


    document.addEventListener('keydown', delegateSubmission);
    setInterval(updateTime, 1000);
    updateTime();
}

document.addEventListener('DOMContentLoaded', postLoad);
