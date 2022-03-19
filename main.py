reading = 0

def on_forever():
    vochtigheid = 0
    if vochtigheid < 50:
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        basic.pause(1800000)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        basic.pause(5000)
basic.forever(on_forever)

def on_forever2():
    if input.light_level() < 150:
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P2)
        basic.pause(1800000)
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P2)
        basic.pause(5000)
basic.forever(on_forever2)

def on_forever3():
    if input.temperature() < 20:
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
basic.forever(on_forever3)

def on_forever4():
    global reading
    pins.analog_write_pin(AnalogPin.P1, 1023)
    reading = pins.analog_read_pin(AnalogPin.P0)
    pins.analog_write_pin(AnalogPin.P1, 0)
    led.plot_bar_graph(reading, 1023)
    if input.button_is_pressed(Button.A):
        basic.show_number(reading)
    if reading < 500:
        pins.servo_write_pin(AnalogPin.P2, 0)
        basic.pause(3000)
        pins.servo_write_pin(AnalogPin.P2, 80)
        basic.pause(3000)
        pins.analog_write_pin(AnalogPin.P0, 0)
    basic.pause(5000)
basic.forever(on_forever4)
