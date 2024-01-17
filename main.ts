input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.showString("Owen and sam and yodie")
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(2000)
    basic.clearScreen()
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showString("hello my name is micro bot. how are you today?")
    basic.showIcon(IconNames.House)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # # #
        . # . # .
        . # . # .
        `)
    music.play(music.stringPlayable("C5 A B G A F G E ", 93), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # # . .
        . . . # .
        . # # . .
        . . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # #
        . . . # .
        . . . # .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
