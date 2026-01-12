Amount = 0
basic.show_leds("""
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . # # # .
    """)

def on_every_interval():
    if Amount > 1:
        basic.show_icon(IconNames.NO)
loops.every_interval(1000, on_every_interval)

def on_forever():
    global Amount
    if cakLandSoil.if_moisture(cakLandSoil.SoilPin.P0, cakLandSoil.Mlevel.VERY_WET):
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.UMBRELLA)
        cakLandPump.start_duration(cakLand.BoardSide.RIGHT, 60, 4)
        basic.clear_screen()
        Amount += 1
basic.forever(on_forever)
