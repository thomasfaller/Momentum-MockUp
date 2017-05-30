function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    $('#current-time').html('<h1>' + h + ':' + m + '</h1>');
    var t = setTimeout(startTime, 500);
    console.log('<h1>' + h + ':' + m + '</h1>');
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();
