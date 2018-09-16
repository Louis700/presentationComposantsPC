"use strict";

function cookieAlert() {
	if(document.cookie.indexOf("isAlertedForCookies=true") === -1) {
		alert("En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies pour vous assurer une logique événementielle entre les diffentes page du site !")
		setCookie("isAlertedForCookies", "true");
	}
}

function setCookie(name, value, duration, durationType=DurationType.DAY) {
	
	if(duration === undefined) {
		document.cookie = name + "=" + value;
		return;
	}
		
	let milisecondsAdded;

	if(durationType === DurationType.DAY)
		milisecondsAdded = duration*24*60*60*1000;
	else if(durationType === DurationType.HOUR)
		milisecondsAdded = duration*60*60*1000;
	else if(durationType === DurationType.MINUTE)
		milisecondsAdded = duration*60*1000;
	else 
		return error("duration isn't an instance of DurationType !");

	let date = new Date();
	date.setTime(date.getTime() + milisecondsAdded);
	document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";

}

