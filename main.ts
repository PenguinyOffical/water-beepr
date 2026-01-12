input.onButtonPressed(Button.A, function () {
    cakLandSoil.displayMoisture(cakLandSoil.SoilPin.P0)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    mL = 5 * COUNTER
    basic.showNumber(mL)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(COUNTER)
})
let Amount = 0
let mL = 0
let COUNTER = 0
COUNTER = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . # # # .
    `)
loops.everyInterval(10000, function () {
    if (Amount > 1) {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.VERY_WET)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Umbrella)
        cakLandPump.startDuration(cakLand.BoardSide.RIGHT, 60, 4)
        basic.clearScreen()
        Amount += 1
        COUNTER += 1
    }
})
loops.everyInterval(20000, function () {
    Amount = 0
})
