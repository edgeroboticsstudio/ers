---
title: "QuadCopter Basics"
date: 2025-07-30
tags: blog
layout: layout.njk
thumbnail: /static/QuadCopter Basics.png
excerpt: 

 In this blog, we begin with a simple wooden stick and a rotor, exploring thrust and lift in the easiest way to understand. Step by step, the design evolves adding more motors, changing positions, and unlocking new types of movement. From hovering to moving in all directions, we watch tricopters, quadcopters, and even hexacopters take shape. By the end, you’ll see how these simple experiments grow into the flying machines we know as drones today. 

---


<section style="background-color: #004D40; color: white; padding: 4rem 10rem; ">
   
 <h2 style="color: #66ccff;"> QuadCopter Basics  </h2>

 <p style="color: #66ccff;"> <b> Understanding Thrust and Lift Using a Simple Toy </b> </p>
    
  Have you ever played with one of those spinning dragonfly toys the kind where you rub the stick between your hands and it flies up into the air ? It may seem like a simple toy, but it’s actually a great way to understand how flying machines like drones or even rockets work.

  <p style="color: #66ccff;"> <b>Why Does It Fly? </b></p>
   
  When you spin the toy by rubbing the stick quickly between your hands, the rotor (the propeller part) starts spinning fast. This spinning pushes air downward. just like how you feel a push in the opposite direction when you push something  the toy feels a push upward. This is called thrust. If this upward thrust is stronger than the toy’s weight (which pulls it down), the toy lifts off the ground and flies into the air.
  
  <img src="Thumbnail.png" alt="Thumbnail" class="blog-image">

  <p style="color: #66ccff;"> <b> Visualizing Thrust and Rotation </b></p>

  Imagine the rotor as a fan. When it spins, it throws air downward. That air moving down is like an invisible stream pushing against the air below. The toy flies upward as a reaction to that downward push just like jumping off a trampoline pushes you up when you push it down.

  Also, because the rotor is spinning, you might notice the toy not only flies up but also spins in the air. That spin happens because of how you're launching it and how the blades are shaped. So in this one simple motion - spinning and rising.

  we get to see two important flight ideas at work: <b class = "bold">rotation and thrust</b>.

  <p style="color: #66ccff;"><b> Let’s Extend the Idea: Motor Mounted on a Stick </b></p>

  Imagine a wooden stick with a small motor mounted right in the middle (CG). The motor has a propeller attached to it. When the motor spins, the propeller starts to push air downward - just like the toy dragonfly.
  As the speed of the rotor increases, the structure starts lifting. Eventually, there’s a point where the upward thrust equals the downward weight of the stick and motor. At this moment, the structure enters a state of hover.it floats in place, with net force being zero.

  If somehow we control the thrust produced by the motor, we can also change the height of the whole structure. And this can be achieved simply by changing the motor’s speed.

 <p style="color: #66ccff;"><b> Real-World Application: From Toy to Hovering Aircraft </b></p>

  The idea we just discussed a stick with a spinning motor that lifts off the ground helps us understand how flying machines work. But in real life, things can be more complex.

  <figure class ="blog-video">
    <video controls src="/static/Single Rotor AirCraft.mp4" type="video/mp4" style="width:100%" > </video>
  </figure>
  
  <h7><a href="https://youtu.be/aRKlpoirrA4?si=WCc_Sf711W1uzRAS"> credit</a></h7>

  Take the aircraft in the above clip, for example. It looks like it's just flying straight up by using a motor to push air  down, which lifts it up just like our stick example. But it's doing more than that. The motor gives it the power to fly, but it also has small moving parts that can change the direction of the force. By carefully changing this direction, the aircraft can move up, down, left, or right and even stay still in the air.

  So, while the basic idea is the same, real flying machines use smarter ways to stay balanced and go where they need to.
  
  <b style="color: #66ccff;">Let’s Push It Further: Shifting the Rotor to One End </b>

  Now that we’ve built some confidence understanding thrust and lift, let’s try something new.
  What if we move the rotor (the spinning motor with the propeller) from the middle of the stick to one end of the stick ?

  Let’s imagine the setup:
  
  <p>   &nbsp &nbsp &nbsp     •	We still have the same wooden stick.</p>
  <p>   &nbsp &nbsp &nbsp     •	The motor and propeller are now mounted at one end instead of the center.</p>
  <p>   &nbsp &nbsp &nbsp     •	The other end is just the empty part of the stick.</p>

  Now when we start the motor, something interesting happens. What Happens Now ? 

  The rotor still pushes air downward, so it still produces thrust. But since it’s off-center, that thrust doesn’t just lift the stick it also causes the stick to rotate or tilt around its center. It’s like holding a ruler at one end and pressing down hard with one finger on the other it starts to spin or tip, not just move straight.

  This introduces another concept called <b  class = "bold">torque</b> - a turning effect caused by a force acting at a distance from the center.
  
  <b style="color: #66ccff;">From Idea to Flying Machine: Making the Structure Fly </b>

  So far, we’ve played with simple ideas - putting a motor in the center of a stick, or moving it to one end. But if we try to fly that off-center stick, it spins and wobbles. It doesn’t fly in a stable way.

  <figure class ="blog-video">
    <video controls src="/static/Monospinner.mp4" type="video/mp4" style="width:100%" > </video>
  </figure>
  
  <h7><a href="https://youtu.be/P3fM6VwXXFM?si=ZVeArS30P9nvCOdg"> credit</a></h7>
  
  Now look at structure shown in the the above clip. This structure was designed based on the same idea, but with smart modifications to make it actually fly.
  <p style="color: #66ccff;"><b> Why Wouldn’t the Original Fly ? </b></p>

  If you mount a motor at one end of a stick and try to fly it:

  <p>   &nbsp &nbsp &nbsp      •	It lifts unevenly.
  <p>   &nbsp &nbsp &nbsp      •	It spins uncontrollably (like a pinwheel).
  <p>   &nbsp &nbsp &nbsp      •	The center of gravity and the thrust are not aligned.
  
  <p style="color: #66ccff;"><b>What’s Different in This Modified Design ? </p></b>

  Here’s what’s been changed to make it flyable:
 <p>   &nbsp &nbsp &nbsp       •	The structure is triangular, spreading out the weight more evenly.
 <p>   &nbsp &nbsp &nbsp       •	The motor is still at the top but is now balanced with electronics and battery below.
 <p>   &nbsp &nbsp &nbsp       •	The whole setup spins as one piece - and that spin is actually used to control the flight.

  There’s only one moving part - the propeller - but clever placement of weight and electronics gives the structure balance.

  <b style="color: #66ccff;"> The Monospinner: Final Design </b>

  The modified structure you see here is a monospinner. Notice the changes:
 <p>   &nbsp &nbsp &nbsp      •	The frame is reinforced to maintain rigidity.
 <p>   &nbsp &nbsp &nbsp      •	Battery and electronics are distributed strategically to keep the center of gravity in a stable position.
 <p>   &nbsp &nbsp &nbsp      •	The motor and propeller provide not just lift but also induce controlled spinning.
  
  This design transforms a basic toy concept into a functioning flying machine that leverages rotational dynamics, thrust, and smart design. The entire vehicle has only one moving part - the propeller - making it an elegant example of efficient flight mechanics.

  <b style="color: #66ccff;">Let’s Move Forward: Adding a Second Motor </b>
  
  Till this point, we’ve been playing around with just one motor on a stick - first placing it in the center, then shifting it to one end. But now, let’s try something new.
  What if we add another motor with a propeller to the other end of the stick ?
 <p>   Now the setup looks like this:
 <p>   &nbsp &nbsp &nbsp        •	One motor at the left end of the stick
 <p>   &nbsp &nbsp &nbsp        •	Another motor at the right end
 <p>   &nbsp &nbsp &nbsp        •	Both can spin and push air downwards

  So, what happens when we turn them on ?

  What Happens When Both Motors Spin ?

  If both motors spin at the same speed and in the same direction, then:

 <p>   &nbsp &nbsp &nbsp          •	The stick lifts up just like before because of thrust.
 <p>   &nbsp &nbsp &nbsp          •	But there’s a twist: since both motors are on opposite ends and spinning the same way, the stick might also start spinning around its center ( like a seesaw doing a &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp   twist in the air ).

 <p> Now, let’s say we make the motors spin in opposite directions ( one clockwise, one counter-clockwise ) :
 <p>   &nbsp &nbsp &nbsp          •	The thrust still pushes the stick upward.
 <p>   &nbsp &nbsp &nbsp          •	But now, the spinning cancels out! The forces balance, and the stick flies without twisting.
 
  <b style="color: #66ccff;">  What If One Motor Spins Faster ?</b>

  <p>  Here’s where things get really interesting. </p>

  <p>  If one motor spins faster than the other, it produces more thrust than the other side. That means:</p>

  <p>   &nbsp &nbsp &nbsp          •	One side lifts more, causing the stick to tilt or rotate.
  <p>   &nbsp &nbsp &nbsp          •	By adjusting motor speeds, we can control the direction of tilt and rotation.

  <p>   This is how most drones actually work! Instead of just flying straight up, they tilt in different directions to move around all by changing how fast their motors spin.

  <b style="color: #66ccff;">A Real Example:</b>

  Chinook Helicopter and Our Two-Motor Stick 

  To better understand what we just explored with the two motors on a stick , let’s look at a real flying machine - the Chinook helicopter.

  <p>     The Chinook has:

  <p>   &nbsp &nbsp &nbsp           •	Two big rotors
  <p>   &nbsp &nbsp &nbsp           •	One at the front
  <p>   &nbsp &nbsp &nbsp           •	One at the back

  Just like our stick with a motor at each end.
  But why does the Chinook use two rotors instead of one?

  <p style="color: #66ccff;"><b>  Why Two Rotors ? </b> </p>

  If a helicopter has only one big rotor, when it spins to create lift, the body wants to spin in the opposite direction ( this is due to something called torque, like we saw earlier when one rotor made our stick twist ).

  To stop that spinning, most helicopters add a tail rotor a small sideways propeller at the back to balance it out.

  But the Chinook takes a different approach:

<p>   &nbsp &nbsp &nbsp   •	Both main rotors spin in opposite directions
<p>   &nbsp &nbsp &nbsp   •	This way, the spinning forces cancel each other out
<p>   &nbsp &nbsp &nbsp   •	No need for a tail rotor
<p>   &nbsp &nbsp &nbsp   •	The helicopter flies straight up without twisting

  Just like our stick with two motors spinning in opposite directions!

 <b style="color: #66ccff;"> What Chinook Teaches Us About Control </b>

  Now here's the clever part.
  If the Chinook wants to tilt forward, it simply:
 <p>   &nbsp &nbsp &nbsp  •	Increases the speed of the rear rotor
 <p>   &nbsp &nbsp &nbsp  •	Decreases the speed of the front rotor

  This makes the back lift more than the front - so the whole helicopter tilts forward and starts moving ahead.
  Similarly, it can tilt backward, left, or right just by adjusting the speeds of the rotors.
  This is exactly what we can do with our two motor stick control tilt and direction by changing how fast each motor spins.
 
  From Toys to Technology
  So, what started with a spinning dragonfly toy, and then became a stick with one motor, has now turned into a structure that works just like a real helicopter.
  By carefully placing and controlling multiple motors, we go from simple lifting to real flight control - adjusting direction, tilt, and stability.

 <b style="color: #66ccff;"> Looking Back: The Monospinner Design Had 3 Branches </b>
 <p> What If We Add a Motor to Each ?
 <p>We’ve been exploring flight with just one spinning motor. But if you remember, the monospinner structure had three branches coming out from the center - almost like a triangle.

  Now imagine this :
  What if we place a motor with a propeller at the end of each branch ?
  Let’s walk through what happens.


  <b style="color: #66ccff;"> First Step: Getting Stable Hover </b>

  With just one motor, we managed to lift the structure, but it spun and wasn't very stable.
  When we added a second motor, things changed. With motors on two branches :

 <p>   &nbsp &nbsp &nbsp    •	We got more balanced lift
 <p>   &nbsp &nbsp &nbsp    •	The structure could now hover without spinning wildly
 <p>   &nbsp &nbsp &nbsp    •	It became easier to go up and down smoothly

  That was a big step - we finally had a more controlled hover.

  <b style="color: #66ccff;">  Next Step: Directional Movement </b>

  Here’s where it gets interesting.

  If one motor spins a little faster than the other, we notice something :

 <p>   &nbsp &nbsp &nbsp     •	The structure doesn’t just go up it starts to tilt slightly
 <p>   &nbsp &nbsp &nbsp     •	That tilt causes the whole structure to move forward or backward

  So now we’re not just hovering, we’ve started to move.

 <b style="color: #66ccff;"> Adding a Third Motor: Full Control in the Air </b>

  Now imagine adding a third motor to the last branch.

  With motors on all three ends, we gain even more control :
 <p>   &nbsp &nbsp &nbsp     •	By changing the speed of different motors, we can move left or right
 <p>   &nbsp &nbsp &nbsp     •	We can hover, move forward, backward, and even slide sideways
  We’ve turned a spinning idea into something that can now move freely in the air all by carefully  &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp  adjusting motor speeds.

  From Three Motors to a Tricopter : What We’ve Built So Far
  By placing a motor with a propeller on each of the three branches, we’ve unlocked the ability to:
 <p>   &nbsp &nbsp &nbsp      •	Hover in place
 <p>   &nbsp &nbsp &nbsp      •	Move forward or backward
 <p>   &nbsp &nbsp &nbsp      •	Shift left or right
  This setup is more than just a fun experiment - it’s actually very close to a real flying machine called a tricopter.
 
  <b style="color: #66ccff;"> What is a Tricopter ? </b>

  <p>A tricopter is a flying device that uses three motors to fly and move in all directions.

  But here’s the cool part:
  <p>   &nbsp &nbsp &nbsp       •	Just like we saw in our stick-and-motor setup, the tricopter can hover by running all motors at the same speed.
  <p>   &nbsp &nbsp &nbsp       •	If one motor goes faster or slower, the balance changes - causing the whole system to tilt and move in a new direction.
  <p>   &nbsp &nbsp &nbsp        •	This tilt-and-move behavior is how it flies around in space.

  In some tricopters, one of the motors can also slightly turn ( pivot ) to help control the spinning or yawing motion - but even without that, we can still learn the basic behavior from our three-branch setup.

 <b style="color: #66ccff;"> Why This Matters </b>
 <p> The idea here is simple but powerful:</p>
  <p>   &nbsp &nbsp &nbsp   ✅ More motors = more control
  <p>   &nbsp &nbsp &nbsp   ✅ Carefully changing motor speeds = precise movement
 <p> By understanding how just three spinning propellers work together to create balance and motion, we’ve taken a big leap from simple lift to controlled flight just like a real aircraft does.

 <p style="color: #66ccff;"> <b>Adding the Fourth Rotor: Complete Control </b></p>
 
  So far, with three rotors, we’ve been able to:
  <p>   &nbsp &nbsp &nbsp    •	Hover
  <p>   &nbsp &nbsp &nbsp    •	Move forward and backward
  <p>   &nbsp &nbsp &nbsp    •	Shift left and right
  <p>   &nbsp &nbsp &nbsp    •	Even rotate a little (by adjusting motor speeds)

 <p> But now, let’s add a fourth rotor, placed opposite to one of the others - just like filling in the last leg of a table.
  What happens now ? </p>

 <p style="color: #66ccff;"><b> The Power of Four </b> </p>

  With four rotors working together, something amazing happens:

  <p>   &nbsp &nbsp &nbsp    •	The flying machine becomes more stable
  <p>   &nbsp &nbsp &nbsp    •	It can rotate (spin around) more smoothly
  <p>   &nbsp &nbsp &nbsp    •	It can make sharper, quicker movements
  <p>   &nbsp &nbsp &nbsp    •	And it's easier to balance the weight

  This is the setup that most modern drones use — not just because it looks cool, but because it gives full control over motion in every direction:

  <p>   &nbsp &nbsp &nbsp    •	Up/down (by increasing or decreasing all motors together)
  <p>   &nbsp &nbsp &nbsp    •	Forward/backward (by tilting slightly using motor speed differences)
  <p>   &nbsp &nbsp &nbsp    •	Left/right movement (sideways tilting)
  <p>   &nbsp &nbsp &nbsp    •	Yaw/rotation (by spinning some motors clockwise and others counter-clockwise)


 <p style="color: #66ccff;"><b> Why It Works So Well </b></p>

  With four motors, we can do something special — we can spin two motors clockwise and the other two counter-clockwise. This cancels out the unwanted rotation, and gives us clean, smooth flight.

  It’s like having perfect balance and power at the same time.

 <p style="color: #66ccff;"><b>   From Four Rotors to a Quadcopter: What Is It ? </b></p> 

  When we take those four rotors and arrange them like a cross - with one at the front, one at the back, and one on each side - we create what’s called a quadcopter.
  <p>   &nbsp &nbsp &nbsp      •	"Quad" means four
  <p>   &nbsp &nbsp &nbsp      •	"Copter" means it flies using rotors or propellers
  A quadcopter is the most common type of small flying machine today. In fact, when most people say “drone,”  &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp  they’re usually talking about a quadcopter.

  <p style="color: #66ccff;"><b> What Makes a Drone Different ? </b></p>

  The word drone actually means any flying machine that can fly without a pilot on board.

  So technically, even big military aircraft or delivery systems can be called drones.

  But in everyday life, the word "drone" usually refers to small flying machines (like quadcopters) that:

  <p>   &nbsp &nbsp &nbsp      •	Use electric motors to spin propellers
  <p>   &nbsp &nbsp &nbsp      •	Are controlled remotely (by a person or a computer)
  <p>   &nbsp &nbsp &nbsp      •	Can hover, fly, turn, and stay balanced using sensors

  Why Quadcopters Are So Popular
  Quadcopters are everywhere now — in photography, racing, even kids’ toys. Here's why they’re so popular:

  <p>   &nbsp &nbsp &nbsp      •	Simple Design: Just four motors and some electronics
  <p>   &nbsp &nbsp &nbsp      •	Full Control: Can move in every direction
  <p>   &nbsp &nbsp &nbsp      •	Stable Flight: Easy to balance and hover
  <p>   &nbsp &nbsp &nbsp      •	No Need for Complex Moving Parts: Just change motor speeds!

  By changing the speed of each rotor, we control:
  <p>   &nbsp &nbsp &nbsp      •	Lift (go up/down)
  <p>   &nbsp &nbsp &nbsp      •	Tilt (move forward, backward, sideways)
  <p>   &nbsp &nbsp &nbsp      •	Spin/Yaw (rotate around in place)

  <p style="color: #66ccff;"><b> Recap: The Journey So Far </b> </p>

  We started with:.

  <p>  &nbsp &nbsp &nbsp   ✅ A spinning toy — to understand basic thrust
  <p>  &nbsp &nbsp &nbsp   ✅ A motor on a stick — to see how lift and balance works
  <p>  &nbsp &nbsp &nbsp   ✅ Moved the motor — and discovered rotation and torque
  <p>  &nbsp &nbsp &nbsp   ✅ Added more motors — and slowly gained control in every direction
  <p>  &nbsp &nbsp &nbsp   ✅ Finally, built up to a quadrotor flying machine — a drone



 <p style="color: #66ccff;"><b> What Are These Motions ? </b> </p>
  
  Introducing Degrees of Freedom (DOF)

  All this movement — going up/down, forward/backward, left/right, and spinning/tilting — might seem like just regular flying motion.
  But in the world of flight (and physics), these are actually called <b class = "bold"> Degrees of Freedom </b>, or <b class = "bold"> DOF </b>  for short.
  <p>Each "degree of freedom" is one kind of independent movement the flying machine can do. In total, a drone in the air can have up to six:

  <p> &nbsp &nbsp &nbsp 1.	Up/Down (Lift)
  <p> &nbsp &nbsp &nbsp 2.	Forward/Backward (Pitch)
  <p> &nbsp &nbsp &nbsp 3.	Left/Right (Roll)
  <p> &nbsp &nbsp &nbsp 4.	Rotate Left/Right (Yaw)
  <p> &nbsp &nbsp &nbsp 5.	Slide Left/Right (Lateral translation)
  <p> &nbsp &nbsp &nbsp 6.	Slide Forward/Backward (Longitudinal translation)

  But to keep it simple, you can just think of it like this:
  <p>   &nbsp &nbsp &nbsp      •	The more motors and better control we have,
  <p>   &nbsp &nbsp &nbsp      •	The more directions we can move in,
  <p>   &nbsp &nbsp &nbsp      •	And that gives us more degrees of freedom.

  So when we added one motor, we could only go up.
  Add two motors, and we got forward/backward.
  Add more, and suddenly — we can move in every direction and stay balanced too.
  That’s the power of understanding DOF — it’s what makes controlled flight possible!

  <p style="color: #66ccff;"><b>   More Rotors, More Power: Beyond the Quadcopter </b></p>
  As we explore deeper into drone designs, we find that it's not just about four motors.

  There are even drones with:

  <p>   &nbsp &nbsp &nbsp      • Six motors — called a Hexacopter

  <p>   &nbsp &nbsp &nbsp      • Eight motors — called an Octacopter

 <b class = "bold">  Why so many ? </b>

 Because more motors give:

  <p>   &nbsp &nbsp &nbsp      •  Better balance

  <p>   &nbsp &nbsp &nbsp      •  More lifting power

  <p>   &nbsp &nbsp &nbsp      •  Extra safety (if one motor fails, others can still keep it flying)

  <p>   &nbsp &nbsp &nbsp      •  Smoother control in windy conditions

  But it doesn’t stop there.

  People have even come up with creative motor setups using different shapes like “Y” or “X” configurations, or mounting the motors underneath the frame instead of on top.

  Some drones also use servos (small rotating devices) to change the direction of the thrust mid-flight. This helps the drone tilt, steer, or stabilize without needing to change motor speeds.

  These designs may look futuristic, but they’re all built on the same simple ideas we started with — thrust, lift, and balance.
  
</section>

