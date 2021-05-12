class Ball {

    constructor(x, y, d) {

        this.x = x
        this.y = y
        this.d = d
        this.r = d/2
        this.speedX = 2
        this.speedY = 2
    }

    display() {
        fill('#FF0000')
        circle(this.x,this.y,this.d)
        this.moveX()
        this.moveY()
        this.hasCollitionWithBoard()
    }

    moveX() { this.x += this.speedX }
    moveY() { this.y += this.speedY }

    hasCollitionWithBoard() {

        if (this.y-this.r <= 20) { this.speedY = 2 }
        if (this.y+this.r >= 500) { this.speedY = -2 }

        if (this.x-this.r <= 0) {this.speedX = 2}
        if (this.x+this.r >= 500) {this.speedX = -2}
    }

    hasCollitionWithPad(pad) {

        //RIGHT SIDE
        if (this.x-this.r <= pad.x+pad.dx && this.x-this.r >= pad.x && this.isPadYInsets(pad)) { 
            this.speedX = 2 
            return true
        }
            
        //LEFT SIDE
        if (this.x+this.r >= pad.x && this.x+this.r <= pad.x+pad.dx && this.isPadYInsets(pad)) { 
            this.speedX = -2 
            return true
        }
    }

    isPadYInsets(pad) {
        if ((this.y-this.r >= pad.y && this.y-this.r <= pad.y+pad.dy) ||
            (this.y+this.r >= pad.y && this.y+this.r <= pad.y+pad.dy)) {
            return true
        }
    }
}