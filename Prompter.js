    let name = prompt("What is my name? ").toLowerCase();
    if (name == "thomas") {
        console.log("They think my name is " + name + "They were right!");
        alert("You are correct!")
        document.write("You are correct!");
        score = score ++;
    } else {
        console.log("They think my name is " + name + "They were Wrong!");
        alert("You are wrong! ");
        document.write("You are wrong! ");
    }

    let colour = prompt("What is my favourite color? ").toLowerCase();
    if (colour == "green") {
        console.log("They think my favourite colour is " + colour + "They were right!");
        alert("You are correct!")
        document.write("You are correct!");
        score = score ++;
    } else {
        console.log("They think my favourite color is " + colour + "They were Wrong!");
        alert("You are wrong! ");
        document.write("You are wrong! ");
    }

    let locationOfResidence = prompt("Where do I live? ").toLowerCase();
    if (locationOfResidence == "liverpool") {
        console.log("They think live in " + locationOfResidence + "They were right!");
        alert("You are correct!")
        document.write("You are correct!");
        score = score ++;
    } else {
        console.log("They think live in  " + locationOfResidence + "They were Wrong!");
        alert("You are wrong! ");
        document.write("You are wrong! ");
    }

   let disability = prompt("I have a disability what is it? ").toLowerCase();
if (disability == "deaf") {
    console.log("They think my disability is " + disability + "They were right!");
    alert("You are correct!")
    document.write("You are correct!");
    score = score ++;
} else {
    console.log("They think my disability is  " + disability + "They were Wrong!");
    alert("You are wrong! ");
    document.write("You are wrong! ");
}


    let faveGame = prompt("What is my favourite game? ").toLowerCase();
    if (faveGame == "rl") {
        console.log("They think my favourite game is " + faveGame + "They were right!");
        alert("You are correct!")
        document.write("You are correct!");
        score = score ++;
    } else {
        console.log("They think my favourite game is  " + faveGame + "They were Wrong!");
        alert("You are wrong! ");
        document.write("You are wrong! ");
    }

    let correctAnswer = 7;
    let userGuess;
    let attempts = 0;

    while(attempts < 4) {
        userGuess = prompt("Guess a number between 1 and 10:");
        if(userGuess == correctAnswer) {
            alert("You guessed it! The correct answer was " + correctAnswer);
            score = score ++;
            break;
        } else if(userGuess < correctAnswer) {
            alert("Too low, try again!");
        } else {
            alert("Too high, try again!");
        }
        attempts++;
    }

    if(attempts === 4) {
        alert("You have used up all your attempts. The correct answer was " + correctAnswer);
    }

    let possibleAnswers = ["html", "javascript", "css"];
    let attemptsth = 6;
    let guess;
    
    console.log("Possible answers: " + possibleAnswers);

    while (attemptsth > 0) {
        guess = prompt("Guess a language I learnt through this course?").toLowerCase();
        if (possibleAnswers.includes(guess)) {
            alert("Congratulations! You guessed the correct answer.");
            score = score ++;
            break;
        } else {
            attemptsth--;
            alert("Incorrect. You have " + attemptsth + " attempts left. Please try again.");
        }
    }

    if (attemptsth === 0) {
        alert("Sorry, you have run out of attempts. The correct answers were: " + possibleAnswers);
    }

   alert("Your score was: " + score + "/7!");
    
