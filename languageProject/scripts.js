let question = {
    title: 'gato',
    aleternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

let app = {
    start: function() {
        // get alternatives
        let alts = document.querySelectorAll('.alternative');
        console.log(alts);

        // for each to update the alts
        alts.forEach(function(element, index) {
            // Selecting a item and adding a event listener
            element.addEventListener('click', function() {
                // check correct answer
                console.log('check correct answer');
            });
        });

        // show first question
        this.showQuestion(question);
    },

    showQuestion: function(q) {
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
};

app.start();
