
//var basic = require("./BasicCard.js");

function Flash_cloze (text, cloze) {
	this.text = fullText;
	this.cloze = cloze;
}

Flash_cloze.prototype.showPartial = function() {
	var partial = this.text.replace(this.cloze, "...");
	console.log(partial);
}

var card1 = new Flash_cloze("80s popstars Duran Duran was made up of five members, three of whom shared the last name 'Taylor', although none were related.", "Duran Duran");
card1.showPartial();
console.log(card1.text);
console.log(card1.cloze);



module.exports = Flash_cloze;