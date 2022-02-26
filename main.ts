input.onButtonPressed(Button.A, function () {
    input2.push(0)
    music.playTone(262, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.AB, function () {
    if (input2.length == 0) {
        basic.showString("n/a")
    } else if (input2.shift() == 0) {
        if (input2.length == 0) {
            basic.showString("e")
        } else if (input2.shift() == 0) {
            if (input2.length == 0) {
                basic.showString("i")
            } else if (input2.shift() == 0) {
                if (input2.length == 0) {
                    basic.showString("s")
                } else if (input2.shift() == 0) {
                    basic.showString("h")
                } else {
                    basic.showString("v")
                }
            } else if (input2.length == 0) {
                basic.showString("u")
            } else if (input2.shift() == 0) {
                basic.showString("f")
            } else {
            	
            }
        } else if (input2.length == 0) {
            basic.showString("a")
        } else if (input2.shift() == 0) {
            if (input2.length == 0) {
                basic.showString("r")
            } else if (input2.shift() == 0) {
                basic.showString("l")
            } else {
            	
            }
        } else if (input2.length == 0) {
            basic.showString("w")
        } else if (input2.shift() == 0) {
            basic.showString("p")
        } else {
            basic.showString("j")
        }
    } else if (input2.length == 0) {
        basic.showString("t")
    } else if (input2.shift() == 0) {
        if (input2.length == 0) {
            basic.showString("n")
        } else if (input2.shift() == 0) {
            if (input2.length == 0) {
                basic.showString("d")
            } else if (input2.shift() == 0) {
                basic.showString("b")
            } else {
                basic.showString("x")
            }
        } else if (input2.length == 0) {
            basic.showString("k")
        } else if (input2.shift() == 0) {
            basic.showString("c")
        } else {
            basic.showString("y")
        }
    } else if (input2.length == 0) {
        basic.showString("m")
    } else if (input2.shift() == 0) {
        if (input2.length == 0) {
            basic.showString("g")
        } else if (input2.shift() == 0) {
            basic.showString("z")
        } else {
            basic.showString("q")
        }
    } else if (input2.length == 0) {
        basic.showString("o")
    } else if (input2.shift() == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    input2.push(1)
    music.playTone(262, music.beat(BeatFraction.Breve))
})
let input2: number[] = []
input2 = []
