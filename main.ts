input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . # # # .
        # . # . #
        . # . # .
        `)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    basic.pause(500)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
    basic.pause(59000)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    basic.pause(500)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
})
loops.everyInterval(60000, function () {
    if (input.temperature() < 20) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        servos.P1.setAngle(90)
        basic.pause(59000)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
    }
    basic.showLeds(`
        . # . # .
        # # . # #
        . . # . .
        # # . # #
        . # . # .
        `)
})
