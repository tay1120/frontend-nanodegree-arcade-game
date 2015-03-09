// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // Add enemy image
    this.sprite = 'images/enemy-bug.png';
    // Place enemy on board
    this.y = 70;
    this.x = -105;

    // Add enemy placement across the stone blocks
    this.isPlacement = [60, 150, 230];

    // Add enemy speed
    this.speed = (Math.random() *  (400-100)) + 50;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

    // Randomize enemy location and reload more enemies
    if (this.x > 500) {
        this.x = -125;
        this.y = this.isPlacement[Math.floor(Math.random() * this.isPlacement.length)];;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Add player class
var Player = function() {
    // Add image for player
    this.sprite = 'images/char-horn-girl.png';
    // Place player on board
    this.x = 200;
    this.y = 400;
}

// Add player update
Player.prototype.update = function(dt) {
}

// Add player render
Player.prototype.render = function() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Add player handleInput
Player.prototype.handleInput = function(key) {
    if (key === "up") {
        if (this.y - 83 >= -15) {
            this.y = this.y - (83);
        }
    } else if (key === "down") {
        if (this.y + 83 <= 400) {
            this.y = this.y + (83);
        }
    } else if (key === "right") {
        if (this.x + 83 <= 402) {
            this.x = this.x + (101);
        }
    } else {
        if (this.x - 83 >= -2) {
            this.x = this.x - (101);
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var Enemy1 = new Enemy;
var Enemy2 = new Enemy;
var Enemy3 = new Enemy;
var Enemy4 = new Enemy;
var Enemy5 = new Enemy;
var allEnemies = [Enemy1,Enemy2,Enemy3,Enemy4,Enemy5];

// Place the player object in a variable called player
var player = new Player;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
