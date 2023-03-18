const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const canvasContainer = document.querySelector('#ping-pong')

const gapX = 10

const field = {
    width: canvasContainer.offsetWidth,
    height: canvasContainer.offsetHeight * 2 / 3,
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
    x: field.width - line.width - gapX,
    y: 0,
    width: line.width,
    height: 140,
    draw: function () {
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}

const rightPaddle = {
    x: gapX,
    y: 0,
    width: line.width,
    height: 140,
    draw: function () {
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}

const ball = {
    x: 200,
    y: 300,
    radius: 15,
    speed: 5,

    _move: function () {
        this.y += 1 * this.speed
        this.x += 1 * this.speed
    },
    
    draw: function () {
        context.beginPath()
        context.fillStyle = '#fff'
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fill()

        this._move()
    }
}

const score = {
    player1: 1,
    player2: 2,
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

function main () {
    animateFrame(main)
    draw()
}

setup()
main()