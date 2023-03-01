const time = document.getElementById("time");
const date = document.getElementById("date");

const days = ["Sun", "Mon", "Tue","Wen", "Thu", "Fri", "Sat"]

const watch = () => {
	const DATE = new Date()
	time.innerHTML = DATE.toLocaleTimeString()

	date.innerHTML = `${days[DATE.getDay()]} ${DATE.getDate()}/${DATE.getMonth()+1}/${DATE.getFullYear()}`
}

setInterval(watch, 1000)