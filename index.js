const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const canvasContainer = document.querySelector('#ping-pong')

const field = {
    width: canvasContainer.offsetWidth,
    height: canvasContainer.offsetHeight * 2/3,
    draw: function () {
        context.fillStyle = '#286047'
        context.fillRect(0, 0, this.width, this.height)
    }
}

const line = {
    width: 15,
    height: field.height,
    draw: function () {
        const x = (field.width / 2) - this.width / 2

        context.fillStyle = '#ccc'
        context.fillRect(x, 0, this.width, this.height)
    }
}

const leftRacket = {
    width: 12,
    height: 140,
    draw: function () {
        context.fillRect(10, 50, this.width, this.height)
    }
}

const rightRacket = {
    width: 12,
    height: 140,
    draw: function () {
        const x = field.width - 10 - this.width
        context.fillRect(x, 50, this.width, this.height)
    }
}

const ball = {
    draw: function () {
        context.beginPath()
        context.arc(200, 300, 15, 0, 2 * Math.PI)
        context.fill()
    }
}

const score = {
    draw: function (player1, player2) {
        context.font = 'bold 72px Arial'
        context.textAlign = 'center'
        context.textBaseline = 'top'
        context.fillStyle = '#01341D'
    
        context.fillText(player1, field.width / 4, 50)
        context.fillText(player2, 3 / 4 * field.width, 50)
    }
}

function setup () {
    canvas.width = context.width = field.width
    canvas.height = context.height = field.height
}

function draw () {
    field.draw()

    context.fillStyle = '#ccc'

    line.draw()
    leftRacket.draw()
    rightRacket.draw()

    ball.draw()
    score.draw('3', '3')
}

setup()
draw()