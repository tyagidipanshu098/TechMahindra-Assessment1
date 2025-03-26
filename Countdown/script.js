        let timer;
        let timeLeft = 0;
        let isRunning = false;

        function updateDisplay() {
            let mins = Math.floor(timeLeft / 60);
            let secs = timeLeft % 60;
            document.getElementById("display").innerText =
                String(mins).padStart(2, '0') + ":" + String(secs).padStart(2, '0');
        }

        function startTimer() {
            if (isRunning) return;
            let mins = parseInt(document.getElementById("minutes").value) || 0;
            let secs = parseInt(document.getElementById("seconds").value) || 0;
            timeLeft = mins * 60 + secs;
            if (timeLeft <= 0) return;
            isRunning = true;
            timer = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    isRunning = false;
                    alert("Time's up!");
                }
            }, 1000);
            updateDisplay();
        }

        function pauseTimer() {
            clearInterval(timer);
            isRunning = false;
        }

        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            timeLeft = 0;
            document.getElementById("display").innerText = "00:00";
        }