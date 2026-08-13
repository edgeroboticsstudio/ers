import droneDragonflyImage from "../assets/thumbnail_drone_dragonfly.png";
import droneHeroBanner from "../assets/drone_hero_banner.png";
import {
    NewtonThirdLawDiagram,
    HoverBalanceDiagram,
    TorqueOffsetDiagram,
    DualMotorDiagram,
    TriCopterDiagram,
    QuadcopterDiagram,
    DegreesOfFreedomDiagram
} from "../components/BlogDiagrams";

export const droneDynamicsPost = {
    id: 3,
    title: "From Dragonfly Toys to Drone Dynamics",
    slug: "dragonfly-toys-to-drone-flight",
    date: "April 2026",
    author: "Edge Robotics Studio",
    category: "Technical",
    excerpt: "Have you ever played with a spinning dragonfly toy? What seems like a simple childhood game actually reveals the fundamental physics behind modern drone flight",
    coverImage: droneDragonflyImage,
    disableLink: false,
    content: [
        // ── Introduction ──
        {
            type: "paragraph",
            text: "Have you ever played with a spinning dragonfly toy, the kind where you rub a stick between your hands and it suddenly flies up into the air ? It may look like a simple toy, but it actually shows us one of the most important ideas behind flight."
        },
        {
            type: "image",
            src: droneHeroBanner,
            alt: "From a spinning dragonfly toy to a modern quadcopter drone"
        },

        // ── Section 1: Newton's Third Law ──
        {
            type: "heading",
            text: "The Science Behind the Spin"
        },
        {
            type: "paragraph",
            text: "When you spin the toy by rubbing the stick quickly between your hands, the rotor starts spinning fast. This spinning pushes air downward. Just like jumping off a trampoline pushes you up when you push it down, the toy feels a push upward. This is called thrust. If this upward thrust is stronger than the toy's weight, the toy lifts off the ground and flies into the air."
        },

        {
            type: "diagram",
            component: NewtonThirdLawDiagram,
            caption: "The rotor pushes air down and the air pushes the toy up"
        },

        {
            type: "callout",
            text: "Newton's Third Law of Motion: For every action, there is an equal and opposite reaction. This is the foundational principle behind all forms of thrust based flight."
        },

        // ── Section 2: Motor on a Stick – Hover ──
        {
            type: "heading",
            text: "From Hands to Motors: Understanding Hover"
        },
        {
            type: "paragraph",
            text: "Now let's take this idea a step further. Instead of using our hands, imagine placing a small motor with a propeller at the center of a stick. When the motor spins, it pushes air downward just like the toy, and the stick starts to lift."
        },
        {
            type: "paragraph",
            text: "If the thrust produced by the motor becomes equal to the weight of the stick and motor, the system reaches a special condition called hover. At this point, it neither goes up nor comes down, but simply stays in place. If we increase the motor speed, it produces more thrust and rises. If we decrease the speed, it produces less thrust and comes down. So just by changing the speed, we can control the height."
        },
        {
            type: "diagram",
            component: HoverBalanceDiagram,
            caption: "The system hovers perfectly in mid-air when Thrust equals Weight"
        },

        // ── Section 3: Off-Center Motor – Torque ──
        {
            type: "heading",
            text: "What Happens When the Motor Moves Off-Center ?"
        },
        {
            type: "paragraph",
            text: "Now let's try something different. What if we move the motor from the center to one end of the stick ? At first, it might seem like it should still fly, but something unexpected happens. The stick doesn't just go up, it starts to tilt and spin."
        },
        {
            type: "paragraph",
            text: "This happens because the force is no longer applied at the center. When a force is applied away from the center, it creates a turning effect called torque. The farther the motor is from the center, the stronger this turning effect becomes. So now instead of getting stable lift, we get a combination of lift and rotation, which makes the system unstable."
        },
        {
            type: "diagram",
            component: TorqueOffsetDiagram,
            caption: "An off-center force creates torque causing the system to tilt and spin"
        },
        {
            type: "callout",
            text: "Torque = Force × Distance from the center. This turning effect is the reason why balance and symmetry are critical in aircraft design."
        },

        // ── Section 4: Monospinner ──
        {
            type: "heading",
            text: "The Monospinner: Turning a Problem into a Solution "
        },
        {
            type: "paragraph",
            text: "Instead of trying to remove this rotation, we can actually use it. This idea leads to a design called a monospinner. In this system, the entire body is designed to spin in a controlled way. The weight is distributed carefully, and the structure is made rigid so that the spinning becomes stable instead of chaotic."
        },
        {
            type: "paragraph",
            text: "Now the rotation is not a problem anymore, it actually helps in stabilizing the system. So in this case, something that looked like a problem becomes part of the solution."
        },

        // ── Section 5: Two Motors – Stable Flight ──
        {
            type: "heading",
            text: "Two Motors: Achieving Stable, Controlled Flight"
        },
        {
            type: "paragraph",
            text: "Next, let's go back to the stick and add another motor to the opposite end. Now we have two motors, one on each side. When both motors spin, they both produce thrust, and the stick lifts more evenly."
        },
        {
            type: "paragraph",
            text: "If both motors spin at the same speed and in opposite directions, the rotational effects cancel each other out, and the system can lift without spinning. This gives us a much more stable hover."
        },
        {
            type: "diagram",
            component: DualMotorDiagram,
            caption: "A stable hover is achieved when two motors spin in opposite directions canceling torque"
        },
        {
            type: "subheading",
            text: "Tilting for Directional Movement"
        },
        {
            type: "paragraph",
            text: "Now things get more interesting when we change the speed of one motor. If one motor spins faster than the other, it produces more thrust on that side. This causes the stick to tilt. Once it tilts, the thrust is no longer pointing straight up; it is slightly angled. This angled thrust creates movement in a direction."
        },
        {
            type: "paragraph",
            text: "So instead of just going up and down, the system can now move forward, backward, or sideways depending on how it tilts. This is the basic idea behind controlled flight."
        },

        // ── Section 6: Real-World Example – Chinook ──
        {
            type: "heading",
            text: "Real-World Example: The Boeing CH-47 Chinook"
        },
        {
            type: "paragraph",
            text: "A real-world example of this concept can be seen in the Boeing CH-47 Chinook. This helicopter has two large rotors, one at the front and one at the back. Both rotors spin in opposite directions, which cancels out the torque and allows the helicopter to stay stable without needing a tail rotor."
        },
        {
            type: "paragraph",
            text: "By adjusting how much lift each rotor produces, the helicopter can tilt and move in different directions. Even though the actual mechanism is more advanced, the basic idea is very similar to what we explored with our two-motor stick."
        },
        {
            type: "callout",
            text: "The Chinook's tandem-rotor design eliminates the need for a tail rotor entirely. All the power goes directly into lift and thrust, making it one of the most efficient heavy-lift helicopters ever built."
        },

        // ── Section 7: Tricopter ──
        {
            type: "heading",
            text: "Three Motors: The Tricopter"
        },
        {
            type: "paragraph",
            text: "Now let's extend this further by adding a third motor, forming a triangular structure. With three motors, we can balance forces in more directions and gain better control over movement. By adjusting the speed of different motors, we can control how the system tilts and moves."
        },
        {
            type: "diagram",
            component: TriCopterDiagram,
            caption: "A tricopter uses three motors in a triangular arrangement for multi-directional control"
        },
        {
            type: "paragraph",
            text: "This concept leads to a type of flying machine known as a Tricopter. A tricopter can hover, move forward and backward, and shift left and right, giving us much more control than before."
        },

        // ── Section 8: Quadcopter ──
        {
            type: "heading",
            text: "Four Motors: The Quadcopter"
        },
        {
            type: "paragraph",
            text: "Finally, let's add a fourth motor to complete the system. Now we have a symmetric structure with four rotors, known as a Quadcopter. This is the most common type of drone used today."
        },
        {
            type: "diagram",
            component: QuadcopterDiagram,
            caption: "A quadcopter: four rotors in an X configuration with alternating CW/CCW rotation"
        },
        {
            type: "paragraph",
            text: "In this setup, all four motors work together to provide lift and control. By increasing or decreasing the speed of all motors together, the drone moves up or down. By changing the speed of motors on one side relative to the other, it tilts and moves in different directions. Two motors spin clockwise and the other two spin counterclockwise, which cancels out unwanted rotation and allows smooth control of yaw."
        },

        // ── Section 9: Degrees of Freedom ──
        {
            type: "heading",
            text: "Degrees of Freedom: Moving in Every Direction"
        },
        {
            type: "paragraph",
            text: "At this point, the flying machine can move in all directions. In physics, these movements are described as degrees of freedom. A flying object can move up and down, forward and backward, left and right, and it can also rotate in different ways. The motors don't create these movements by themselves, but they allow us to control them precisely."
        },
        {
            type: "diagram",
            component: DegreesOfFreedomDiagram,
            caption: "Six degrees of freedom: Throttle, Roll, Pitch, and Yaw give full spatial control"
        },

        // ── Section 10: Beyond Quadcopters ──
        {
            type: "heading",
            text: "Beyond Quadcopters: Hexacopters and Octocopters"
        },
        {
            type: "paragraph",
            text: "From here, designs can become even more advanced. Some drones use six motors (hexacopters) or eight motors (octocopters) to carry heavier loads, improve stability, and add safety in case one motor fails. But no matter how complex the design becomes, the basic ideas remain the same."
        },

        // ── Conclusion ──
        {
            type: "heading",
            text: "Conclusion: From Toys to Flight"
        },
        {
            type: "paragraph",
            text: "What started as a simple spinning toy has now grown into a complete understanding of how flying machines work. Step by step, we moved from generating lift to controlling motion in every direction."
        },
        {
            type: "paragraph",
            text: "In the end, everything comes down to a few simple principles: thrust, torque, balance, and control."
        },
        {
            type: "callout",
            text: "And once you understand these, flight no longer feels like magic; it becomes something you can clearly see, explain, and even build."
        }
    ]
};
