input.onButtonPressed(Button.A, function () {
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.VERY_WET) || cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.WET)) {
        basic.showString("WET")
    }
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.DRY) || cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.VERY_DRY)) {
        basic.showString("DRY")
    }
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
basic.showNumber(0.7)
loops.everyInterval(10000, function () {
    if (Amount > 1) {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.VERY_WET) || cakLandSoil.ifMoisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.WET)) {
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
