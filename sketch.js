let ball = new Ball(250,250,31)
let player = new Pad(475,210,15,80)
let aiPlayer = new Pad(10,210,15,80)

function setup() {
    
    createCanvas(500,500)
    
}

function draw() {
    //background(113,0,113)
    background(0,0,0)
    ball.display()
    player.display()
    aiPlayer.display()

    if (keyIsDown(UP_ARROW)) {
        player.moveUP()
    }

    if (keyIsDown(DOWN_ARROW)) {
        player.moveDOWN()
    }

    aiPlayer.aiMove(ball)
    ball.hasCollitionWithPad(player)
    ball.hasCollitionWithPad(aiPlayer)
}