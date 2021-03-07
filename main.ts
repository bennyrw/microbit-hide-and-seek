/**
 * Button presses on one microbit cause a sound on others.
 * Get a friend to hide one microbit nearby then use another microbit to find it!
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . . . . .
            `)
        music.playTone(330, music.beat(0.25))
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `)
        music.playTone(392, music.beat(0.25))
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        music.playTone(262, music.beat(0.5))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(99)
