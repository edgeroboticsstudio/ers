import React from 'react';
import {
    Cpu, Code, Activity, Eye, Compass, LayoutDashboard,
    CircuitBoard, Box, ShieldCheck, Cloud, Wrench, FileText, BookOpen
} from 'lucide-react';

export const serviceData = [
    {
        id: 1,
        slug: 'embedded-system-software',
        title: 'Embedded System Software',
        description: 'Firmware development, RTOS integration (FreeRTOS/Zephyr), and low-level driver optimization for custom hardware.',
        icon: <Cpu className="w-8 h-8 text-primary" />,
        content: `Development of robust firmware and embedded software for microcontrollers and microprocessors. 
        
Specialization includes creating efficient, low-level code that interfaces directly with hardware. Technical expertise covers integrating Real-Time Operating Systems (RTOS) like FreeRTOS or Zephyr to ensure deterministic behavior in critical robotic applications. Highly optimized device drivers are also developed to squeeze every ounce of performance out of custom hardware.`
    },
    {
        id: 2,
        slug: 'robotics-software-ros2',
        title: 'Robotics Software (ROS2)',
        description: 'Full-stack ROS2 development, middleware configuration, multi-node architecture, and system orchestration.',
        icon: <Code className="w-8 h-8 text-primary" />,
        content: `Comprehensive robotics software engineering utilizing the Robot Operating System 2 (ROS2).
        
From designing multi-node architectures to configuring Data Distribution Service (DDS) middleware, the studio builds scalable and secure software foundations for robotic systems. This work ensures smooth communication between sensors, actuators, and complex algorithms, orchestrating the entire system for reliable autonomous operation.`
    },
    {
        id: 3,
        slug: 'simulation-digital-twin',
        title: 'Simulation & Digital Twin',
        description: 'High-fidelity simulation in Gazebo/Webots to validate robot behavior before deployment.',
        icon: <Activity className="w-8 h-8 text-primary" />,
        content: `Creating rigorous virtual environments to test and validate robotic software.
        
Before any code runs on expensive physical hardware, the studio builds physics-accurate simulations using tools like Gazebo and Webots. These "digital twins" allow for safe testing of edge cases, refinement of autonomous behaviors, and assurance of system stability under highly varied conditions, drastically reducing development time and hardware risk.`
    },
    {
        id: 4,
        slug: 'computer-vision-ai',
        title: 'Computer Vision & AI',
        description: 'Object detection, SLAM, perception pipelines using OpenCV and deep learning frameworks.',
        icon: <Eye className="w-8 h-8 text-primary" />,
        content: `Empowering robots to perceive and understand their surroundings.
        
The studio designs robust perception pipelines capable of processing complex visual data in real-time. Solutions leverage OpenCV and modern deep learning frameworks to implement object detection, semantic segmentation, and Simultaneous Localization and Mapping (SLAM), allowing autonomous systems to intelligently interact with dynamic environments.`
    },
    {
        id: 5,
        slug: 'navigation-control',
        title: 'Navigation & Control',
        description: 'Path planning, obstacle avoidance, state estimation, and feedback control systems (PID, MPC).',
        icon: <Compass className="w-8 h-8 text-primary" />,
        content: `Implementing precise movement and intelligent trajectory planning.
        
Navigation solutions enable robots to move autonomously from point A to B while avoiding dynamic obstacles. Expertise includes developing advanced state estimation filters (like EKFs), global/local path planners, and sophisticated feedback control loops (such as PID and Model Predictive Control) to ensure smooth, accurate, and safe physical execution.`
    },
    {
        id: 6,
        slug: 'system-integration',
        title: 'System Integration',
        description: 'Seamless integration of sensors, actuators, PCBs, and compute units into a cohesive robotic system.',
        icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
        content: `Bringing disparate hardware and software components together seamlessly.
        
A robot is more than the sum of its parts. Edge Robotics Studio specializes in the complex task of integrating various sensors, intelligent actuators, custom PCBs, and high-performance compute units. Communication bottlenecks, power distribution challenges, and software incompatibilities are resolved to deliver a unified, highly reliable robotic system.`
    },
    {
        id: 7,
        slug: 'pcb-design-hardware',
        title: 'PCB Design & Hardware',
        description: 'Custom PCB design (Altium/KiCad), schematic capture, layout optimization, and EMI/EMC practices.',
        icon: <CircuitBoard className="w-8 h-8 text-primary" />,
        content: `Designing the electrical foundation of your robotic systems.
        
Custom Printed Circuit Board (PCB) design is provided using industry-standard tools like Altium and KiCad. Services include thorough schematic capture, meticulous layout routing for high-speed signals, power supply design, and strict adherence to EMI/EMC best practices to ensure hardware is robust and interference-free.`
    },
    {
        id: 8,
        slug: 'mechanical-design-cad',
        title: 'Mechanical Design & CAD',
        description: '3D modeling, parametric assemblies, DFM, and rapid prototyping using SolidWorks/Fusion.',
        icon: <Box className="w-8 h-8 text-primary" />,
        content: `Engineering the physical structure and moving parts of your robots.
        
Using professional CAD software like SolidWorks and Fusion 360, the studio creates detailed 3D models and parametric assemblies. Designs are developed with manufacturing in mind (Design For Manufacturing - DFM), ensuring that mechanical structures are not only durable and lightweight but also cost-effective to produce and assemble.`
    },
    {
        id: 9,
        slug: 'testing-validation',
        title: 'Testing & Validation',
        description: 'Hardware bring-up, SIL/HIL testing, debugging using oscilloscopes and logic analyzers.',
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        content: `Ensuring unparalleled reliability through rigorous hardware and software validation.
        
Comprehensive testing is conducted at every stage of development. From initial hardware bring-up using oscilloscopes and logic analyzers to advanced Software-in-the-Loop (SIL) and Hardware-in-the-Loop (HIL) testing, the studio meticulously identifies and resolves bugs to guarantee system operation is flawless in the field.`
    },
    {
        id: 10,
        slug: 'devops-for-robotics',
        title: 'DevOps for Robotics',
        description: 'CI/CD pipelines, Dockerized builds, version control workflows, and automated testing.',
        icon: <Cloud className="w-8 h-8 text-primary" />,
        content: `Streamlining the robotics software development lifecycle.
        
Robotics software is complex. The studio implements modern DevOps practices tailored for robotics, including robust Continuous Integration/Continuous Deployment (CI/CD) pipelines. By utilizing Dockerized build environments, structured version control workflows, and automated regression testing, reliable, repeatable, and fast software releases are ensured.`
    },
    {
        id: 11,
        slug: 'rapid-prototyping',
        title: 'Rapid Prototyping',
        description: '3D printing, CNC machining, and fast iteration of mechanical and electronic components.',
        icon: <Wrench className="w-8 h-8 text-primary" />,
        content: `Accelerating the journey from concept to physical reality.
        
Rapid manufacturing technologies like high-resolution 3D printing and quick-turn CNC machining are leveraged to produce physical prototypes. This allows for fast iteration cycles on both mechanical enclosures and structural components, enabling physical testing of form, fit, and function earlier in the design process.`
    },
    {
        id: 12,
        slug: 'technical-documentation',
        title: 'Technical Documentation',
        description: 'Clear system documentation, API references, architecture diagrams, and developer guides.',
        icon: <FileText className="w-8 h-8 text-primary" />,
        content: `Creating the crucial knowledge base for your system's long-term success.
        
Good engineering requires good documentation. Edge Robotics Studio produces clear, comprehensive technical documentation including system architecture diagrams, detailed API references, and step-by-step developer guides. This ensures that any team can easily understand, maintain, and expand upon the systems built.`
    },
    {
        id: 13,
        slug: 'education-and-training',
        title: 'Education & Training',
        description: 'Hands-on courses, workshops, and coaching for aspiring engineers and autonomous creators.',
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        content: `Empowering self-reliant creators through activity-based learning.
        
Our educational programs go beyond theoretical concepts, giving you the practical tools and guidance required to build real-world intelligent systems. We offer workshops and specialized training designed to make complex robotics technology accessible and encourage innovation from the ground up.`
    }
];
