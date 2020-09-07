let font

function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")
}

function setup() {
createCanvas(500, 500)
}

function draw () {
    background("#ecf072")

    fill("#ef5236")
    textFont(font)
    textSize(400)
    textAlign(CENTER, CENTER)
    text("01", width / 2, height / 2)
}