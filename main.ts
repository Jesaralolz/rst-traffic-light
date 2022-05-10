function Activate_crosswalk () {
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
function Sensor () {
    let Distance = 0
    if (Distance <= 5) {
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
    } else {
        strip.setBrightness(255)
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range = strip.range(1, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        range = strip.range(2, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
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
function Emergency_vehicle () {
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
radio.onReceivedString(function (receivedString) {
    Emergency_vehicle()
})
input.onButtonPressed(Button.B, function () {
    Activate_crosswalk_with_sound()
})
function Activate_crosswalk_with_sound () {
    Countdown = 12
    strip.setBrightness(255)
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 7; index++) {
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
    for (let index = 0; index < 5; index++) {
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
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let Countdown = 0
Initial_Red()
basic.forever(function () {
	
})
