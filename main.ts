let reading = 0
basic.forever(function () {
    let vochtigheid = 0
    if (vochtigheid < 50) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        basic.pause(1800000)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        basic.pause(5000)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 150) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P2)
        basic.pause(1800000)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P2)
        basic.pause(5000)
    }
})
basic.forever(function () {
    if (input.temperature() < 20) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
        basic.pause(1800000)
        ContinuousServo.turn_off_motor(DigitalPin.P1)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        basic.pause(5000)
    }
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 500) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P2, 80)
        basic.pause(3000)
        pins.analogWritePin(AnalogPin.P0, 0)
    }
    basic.pause(5000)
})
