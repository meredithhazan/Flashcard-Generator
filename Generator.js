var Basic = require("./BasicCard.js");
var Cloze = require("./ClozeCard.js");

var inquirer = require("inquirer");

function start() {
	inquirer.prompt([
	{
		name: "cardType",
		type: "list",
		message: "What type of flashcard would you like to create?",
		choices: ["Basic", "Cloze Deletion"]
	} 
	]).then(function(answer) {
		if (answer.cardType === "Cloze Deletion") {
			createCloze();
		} else {
			createBasic();
		};	
	});
}				


function createCloze() {
			inquirer.prompt([
			{
				type: "input",
				name: "fullText",
				message: "Good choice! Type out the fact on which you want to be quizzed.  For instance, 'George Washington was the first POTUS.'"
			},
			{
				type: "input",
				name: "cloze",
				message: "Now type the word or phrase we should take out of that statement. For the example given, you'd type 'George Washington'."
			}	
			]).then(function(text) {
				var newCloze = new Cloze(text.fullText, text.cloze);
				newCloze.createPartial();
				newCloze.showCloze();
				confirm();
			});
}			
		
function createBasic() {			
	inquirer.prompt([
	{
		type: "input",
		name: "front",
		message: "Good choice!  Type out your quiz question here."
	}, 
	{
				type: "input",
				name: "back",
				message: "Now type the answer."
			}
			]).then(function(text) {
				var newBasic = new Basic(text.front, text.back);
				newBasic.showQuestion();
				newBasic.showAnswer();
				inquirer.prompt([
				{
					type: "confirm",
					name: "approved",
					message: "If that looks correct, would you like to save this?",
					default: true
				}	
				]).then(function(answer) {
					if (answer.approved === true) {
						saveCard();
					} else {
						console.log("Okay, let's try that again.");
						start();
					}
				});
			});			
}
	

start();



	inquirer.prompt([
	{
		type: "confirm",
		name: "approved",
		message: "If that looks correct, would you like to save this?",
		default: true
	}	
	]).then(function(answer) {
		if (answer.approved === true) {
			saveCard();
		} else {
			console.log("Okay, let's try that again.");
			start();
		}
	})


function saveCard() {
	var cardArray = [];
	inquirer.prompt([
	{
		type: "confirm",
		name: "final",
		message: "Would you like to save this card?",
		default: true
	}
	]).then(function(answer) {
		if (answer.final === true) {

		}
	})

}