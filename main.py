def on_button_pressed_a():
    input2.append(0)
    music.play_tone(262, music.beat(BeatFraction.HALF))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if len(input2) == 0:
        basic.show_string("n/a")
    elif input2.shift() == 0:
        if len(input2) == 0:
            basic.show_string("e")
        elif input2.shift() == 0:
            if len(input2) == 0:
                basic.show_string("i")
            elif input2.shift() == 0:
                if len(input2) == 0:
                    basic.show_string("s")
                elif input2.shift() == 0:
                    basic.show_string("h")
                else:
                    basic.show_string("v")
            elif len(input2) == 0:
                basic.show_string("u")
            elif input2.shift() == 0:
                basic.show_string("f")
            else:
                pass
        elif len(input2) == 0:
            basic.show_string("a")
        elif input2.shift() == 0:
            if len(input2) == 0:
                basic.show_string("r")
            elif input2.shift() == 0:
                basic.show_string("l")
            else:
                pass
        elif len(input2) == 0:
            basic.show_string("w")
        elif input2.shift() == 0:
            basic.show_string("p")
        else:
            basic.show_string("j")
    elif len(input2) == 0:
        basic.show_string("t")
    elif input2.shift() == 0:
        if len(input2) == 0:
            basic.show_string("n")
        elif input2.shift() == 0:
            if len(input2) == 0:
                basic.show_string("d")
            elif input2.shift() == 0:
                basic.show_string("b")
            else:
                basic.show_string("x")
        elif len(input2) == 0:
            basic.show_string("k")
        elif input2.shift() == 0:
            basic.show_string("c")
        else:
            basic.show_string("y")
    elif len(input2) == 0:
        basic.show_string("m")
    elif input2.shift() == 0:
        if len(input2) == 0:
            basic.show_string("g")
        elif input2.shift() == 0:
            basic.show_string("z")
        else:
            basic.show_string("q")
    elif len(input2) == 0:
        basic.show_string("o")
    elif input2.shift() == 0:
        pass
    else:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    input2.append(1)
    music.play_tone(262, music.beat(BeatFraction.BREVE))
input.on_button_pressed(Button.B, on_button_pressed_b)

input2: List[number] = []
input2 = []
