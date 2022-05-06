function Activate_crosswalk () {
    Number2 = 24
    strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    for (let index = 0; index < 14; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # . # .
            # . . . #
            `)
        Number2 += -1
        basic.pause(550)
    }
    for (let index = 0; index < 10; index++) {
        basic.showNumber(Number2)
        Number2 += -1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        if (Number2 == 5) {
            strip.setBrightness(255)
            range = strip.range(0, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            range = strip.range(1, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            range = strip.range(2, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
        }
        if (Number2 == 3) {
            strip.setBrightness(255)
            range = strip.range(0, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Red))
            range = strip.range(1, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            range = strip.range(2, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
}
function Sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Distance = pins.pulseIn(DigitalPin.P0, PulseValue.High) / 58
    basic.pause(2000)
    if (Distance < 5) {
        strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
        strip.setBrightness(255)
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(1, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(2, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(20000)
        strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
        strip.setBrightness(255)
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(1, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range = strip.range(2, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(2000)
        strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
        strip.setBrightness(255)
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range = strip.range(1, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(2, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(2000)
    }
}
function Initial_Red () {
    strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
input.onButtonPressed(Button.A, function () {
    Activate_crosswalk()
})
input.onButtonPressed(Button.B, function () {
    Activate_crosswalk_with_sound()
})
function Activate_crosswalk_with_sound () {
    Number2 = 24
    strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 14; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # . # .
            # . . . #
            `)
        Number2 += -1
        basic.pause(550)
    }
    for (let index = 0; index < 10; index++) {
        basic.showNumber(Number2)
        Number2 += -1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        if (Number2 == 5) {
            strip.setBrightness(255)
            range = strip.range(0, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            range = strip.range(1, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            range = strip.range(2, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
        }
        if (Number2 == 3) {
            strip.setBrightness(255)
            range = strip.range(0, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Red))
            range = strip.range(1, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            range = strip.range(2, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
}
let Distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let Number2 = 0
Initial_Red()
basic.forever(function () {
    Sensor()
})
