print("hello world")
print("Rezi Rezesidze")

from turtle import *


#we want to paint a house

#step 1: draw a rectangle
speed(30)
width(7)
color("black")
forward(200)
left(90)

forward(250)
left(90)

forward(200)
left(90)

forward(250)
left(90)
#end of rectangle

#drawing a door

forward(70)
color("brown")
begin_fill()
left(90)
forward(120)    #height of the door
right(90)
forward(70)
right(90)
forward(120)
end_fill()

penup()
goto(200,250)
pendown()

#drawing a roof 
color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(20,215)
pendown()

#drawing a window
color("light blue")
begin_fill()
left(30)
forward(70)
left(90)
forward(60)
left(90)
forward(70)
left(90)
forward(60)
end_fill()

penup()
goto(180,215)
pendown()

color("light blue")
begin_fill()
forward(60)
left(90)
forward(70)
left(90)
forward(60)
left(90)
forward(70)
end_fill()

color("black")
left(90)
forward(60)
left(90)
forward(70)
left(90)
forward(60)
left(90)
forward(70)

penup()
goto(20,215)
pendown()


right(90)
forward(60)
right(90)
forward(70)
right(90)
forward(60)
right(90)
forward(70)

penup()
goto(0,-5)
pendown()

#drawing a grass
color("green")
begin_fill()
left(90)
forward(100000000)
left(90)
forward(1000)
left(90)
forward(1000000000)
left(90)
forward(1000)
left(90)
forward(1000000000)
end_fill()





exitonclick()