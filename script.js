// Timer
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;
let timerSet = false;
let timerLimit = 0;

document.getElementById('startTimer').addEventListener('click', function() {
    if (!timerSet) {
        timerLimit = prompt("Enter the upper time limit (in seconds):");
        if (isNaN(timerLimit) || timerLimit === "") {
            alert("Please enter a valid time limit.");
            return;
        }
        timerSet = true;
    }

    if (!timerRunning && timerSeconds < timerLimit) {
        timerInterval = setInterval(updateTimer, 1000);
        timerRunning = true;
        this.textContent = 'Pause';
    } else {
        clearInterval(timerInterval);
        timerRunning = false;
        this.textContent = 'Resume';
    }
});

document.getElementById('stopTimer').addEventListener('click', function() {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('startTimer').textContent = 'Start';
});

document.getElementById('resetTimer').addEventListener('click', function() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSet = false;
    timerLimit = 0;
    timerSeconds = 0;
    document.getElementById('startTimer').textContent = 'Start';
    document.getElementById('timerDisplay').textContent = '00:00:00'; // Reset the display
});

function updateTimer() {
    if (timerSeconds < timerLimit) {
        timerSeconds++;
        const remainingTime = timerLimit - timerSeconds;
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        document.getElementById('timerDisplay').textContent =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('startTimer').textContent = 'Start';
    }
}

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;

document.getElementById('startStopwatch').addEventListener('click', function() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        stopwatchRunning = true;
        this.textContent = 'Pause';
    } else {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
        this.textContent = 'Resume';
    }
});

document.getElementById('stopStopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    document.getElementById('startStopwatch').textContent = 'Start';
});

document.getElementById('resetStopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    document.getElementById('startStopwatch').textContent = 'Start';
    stopwatchSeconds = 0;
    document.getElementById('stopwatchDisplay').textContent = '00:00:00'; // Reset the display
});

function updateStopwatch() {
    stopwatchSeconds++;
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatchDisplay').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
