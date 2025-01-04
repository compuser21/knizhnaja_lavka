$(document).ready(function () {
    let time = 10;
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

    // $('form').submit(function (e) { 
    //     e.preventDefault();
    //     const formData = {
    //         code: $('#input-code').val()
    //     }
    //     $.ajax({
    //         type: "POST",
    //         url: "/get-code",
    //         data: formData,
    //         dataType: 'json',
    //         success: function (response) {
    //             if (response.success) {
    //                 window.location.href('/library');
    //             } else {
    //                 if (response.errors.code) {
    //                     $("#error").text(response.errors.code);
    //                 }
    //             }
    //         },
    //         error: function (error) {
    //             $('#error').text(error);
    //         }
    //     }); 
    // });
});