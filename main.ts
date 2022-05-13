function Activate_crosswalk () {
    basic.pause(5000)
    Countdown = 24
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . # . #
        . # # # .
        # . # . .
        . # . # .
        # . . . #
        `)
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
        if (Countdown == 5) {
            strip.setBrightness(255)
            range = strip.range(0, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            range = strip.range(1, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            range = strip.range(2, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
        }
        if (Countdown == 3) {
            Initial_Red()
        }
    }
    Countdown = 0
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        Ambulance()
    }
})
function Sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.showNumber(Distance)
    basic.pause(2000)
    if (Distance < 5.1) {
        strip.setBrightness(255)
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(1, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(2, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(20000)
        strip.setBrightness(255)
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(1, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range = strip.range(2, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(2000)
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
input.onButtonPressed(Button.A, function () {
    Activate_crosswalk()
})
function Ambulance () {
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(20000)
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(2000)
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(2000)
    Initial_Red()
}
input.onButtonPressed(Button.B, function () {
    Activate_crosswalk_with_sound()
})
function Activate_crosswalk_with_sound () {
    basic.pause(5000)
    basic.showLeds(`
        . . # . #
        . # # # .
        # . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    Countdown = 24
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
        if (Countdown == 5) {
            strip.setBrightness(255)
            range = strip.range(0, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
            range = strip.range(1, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            range = strip.range(2, 1)
            range.showColor(neopixel.colors(NeoPixelColors.Black))
        }
        if (Countdown == 3) {
            Initial_Red()
        }
    }
    Countdown = 0
}
let Distance = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let Countdown = 0
Initial_Red()
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            Sensor()
        }
    }
})
