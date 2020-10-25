basic.showIcon(IconNames.Heart)
let streifen = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB_RGB)
streifen.setBrightness(128)
let start = 0
streifen.showColor(neopixel.colors(NeoPixelColors.Green))
streifen.showRainbow(1, 360)
basic.forever(function () {
    streifen.rotate(-1)
    streifen.show()
    basic.pause(100)
})
