def on_pin_pressed_p2():
    basic.show_leds("""
        . # . # .
                # . # . #
                . # # # .
                # . # . #
                . # . # .
    """)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    basic.pause(500)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
    basic.pause(59000)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    basic.pause(500)
    ContinuousServo.turn_off_motor(DigitalPin.P0)
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_every_interval():
    if input.temperature() < 20:
        basic.show_leds("""
            # . # . #
                        . # # # .
                        # # # # #
                        . # # # .
                        # . # . #
        """)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
        servos.P1.set_angle(90)
        basic.pause(59000)
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
        basic.pause(500)
        ContinuousServo.turn_off_motor(DigitalPin.P0)
    basic.show_leds("""
        . # . # .
                # # . # #
                . . # . .
                # # . # #
                . # . # .
    """)
loops.every_interval(60000, on_every_interval)
