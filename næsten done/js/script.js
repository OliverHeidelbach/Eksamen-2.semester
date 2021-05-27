
    var countDate = new Date('December 17, 2021 00:00:00').getTime();

    function newYear() {
        var now = new Date().getTime();
        gap = countDate - now;


        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));


        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;

    }

    setInterval(function() {
        newYear();
    }, 1000)
