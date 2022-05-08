let questions = {
	q1: ["Is the CSS a declarative languages?", "y"],
	q2: ["Is VueJs a framework ? ", "y"],
	q3: ["Are there any difference between == and === ?", "y"],
	q4: ["Is const assigned again ?", "n"],
	q5: ["Is JS only web's language?", "n"],
	q6: ["Do you know Alan Turing?", "y"],
	q7: ["Can you use debugger in JavaScript ?", "y"],
}

let score = 0;

let questionIndex = 1;



function startGame () {
	let showScore = document.getElementById('score');
	let showQuestions = document.getElementById('showQuestions');
	
	if(questionIndex <= Object.keys(questions).length) {
		showScore.innerHTML = `Score: ${score}`
	showQuestions.innerHTML = questions["q" + questionIndex][0]
}  else {
	showScore.innerHTML = `Final Score: ${score} out of 7`;
	showQuestions.innerHTML = `Game Over! Please wait just 3 second. The game will start automatically`

	setTimeout(resetGame, 3000)
}
	
}

function resetGame () {
	score = 0;
	questionIndex = 1;
	startGame()
}

startGame()



window.onkeydown = function (event) {


 	if(questionIndex - 1 === Object.keys(questions).length ) {
 	return false
 	}

	let trueKeys = event.key.toLowerCase()
	

		if( trueKeys === "y" || trueKeys === "n") {

		if( trueKeys === questions["q" + questionIndex][1]) {
			alert("correct choice");
			score += 1
		} else {
			alert("hmm nope")
		}
		questionIndex += 1
		setTimeout(startGame, 300)
	} else {
		return
	}

	

	

	
}