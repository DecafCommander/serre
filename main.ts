basic.forever(function () {
    if (input.lightLevel() > 150) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P2)
        basic.pause(1800000)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P2)
    }
})
basic.forever(function () {
    if (input.temperature() > 20) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
        basic.pause(1800000)
        ContinuousServo.turn_off_motor(DigitalPin.P1)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
    }
})
basic.forever(function () {
    let vochtigheid = 0
    if (vochtigheid > 50) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        basic.pause(1800000)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
    }
})
