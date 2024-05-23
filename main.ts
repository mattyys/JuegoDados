let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 6)
    if (numero == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (numero == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
    }
    if (numero == 3) {
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            # . # . .
            # # # . .
            `)
    }
    if (numero == 4) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (numero == 5) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . . . . .
            . # . # .
            # . # . #
            `)
    }
    if (numero == 6) {
        basic.showLeds(`
            . . . . #
            . # . # .
            # # # . .
            # # # # .
            # # # . .
            `)
    }
})
