let ball = new Ball(250,250,31)
let player = new Pad(475,210,15,80)
let aiPlayer = new Pad(10,210,15,80)

function setup() {
    
    createCanvas(500,500)
    
}

function draw() {
    
    background(0,0,0)

    player.display()
    aiPlayer.display()
    ball.display()

    if (keyIsDown(UP_ARROW)) { player.moveUP() }
    if (keyIsDown(DOWN_ARROW)) { player.moveDOWN() }

    fill('white');
    rect(0,0,500,20)

    fill('black');
    text('PONG',235,15);
    text('POINTS: ' + player.points,420,15);

    aiPlayer.aiMove(ball)
    ball.hasCollitionWithPad(aiPlayer)
    if (ball.hasCollitionWithPad(player)) {
        player.points += 13
    }
}