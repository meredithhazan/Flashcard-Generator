function Flash_basic (front, back) {
	this.front = front;
	this.back = back;
}

Flash_basic.prototype.showQuestion = function () {
	console.log("Front text: " + this.front);
}

Flash_basic.prototype.showAnswer = function () {
	console.log("Back text: " + this.back);
}

var card1 = new Flash_basic("Which '80s band was made up of five members, three of whom shared the last name 'Taylor', although none were related?", "Duran Duran");

//card1.showQuestion();
//card1.showAnswer();

module.exports = Flash_basic;