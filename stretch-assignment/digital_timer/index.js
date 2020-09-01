// Declare and set time to 0
let timeMs = 0;

function clockLogic() {
    // Clock logic

    // Check to see if the time has reached 10 seconds
    if (timeMs >= 10000) {
        // Stops the timer
        this.clearInterval(this.setInterval);
    } else {
        timeMs += 10; // Increment our timeMs counter
    }

    // Update our Display

    // Updating our display working up in digits. Self-reminder: there are 1000 ms in every second
    if (timeMs < 100) {
        document.querySelector('#msTens').textContent = String(timeMs).split("")[0];
    } else if (timeMs < 1000) {
        document.querySelector('#msTens').textContent = String(timeMs).split("")[1];
        document.querySelector('#msHundreds').textContent = String(timeMs).split("")[0];
    } else if (timeMs < 10000) {
        document.querySelector('#msTens').textContent = String(timeMs).split("")[2];
        document.querySelector('#msHundreds').textContent = String(timeMs).split("")[1];
        document.querySelector('#secondOnes').textContent = String(timeMs).split("")[0];
    } else if (timeMs === 10000) {
        document.querySelector('#msTens').textContent = String(timeMs).split("")[3];
        document.querySelector('#msHundreds').textContent = String(timeMs).split("")[2];
        document.querySelector('#secondOnes').textContent = String(timeMs).split("")[1];
        document.querySelector('#secondTens').textContent = String(timeMs).split("")[0];
        document.querySelector('.digits').style.color = "red";
    }
};

function startTimer() {
    // Setting an interval on the global widow for every 10 ms
    window.setInterval(clockLogic, 10);
}

startTimer();