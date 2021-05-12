class Pad {

    constructor(x, y, dx, dy) {

        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.ry = dy/2
        this.speed = 5
    }

    display() {
        fill('#FFFFFF')
        rect(this.x,this.y,this.dx,this.dy)
    }

    moveUP() { if (this.y > 0) { this.y -= this.speed } }
    moveDOWN() { if (this.y+this.dy < 500) { this.y += this.speed } } 
    
    aiMove(ball) {
        if ((ball.speedY < 0 && this.y > 0) ||
        (ball.speedY > 0 && this.y+this.dy < 500)) 
        { this.y = (ball.y+ball.r)-this.ry }
    }
}