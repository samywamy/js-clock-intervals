function init() {
    setInterval(showAllClocks, 1000);
}


function showTime() {
	var dateObj = new Date();
	document.getElementById("clock").innerHTML = dateObj.toLocaleTimeString();
}

function showTimeManual() {
	var dateObj = new Date();
	var hour = dateObj.getHours();
	var minute = dateObj.getMinutes();
	var second = dateObj.getSeconds(); 	
	document.getElementById("clock").innerHTML = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second);
}

function addZero(num) {
	if (num < 10) {
		num = "0" + num;
	}
	return num;
}

function showTimeAmPm() {
	var dateObj = new Date();
	var hour = dateObj.getHours();
	var minute = dateObj.getMinutes();
	var second = dateObj.getSeconds();
	var ampmString = "AM";
	if (hour >= 12) {
		ampmString = "PM";
		if (hour > 12) {
			hour = hour - 12;
		} 
	} else if (hour === 0) {
		hour = 12;
	}
	document.getElementById("clock").innerHTML = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second) + " " + ampmString;
}

function showAllClocks() {
    var dateObj = new Date();
    showAnalog(dateObj, 0);
    dateObj.setTime(dateObj.getTime() + 4 * 60 * 60 * 1000);
    showAnalog(dateObj, 1);
    dateObj.setTime(dateObj.getTime() + (-9) * 60 * 60 * 1000);
    showAnalog(dateObj, 2);
}

function showAnalog(dateObj, flag) {
	var hour = dateObj.getHours();
	var minute = dateObj.getMinutes();
	var second = dateObj.getSeconds();
	document.getElementById("hour" + flag).style.transform = "rotate(" + hourRotation(hour, minute) + "deg)";
	document.getElementById("minute" + flag).style.transform = "rotate(" + minuteSecondRotation(minute) + "deg)";
	document.getElementById("second" + flag).style.transform = "rotate(" + minuteSecondRotation(second) + "deg)";
}

function hourRotation(hour, minutes) {
	return (hour * 360/12) + (360/12)*(minutes/60);
}

function minuteSecondRotation(num) {
	return num * 360/60;
}






