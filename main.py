numero = 0

def on_gesture_shake():
    global numero
    numero = randint(1, 6)
    if numero == 1:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            """)
    if numero == 2:
        basic.show_leds("""
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            """)
    if numero == 3:
        basic.show_leds("""
            . # # # .
            # # # # #
            . . # . .
            # . # . .
            # # # . .
            """)
    if numero == 4:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    if numero == 5:
        basic.show_leds("""
            . # . # .
            # . # . #
            . . . . .
            . # . # .
            # . # . #
            """)
    if numero == 6:
        basic.show_leds("""
            . . . . #
            . # . # .
            # # # . .
            # # # # .
            # # # . .
            """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
