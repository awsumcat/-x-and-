input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playTone(sound, music.beat(BeatFraction.Whole))
    sound += 5
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    music.playTone(sound, music.beat(BeatFraction.Whole))
    sound += -5
    basic.pause(100)
    basic.clearScreen()
})
let sound = 0
sound = 262
