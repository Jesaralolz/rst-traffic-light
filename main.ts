radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        Ambulance()
    }
})
function Sensor () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    Distance = pins.pulseIn(DigitalPin.P3, PulseValue.High) / 58
}
function crosswalk () {
    basic.pause(5000)
    Countdown = 24
    Green()
    for (let index = 0; index < 14; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # . # .
            # . . . #
            `)
        Countdown += -1
        basic.pause(550)
    }
    for (let index = 0; index < 10; index++) {
        basic.showNumber(Countdown)
        Countdown += -1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        if (Countdown == 0) {
            Yellow()
            basic.pause(3000)
            Red()
        }
    }
    Countdown = 0
}
function crosswalk_with_sound () {
    basic.pause(5000)
    Countdown = 24
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    Green()
    for (let index = 0; index < 14; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # . # .
            # . . . #
            `)
        Countdown += -1
        basic.pause(550)
    }
    for (let index = 0; index < 10; index++) {
        basic.showNumber(Countdown)
        Countdown += -1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        if (Countdown == 0) {
            Yellow()
            basic.pause(3000)
            Red()
        }
    }
    Countdown = 0
}
input.onButtonPressed(Button.A, function () {
    crosswalk()
})
function Distance_measure () {
    if (Distance <= 5) {
        Green()
        basic.pause(24000)
        Yellow()
        basic.pause(3000)
        Red()
    }
}
function Yellow () {
    strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Ambulance () {
    basic.pause(2000)
    Green()
    basic.pause(24000)
    Yellow()
    basic.pause(3000)
    Red()
}
input.onButtonPressed(Button.B, function () {
    crosswalk_with_sound()
})
function Green () {
    strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function Red () {
    strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
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
    radio.setGroup(1)
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let Countdown = 0
let Distance = 0
Red()
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A)) || !(input.buttonIsPressed(Button.B))) {
        for (let index = 0; index < 10; index++) {
            Sensor()
        }
        Distance_measure()
    }
})
