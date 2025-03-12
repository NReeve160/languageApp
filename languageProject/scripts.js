let question = {
    title: 'gato',
    aleternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

let questions = [
    {
        title: 'gato',
        aleternatives: ['dog', 'cat', 'bird', 'fish'],
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
    start: function() {

        this.currentPosition = 0;

        // get alternatives
        let alts = document.querySelectorAll('.alternative');
        console.log(alts);

        console.log(this);

        // for each to update the alts
        alts.forEach(function(element, index) {
            // Selecting a item and adding a event listener
            element.addEventListener('click', function() {
                // check correct answer
                this.checkAnswer(index);
            }.bind(this));
        }.bind(this));

        // show first question
        this.showQuestion();
    },

    showQuestion: function(q) {

        //keep track of the current question
        this.currQuestion = q;

        // select dom element
        let titleDiv = document.getElementById('title');

        // Modify Dom
        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach(function(element, index) {
            element.textContent = q.aleternatives[index];
        })
    },

    checkAnswer: function(userSelected) {
        if(this.currQuestion.correctAnswer == userSelected) {
            //correct
            console.log('Correct Answer');
        } else
        //incorrect
        console.log('Incorrect Answer');

        //increase position
        this.increasePosition();
        //show next question 
        this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function() {
        this.currPosition++;

        if(this.currPosition == question.length) {
            this.currPosition = 0;
        }
    }
};

app.start();
