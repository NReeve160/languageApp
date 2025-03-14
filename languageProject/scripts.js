let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
]

let app = {

    //funciton that starts the program
    start: function() {

        this.currentPosition = 0;
        this.score = 0;

        // get alternatives
        let alts = document.querySelectorAll('.alternative');

        // for each to update the alts
        alts.forEach((element, index) => {

            element.addEventListener('click', () => {
                // check correct answer
                this.checkAnswer(index);
            });
        });

        // show stats at start
        this.updateStats();
        // show first question
        this.showQuestion(questions[this.currentPosition]);
    },

    showQuestion: function(q) {
        // show question title
        let titleDiv = document.getElementById('title');
        console.log(titleDiv);
        console.log(q);

        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];        
        });
    },

    checkAnswer: function(userSelected) {

        let currQuestion = questions[this.currentPosition];

        if(currQuestion.correctAnswer == userSelected) {
            //correct
            console.log('Correct Answer');
            this.score++;

            //show that the answer is correct
            this.showResult(true);
        } else {
            //incorrect
            console.log('Incorrect Answer');
            this.showResult(false);

            //refresh the stats
            this.updateStats();

            //increase position
            this.increasePosition();
        }
        //show next question 
        this.showQuestion(questions[this.currentPosition]);
    },

    increasePosition: function() {
        this.currentPosition++;

        if(this.currentPosition == questions.length) {
            this.currentPosition = 0;
        }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';

        //checks
        if(isCorrect == true) {
            result = 'Correct Answer!';
        } else {
            result = 'Wrong Answer!';
        }

        resultDiv.textContent = result;
    }
};

app.start();
