radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("Yaw", Math.map(input.acceleration(Dimension.X), -1023, 1023, -100, 100))
    radio.sendValue("Speed", Math.map(input.acceleration(Dimension.Y), -1023, 1023, 100, -100))
})
