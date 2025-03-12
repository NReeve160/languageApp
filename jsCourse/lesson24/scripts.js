let player = {
    health: 100,
    fun: 0,
    eatApple: function() {
        console.log('eat apple');
        this.health = this.health + 10;
        console.log(this.health);
    },
    eatCandy: function() {
        console.log('eat candy');
        this.health -= 10;
        this.fun += 10;
    },
    play: function() {
        console.log('letsplay');
        this.fun += 10;
    },
    eat: function(food) {
        if (food == 'apple') {
            this.health += 10;
        }
        else {
            this.health -= 10;
            this.fun += 10;
        }
    },
};

player.eatApple();
player.eatCandy();
player.play();
console.log(player);

player.eat('apple');
player.eat('candy');
console.log(player);
console.log(player);