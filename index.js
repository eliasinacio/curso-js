const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const canvasContainer = document.querySelector('#ping-pong')

// const canvasPosX = canvasContainer.offsetTop
// const canvasPosY = canvasContainer.offsetLeft
const canvasWidth = canvasContainer.offsetWidth
const canvasHeight = canvasContainer.offsetHeight / 2

const lineWidth = 15
const racketWidth = 10

const field = {

}

function setup () {
    canvas.width = context.width = canvasWidth
    canvas.height = context.height = canvasHeight
}

function draw () {
    drawCanvas()
    
    context.fillStyle = '#ccc'

    drawMidLine(lineWidth)
    leftRacket(racketWidth)
    rightRacket(racketWidth)
    ball()

    score()
}

function drawCanvas () {
    context.fillStyle = '#286047'
    context.fillRect(0, 0, canvasWidth, canvasHeight)
}

function drawMidLine (lineWidth) {
    const x = (canvasWidth / 2) - lineWidth / 2
    context.fillRect(x, 0, lineWidth, canvasHeight)
}

function leftRacket (racketWidth) {
    context.fillRect(10, 50, racketWidth, 120)
}

function rightRacket (racketWidth) {
    const x = canvasWidth - 10 - racketWidth
    context.fillRect(x, 50, racketWidth, 120)
}

function ball () {
    context.beginPath()

    context.arc(200, 300, 15, 0, 2 * Math.PI)
    
    context.fill()
}

function score () {
    context.font = 'bold 72px Arial'
    context.textAlign = 'center'
    context.textBaseline = 'top'
    context.fillStyle = '#01341D'

    context.fillText('3', canvasWidth / 4, 50)
    context.fillText('3', 3 / 4 * canvasWidth, 50)
}

setup()
draw()