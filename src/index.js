const messages = [
	"Vale",
	"Ana",
	"Nicolas",
	"Marcelo",
	"Juan",
	"Alejandra",
	"Ron",
	"Scarlett"
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random() * messages.length)];
	console.log(message);
};

module.exports = { randomMsg };
