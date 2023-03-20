const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const canvasContainer = document.body

const gapX = 10
const mouse = { x: 0, y: 0 }

const field = {
    width: canvasContainer.offsetWidth,
    height: canvasContainer.offsetHeight,
    draw: function () {
        context.fillStyle = '#286047'
        context.fillRect(0, 0, this.width, this.height)
    }
}

const line = {
    width: 12,
    height: field.height,
    draw: function () {
        const x = (field.width / 2) - this.width / 2

        context.fillStyle = '#ccc'
        context.fillRect(x, 0, this.width, this.height)
    }
}

const leftPaddle = {
    x: gapX,
    y: 0,
    width: line.width,
    height: 140,

    _move: function () {
        const pos = mouse.y - this.height / 2
        this.y = pos > 0 ? pos : 0
    },

    draw: function () {
        context.fillRect(this.x, this.y, this.width, this.height)
        this._move()
    }
}

const rightPaddle = {
    x: field.width - line.width - gapX,
    y: 0,
    width: line.width,
    height: 140,

    _move: function () {
        this.y = ball.y - this.height / 2
    },

    draw: function () {
        context.fillRect(this.x, this.y, this.width, this.height)
        this._move()
    }
}

const ball = {
    x: 400,
    y: 400,
    radius: 15,
    speed: 5,
    dirX: 1,
    dirY: 1,

    _positions: function () {
        if (this.y > field.height - this.radius) {
            this._reverseY()
        }

        if (this.y == this.radius) {
            this._reverseY()
        }

        if (this.x + this.radius === rightPaddle.x && this.y >= rightPaddle.y && this.y <= rightPaddle.y + 140) {
            this._reverseX()
        }

        if (this.x <= line.width + this.radius && this.y >= leftPaddle.y && this.y <= leftPaddle.y + 140) {
            this._reverseX()
        }

        // pontuação
        if (this.x > field.width) {
            score.increasePlayer1()
            this._startPoint()
        }

        if (this.x < 0) {
            score.increasePlayer2()
            this._startPoint()
        }
    },

    _reverseX: function () {
        this.dirX *= -1
    },

    _reverseY: function () {
        this.dirY *= -1
    },

    _startPoint: function () {
        x = 400
        y = 400
    },

    _move: function () {
        this.x += this.speed * this.dirX
        this.y += this.speed * this.dirY
    },

    draw: function () {
        context.beginPath()
        context.fillStyle = '#fff'
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fill()

        this._positions()
        this._move()
    }
}

const score = {
    player1: 0,
    player2: 0,

    increasePlayer1: function () {
        this.player1 += 1
    },

    increasePlayer2: function () {
        this.player2 += 1
    },

    draw: function () {
        context.font = 'bold 72px Arial'
        context.textAlign = 'center'
        context.textBaseline = 'top'
        context.fillStyle = '#01341D'

        context.fillText(this.player1, field.width / 4, 50)
        context.fillText(this.player2, 3 / 4 * field.width, 50)
    }
}

function setup() {
    canvas.width = context.width = field.width
    canvas.height = context.height = field.height
}

function draw() {
    field.draw()

    context.fillStyle = '#ccc'

    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()

    ball.draw()
    score.draw('3', '3')
}

window.animateFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60)
        }
    )
})()

function main() {
    animateFrame(main)
    draw()
}

setup()
main()

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX
    mouse.y = e.pageY
})

// 2 players

// document.addEventListener('keypress', function (e) {
//     console.log(e)

//     if (e.key == 33) {
//         mouse.y += 5
//     }
// })

// document.onkeydown = (e) => {
//     e = e || window.event;

//     if (e.key === 'ArrowUp') {
//         rightPaddle.y -= 20
//     } else if (e.key === 'ArrowDown') {
//         rightPaddle.y += 20
//     }
// }
