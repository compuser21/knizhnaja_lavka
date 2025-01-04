$(document).ready(function () {
    let time = 300;
    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    setInterval(() => {
        if (time != 0) {
            time--;
        }
        $('#timer').text(formatTime(time)); 
    }, 1000);

    setTimeout(() => {
        $('#send-code-again').removeAttr('disabled')
    }, time * 1000);
});
