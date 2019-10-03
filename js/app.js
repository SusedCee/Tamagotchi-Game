// assignment info https://git.generalassemb.ly/WebDev-Connected-Classroom/Tomagotchi-Mini-Project/blob/master/README.md

window.onload = function() { //more info about onload event https://www.w3schools.com/jsref/event_onload.asp

	class Tamagotchi { //made a class
		constructor(){
			this.name = name; //whatever name the user inputs
		}
	}

	//create pet and ask for player input for name More info https://www.universalclass.com/articles/computers/javascript/user-input-and-output-in-javascript.htm
	let pet = new Tamagotchi(); //()user input pass into constructor above
		var animalName = prompt("Press the buttons to feed, put to bed and play with your Tamagotchi. If any of his stats reach 0 or 10 he dies. Name your tamagotchi", "");
		if (animalName != null) {	

		document.getElementById("welcome").innerHTML="Take care of " + animalName;
	}

	//All variables. More info about intervals https://www.w3schools.com/jsref/met_win_setinterval.asp
	var hunger = 10;
	var clock1 = setInterval(hungerDown, 3000); //1000 is 1 second => every 3 seconds lower 
	var sleep = 10;
	var clock2 = setInterval(sleepDown, 3000); //1000 is 1 second => every 3 seconds lower
	var play = 10;
	var clock3 = setInterval(boredomDown, 3000); //1000 is 1 second => every 3 seconds lower
	var age = 0
	var clock4 = setInterval(getOld, 10000) //1000 is 1 second => every minute add 1 year to its age
	var changeBar = setInterval(updateBar, 300) //update the bars every 300 millisecond
	// var gameOver = 0;

	//buttons for the player More info https://www.w3schools.com/jsref/event_onclick.asp
	document.getElementById("btnHunger").addEventListener("click", fillHunger);
	document.getElementById("btnSleep").addEventListener("click", fillSleep);
	document.getElementById("btnPlay").addEventListener("click", fillPlay);

	//3 if statements for the buttons
	function fillHunger(){
		if (hunger < 10 && hunger != 0) {
			hunger += 1;
		} else {     //if (hunger === 0)
			hunger += 1;
			gameOverCheck();//might not need
		}
	}

	function fillSleep(){
		if (sleep < 10 && sleep != 0) {
			sleep += 1;
		} else  { // if (sleep === 0)
			sleep += 1;
			gameOverCheck();//might not need
		}
	}	

	function fillPlay() {
		if (play < 10 && play != 0) {
			play += 1;
		} else  {   // if (play === 0)
			play += 1;
			gameOverCheck();//might not need
		}
	}

	// Hunger goes down
	function hungerDown() {
		if (hunger === 0) {
			gameOverCheck();
		} else {
			hunger--;
			updateBar()
		}
	}

	// Sleep goes down
	function sleepDown() {
		if (sleep === 0) {
			gameOverCheck();
		} else { 
			sleep--;
			updateBar()
		}
	}

	// Boredom goes down
	function boredomDown() {
		if (play === 0) {
			gameOverCheck();
		} else { 
			play--;
			updateBar()
		}
	}

	//Adds 1 age every ten seconds (follow timer)
	function getOld() { 
		if (age >= 10) {
			gameOverCheck();
		} else {
			age++;
			updateBar()
			transform();
		}
	}

	//Transform at five to 9 years old
	function transform() {
		if (age >=5 && age <=9){
			document.getElementById("stitch").src = "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/6/6d/626.png/revision/latest?cb=20130422122148";
		}
	} 

	//Clears All Intervals
	function clearAllIntervals() {
		clearInterval(clock1);
		clearInterval(clock2);
		clearInterval(clock3);
		clearInterval(clock4);
	}

	//Update the bars functions
	function updateBar() {
		document.getElementById("HungerBar").value = hunger;
		document.getElementById("SleepBar").value = sleep;
		document.getElementById("PlayBar").value = play;
		document.getElementById("OldBar").value = age;
	}

	//Game Over Conditions
	function gameOverCheck(){
		if (hunger === 0){
			document.getElementById("stitch").src = "https://i.gifer.com/3iCR.gif";
			alert("You didn't feed " + animalName + " enough food, game over!");
			$(".movingStitch").removeClass();  //Moving images https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
			clearAllIntervals()
		} else if (hunger >=10){
			document.getElementById("stitch").src = "https://i.gifer.com/3iCR.gif";
			alert("You fed " + animalName + " too much food, game over!");	
			$(".movingStitch").removeClass();
			clearAllIntervals()		
		} else if (sleep === 0){
			document.getElementById("stitch").src = "https://i.gifer.com/3iCR.gif";
			alert(animalName + " didn't get enough rest, game over!");	
			$(".movingStitch").removeClass();
			clearAllIntervals()		
		} else if (sleep >= 10){
			document.getElementById("stitch").src = "https://i.gifer.com/3iCR.gif";
			alert(animalName + " got too much rest, game over!");	
			$(".movingStitch").removeClass();
			clearAllIntervals()
		} else if (play === 0){
			document.getElementById("stitch").src = "https://i.gifer.com/3iCR.gif";
			alert(animalName + " died of boredom, game over!");	
			$(".movingStitch").removeClass();
			clearAllIntervals()		
		} else if (play >= 10){
			document.getElementById("stitch").src = "https://i.gifer.com/3iCR.gif";
			alert("You made " + animalName + " play too much, game over!");	
			$(".movingStitch").removeClass();
			clearAllIntervals()		
		} else if (age >= 10) {
			document.getElementById("stitch").src = "https://i.gifer.com/3iCR.gif";
			alert(animalName + " lived it's best life, but has now died of age.")
			$(".movingStitch").removeClass();
			clearAllIntervals()
		}
	}
}


