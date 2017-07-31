


function Flash_cloze (text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

Flash_cloze.prototype.showQuestion = function() {
	var partial = this.text.replace(this.cloze, "...");
	console.log("Front: " + partial);
}

Flash_cloze.prototype.showAnswer = function() {
	console.log("Back: " + this.cloze);
}

Flash_cloze.prototype.showFullText = function() {
	console.log(this.text);
}

Flash_cloze.prototype.printCard = function() {
	this.showQuestion();
	this.showAnswer();
}

var card1 = new Flash_cloze("80s popstars Duran Duran was made up of five members, three of whom shared the last name 'Taylor', although none were related.", "Duran Duran");




module.exports = Flash_cloze;