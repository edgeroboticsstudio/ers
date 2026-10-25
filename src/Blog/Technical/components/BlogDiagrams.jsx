// SVG Diagram components for "From Dragonfly Toys to Drone Dynamics" blog post

export const NewtonThirdLawDiagram = () => (
    <svg viewBox="0 0 600 420" className="w-full" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        {/* Grid lines */}
        {[...Array(20)].map((_, i) => (
            <line key={`gv-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="420" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}
        {[...Array(14)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Stick */}
        <rect x="295" y="205" width="10" height="140" rx="3" fill="#94a3b8" />

        {/* Hand holding stick */}
        <ellipse cx="300" cy="355" rx="28" ry="18" fill="#d97706" opacity="0.6" />
        <ellipse cx="300" cy="345" rx="22" ry="14" fill="#f59e0b" opacity="0.5" />

        {/* Rotor hub */}
        <circle cx="300" cy="200" r="12" fill="#475569" stroke="#94a3b8" strokeWidth="2" />

        {/* Rotor blades */}
        <ellipse cx="220" cy="200" rx="70" ry="8" fill="#38bdf8" opacity="0.7" />
        <ellipse cx="380" cy="200" rx="70" ry="8" fill="#38bdf8" opacity="0.7" />

        {/* Spin arrow (CCW from above = air pushed down) */}
        <path d="M 360 180 Q 300 130 240 180" fill="none" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#nl-arrowBlue)" opacity="0.7" />
        <text x="240" y="140" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Rotor Spin</text>

        {/* DOWN arrows - air pushed down */}
        <line x1="230" y1="218" x2="230" y2="295" stroke="#ef4444" strokeWidth="3" markerEnd="url(#nl-arrowRed)" />
        <line x1="370" y1="218" x2="370" y2="295" stroke="#ef4444" strokeWidth="3" markerEnd="url(#nl-arrowRed)" />

        {/* UP arrow - Thrust */}
        <line x1="300" y1="183" x2="300" y2="90" stroke="#22c55e" strokeWidth="4" markerEnd="url(#nl-arrowOrange)" />
        {/* Glow */}
        <line x1="300" y1="183" x2="300" y2="90" stroke="#22c55e" strokeWidth="14" opacity="0.12" />

        {/* Action label - left side */}
        <text x="230" y="320" textAnchor="middle" fill="#ef4444" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Air pushed down</text>
        <text x="230" y="335" textAnchor="middle" fill="#ef4444" fontSize="11" fontFamily="sans-serif">(Action)</text>

        {/* Thrust label - above arrow */}
        <text x="270" y="50" textAnchor="start" fill="#22c55e" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Thrust (F)</text>
        <text x="265" y="65" textAnchor="start" fill="#22c55e" fontSize="11" fontFamily="sans-serif">(Reaction Force)</text>


        {/* Newton's law banner 
        <rect x="80" y="378" width="440" height="30" rx="15" fill="#0ea5e9" opacity="0.15" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.5" />
        <text x="300" y="397" textAnchor="middle" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">Newton's 3rd Law: Every action has an equal &amp; opposite reaction</text>
        */}

        <defs>
            <marker id="nl-arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
            </marker>
            <marker id="nl-arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
            <marker id="nl-arrowOrange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
            </marker>
        </defs>
    </svg>
);

export const HoverBalanceDiagram = () => (
    <svg viewBox="0 0 600 400" className="w-full" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        {[...Array(20)].map((_, i) => (
            <line key={`g-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="400" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}
        {[...Array(14)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Beam / Stick */}
        <rect x="150" y="195" width="300" height="10" rx="3" fill="#64748b" />

        {/* Motor at center */}
        <rect x="280" y="170" width="40" height="28" rx="5" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Propeller */}
        <ellipse cx="300" cy="165" rx="60" ry="6" fill="#38bdf8" opacity="0.6" />
        <circle cx="300" cy="165" r="5" fill="#475569" stroke="#94a3b8" strokeWidth="1" />

        {/* Thrust arrow UP */}
        <line x1="300" y1="150" x2="300" y2="65" stroke="#22c55e" strokeWidth="4" markerEnd="url(#hb-arrowGreen)" />
        <line x1="300" y1="150" x2="300" y2="65" stroke="#22c55e" strokeWidth="14" opacity="0.1" />

        {/* Thrust label - right of arrow */}
        <text x="350" y="100" fill="#4ade80" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Thrust (F)</text>
        <text x="360" y="116" fill="#4ade80" fontSize="11" fontFamily="sans-serif">(Upward)</text>

        {/* Weight arrow DOWN */}
        <line x1="300" y1="210" x2="300" y2="300" stroke="#ef4444" strokeWidth="4" markerEnd="url(#hb-arrowRed)" />
        <line x1="300" y1="210" x2="300" y2="300" stroke="#ef4444" strokeWidth="14" opacity="0.1" />

        {/* Weight label - right of arrow */}
        <text x="350" y="265" fill="#f87171" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Weight (W)</text>
        <text x="365" y="281" fill="#f87171" fontSize="11" fontFamily="sans-serif">(Gravity)</text>

        {/* Equals badge - shows T = W */}
        <rect x="50" y="187" width="80" height="28" rx="6" fill="#fbbf24" opacity="0.12" stroke="#fbbf24" strokeWidth="1" />
        <text x="90" y="206" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold" fontFamily="sans-serif">F = W</text>

        {/*  Hover badge */}
        <rect x="185" y="330" width="230" height="40" rx="20" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.5" />
        <text x="300" y="355" textAnchor="middle" fill="#4ade80" fontSize="16" fontWeight="bold" fontFamily="sans-serif">HOVER ✓</text>

        <defs>
            <marker id="hb-arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
            </marker>
            <marker id="hb-arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
        </defs>
    </svg>
);

export const TorqueOffsetDiagram = () => (
    <svg viewBox="0 0 600 420" className="w-full" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        {[...Array(20)].map((_, i) => (
            <line key={`g-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="420" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}
        {[...Array(14)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Tilted beam */}
        <line x1="160" y1="240" x2="440" y2="190" stroke="#64748b" strokeWidth="10" strokeLinecap="round" />

        {/* Motor at right end */}
        <rect x="418" y="160" width="38" height="26" rx="5" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(-10 437 173)" />

        {/* Propeller at right end */}
        <ellipse cx="437" cy="155" rx="52" ry="5" fill="#38bdf8" opacity="0.6" transform="rotate(-10 437 155)" />
        <circle cx="437" cy="155" r="4" fill="#475569" />

        {/* Thrust arrow UP */}
        <line x1="437" y1="140" x2="437" y2="65" stroke="#22c55e" strokeWidth="4" markerEnd="url(#hb-arrowGreen)" />
        <line x1="437" y1="140" x2="437" y2="65" stroke="#22c55e" strokeWidth="14" opacity="0.1" />

        {/* Thrust label - right of arrow */}
        <text x="480" y="100" fill="#4ade80" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Thrust (F)</text>
        <text x="490" y="116" fill="#4ade80" fontSize="11" fontFamily="sans-serif">(Upward)</text>

        {/* Center of mass marker - moved up so label doesn't overlap Weight */}
        <circle cx="300" cy="215" r="7" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" opacity="0.9" />
        {/* CoM label - higher to avoid beam crossover */}
        <text x="317" y="180" textAnchor="end" fill="#fbbf24" fontSize="11" fontFamily="sans-serif">Center</text>
        <text x="320" y="195" textAnchor="end" fill="#fbbf24" fontSize="11" fontFamily="sans-serif">of Mass</text>

        {/* Weight arrow DOWN */}
        <line x1="300" y1="230" x2="300" y2="320" stroke="#ef4444" strokeWidth="4" markerEnd="url(#hb-arrowRed)" />
        <line x1="300" y1="230" x2="300" y2="320" stroke="#ef4444" strokeWidth="14" opacity="0.1" />

        {/* Weight label - right of arrow */}
        <text x="350" y="265" fill="#f87171" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Weight (W)</text>
        <text x="365" y="281" fill="#f87171" fontSize="11" fontFamily="sans-serif">(Gravity)</text>

        {/* Torque rotation arrow (CCW = reaction to CW motor) */}
        <path d="M 380 135 Q 300 70 230 160" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,3" markerEnd="url(#to-arrowPink)" />
        {/* Torque label - above arc, clear space */}
        <text x="290" y="60" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="bold" fontFamily="sans-serif">Torque</text>
        <text x="325" y="60" textAnchor="middle" fill="#38bdf8" fontSize="15" fontWeight="bold" fontFamily="sans-serif">(T)</text>
        <text x="300" y="76" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="sans-serif">Rotational Effect</text>

        {/* Distance indicator */}
        <line x1="300" y1="335" x2="437" y2="335" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="300" y1="330" x2="300" y2="340" stroke="#a78bfa" strokeWidth="1.5" />
        <line x1="437" y1="330" x2="437" y2="340" stroke="#a78bfa" strokeWidth="1.5" />
        <text x="368" y="355" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontFamily="sans-serif">Distance (d) from center</text>

        {/* Equals badge - shows T = W */}
        <rect x="120" y="170" width="80" height="28" rx="6" fill="#fbbf24" opacity="0.12" stroke="#fbbf24" strokeWidth="1" />
        <text x="160" y="189" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold" fontFamily="sans-serif">T = F × d</text>



        {/* Unstable label */}
        <rect x="90" y="365" width="420" height="34" rx="17" fill="#f43f5e" opacity="0.12" stroke="#f43f5e" strokeWidth="1" />
        <text x="300" y="387" textAnchor="middle" fill="#fb7185" fontSize="12" fontWeight="bold" fontFamily="sans-serif">⚠ Off-center force creates rotation making the system UNSTABLE</text>

        <defs>
            <marker id="to-arrowOr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
            </marker>
            <marker id="to-arrowPink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
            </marker>
            <marker id="to-arrowR2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
        </defs>
    </svg>
);

export const DualMotorDiagram = () => (
    <svg
        viewBox="0 0 600 420"
        className="w-full"
        style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}
    >
        {/* Grid */}
        {[...Array(20)].map((_, i) => (
            <line key={`g-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="420" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}
        {[...Array(14)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Beam */}
        <rect x="120" y="210" width="360" height="10" rx="3" fill="#64748b" />

        {/* Left Motor */}
        <rect x="130" y="185" width="35" height="28" rx="5" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <ellipse cx="148" cy="180" rx="50" ry="5" fill="#38bdf8" opacity="0.6" />
        <circle cx="148" cy="180" r="4" fill="#475569" />

        {/* Right Motor */}
        <rect x="435" y="185" width="35" height="28" rx="5" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <ellipse cx="452" cy="180" rx="50" ry="5" fill="#38bdf8" opacity="0.6" />
        <circle cx="452" cy="180" r="4" fill="#475569" />

        {/* LEFT LOOP (CW) — Full planar ellipse style, arrowhead at front */}
        <path d="M 170 160 a 55 20 1 1 0 -40 0" fill="none" stroke="#a78bfa" strokeWidth="3" markerEnd="url(#dm-arrowPurple)" opacity="0.85" />
        <text x="50" y="145" fill="#c4b5fd" fontSize="13" fontWeight="bold" fontFamily="sans-serif">CW</text>

        {/* RIGHT LOOP (CCW) — Full planar ellipse style, arrowhead at front */}
        <path d="M 435 160 a 55 20 1 1 1 40 0" fill="none" stroke="#2dd4bf" strokeWidth="3" markerEnd="url(#dm-arrowTeal)" opacity="0.85" />
        <text x="530" y="145" fill="#5eead4" fontSize="13" fontWeight="bold" fontFamily="sans-serif">CCW</text>

        {/* Thrust arrows — Refined with markers */}
        <line x1="148" y1="168" x2="148" y2="80" stroke="#22c55e" strokeWidth="3.5" markerEnd="url(#dm-arrowG2)" />
        <line x1="452" y1="168" x2="452" y2="80" stroke="#22c55e" strokeWidth="3.5" markerEnd="url(#dm-arrowG2)" />
        <line x1="148" y1="168" x2="148" y2="85" stroke="#22c55e" strokeWidth="12" opacity="0.1" />
        <line x1="452" y1="168" x2="452" y2="85" stroke="#22c55e" strokeWidth="12" opacity="0.1" />

        <text x="148" y="70" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Thrust</text>
        <text x="452" y="70" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Thrust</text>

        {/* Center of mass dot + label */}
        <circle cx="300" cy="215" r="6" fill="#fbbf24" />
        <text x="300" y="200" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="sans-serif">Center of Mass</text>

        {/* Weight arrow DOWN */}
        <line x1="300" y1="230" x2="300" y2="340" stroke="#ef4444" strokeWidth="4" markerEnd="url(#hb-arrowRed)" />
        <line x1="300" y1="230" x2="300" y2="340" stroke="#ef4444" strokeWidth="14" opacity="0.1" />

        {/* Weight label - right of arrow */}
        <text x="330" y="275" fill="#f87171" fontSize="14" fontWeight="bold" fontFamily="sans-serif">Weight (W)</text>
        <text x="345" y="291" fill="#f87171" fontSize="11" fontFamily="sans-serif">(Gravity)</text>

        {/* Stable hover badge */}
        <rect x="185" y="360" width="230" height="40" rx="20" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.5" />
        <text x="300" y="385" textAnchor="middle" fill="#4ade80" fontSize="16" fontWeight="bold" fontFamily="sans-serif">STABLE HOVER ✓</text>

        <defs>
            <marker id="dm-arrowPurple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#a78bfa" />
            </marker>
            <marker id="dm-arrowTeal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2dd4bf" />
            </marker>
            <marker id="dm-arrowG2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
            </marker>
            <marker id="hb-arrowRed" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
        </defs>
    </svg>
);

export const QuadcopterDiagram = () => (
    <svg viewBox="0 25 600 440" className="w-full" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        {[...Array(20)].map((_, i) => (
            <line key={`g-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="540" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}
        {[...Array(18)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* FRONT label */}
        <text x="300" y="80" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">FRONT ↑</text>

        {/* Arms - X configuration */}
        <line x1="195" y1="155" x2="405" y2="345" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        <line x1="405" y1="155" x2="195" y2="345" stroke="#475569" strokeWidth="6" strokeLinecap="round" />

        {/* Center body */}
        <circle cx="300" cy="250" r="22" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <circle cx="300" cy="250" r="10" fill="#0ea5e9" opacity="0.6" />

        {/* Motor 1 - Front Left (CW - top arc) */}
        <circle cx="195" cy="155" r="38" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <circle cx="195" cy="155" r="8" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M 162 136 A 38 38 0 0 1 228 136" fill="none" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#aq-P)" />
        <text x="125" y="155" textAnchor="end" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="sans-serif">M1</text>
        <text x="130" y="170" textAnchor="end" fill="#c4b5fd" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CW ↻</text>
        <line x1="195" y1="135" x2="195" y2="80" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#aq-G)" />

        {/* Motor 2 - Front Right (CCW - top arc) */}
        <circle cx="405" cy="155" r="38" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <circle cx="405" cy="155" r="8" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M 438 136 A 38 38 0 0 0 372 136" fill="none" stroke="#2dd4bf" strokeWidth="2" markerEnd="url(#aq-T)" />
        <text x="470" y="155" textAnchor="start" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="sans-serif">M2</text>
        <text x="460" y="170" textAnchor="start" fill="#5eead4" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CCW ↺</text>
        <line x1="405" y1="135" x2="405" y2="80" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#aq-G)" />

        {/* Motor 3 - Rear Left (CCW - bottom arc) */}
        <circle cx="195" cy="345" r="38" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <circle cx="195" cy="345" r="8" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M 162 364 A 38 38 0 0 0 228 364" fill="none" stroke="#2dd4bf" strokeWidth="2" markerEnd="url(#aq-T)" />
        <text x="110" y="345" textAnchor="start" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="sans-serif">M3</text>
        <text x="100" y="360" textAnchor="start" fill="#5eead4" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CCW ↺</text>
        <line x1="195" y1="325" x2="195" y2="272" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#aq-G)" />

        {/* Motor 4 - Rear Right (CW - bottom arc) */}
        <circle cx="405" cy="345" r="38" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <circle cx="405" cy="345" r="8" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M 438 364 A 38 38 0 0 1 372 364" fill="none" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#aq-P)" />
        <text x="482" y="345" textAnchor="end" fill="#4ade80" fontSize="10" fontWeight="bold" fontFamily="sans-serif">M4</text>
        <text x="488" y="360" textAnchor="end" fill="#c4b5fd" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CW ↻</text>
        <line x1="405" y1="325" x2="405" y2="272" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#aq-G)" />

        {/* REAR label — moved down to clear M3/M4 labels */}
        <text x="300" y="420" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">REAR ↓</text>

        <defs>
            <marker id="aq-P" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#a78bfa" />
            </marker>
            <marker id="aq-T" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2dd4bf" />
            </marker>
            <marker id="aq-G" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
            </marker>
        </defs>
    </svg>
);

export const TriCopterDiagram = () => (
    <svg viewBox="0 10 600 440" className="w-full" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        {[...Array(20)].map((_, i) => (
            <line key={`g-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="540" stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}
        {[...Array(18)].map((_, i) => (
            <line key={`gh-${i}`} x1="0" y1={i * 30} x2="600" y2={i * 30} stroke="#334155" strokeWidth="0.5" opacity="0.3" />
        ))}

        {/* Y-Frame arms */}
        <line x1="300" y1="240" x2="160" y2="140" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        <line x1="300" y1="240" x2="440" y2="140" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
        <line x1="300" y1="240" x2="300" y2="360" stroke="#475569" strokeWidth="6" strokeLinecap="round" />

        {/* Center hub */}
        <circle cx="300" cy="240" r="16" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <circle cx="300" cy="240" r="6" fill="#0ea5e9" opacity="0.6" />
        {/* FRONT indicator — placed outside hub, clearly below */}
        <text x="300" y="100" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">FRONT ↑</text>

        {/* ── Motor 1 – Front Left (CW - top arc) ── */}
        <circle cx="160" cy="140" r="36" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <circle cx="160" cy="140" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M 129 122 A 36 36 0 0 1 191 122" fill="none" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#tr-P)" />
        <text x="93" y="160" textAnchor="end" fill="#c4b5fd" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CW ↻</text>
        <line x1="160" y1="126" x2="160" y2="55" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#tr-G)" />
        <text x="100" y="140" textAnchor="end" fill="#4ade80" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Motor 1</text>

        {/* ── Motor 2 – Front Right (CCW - top arc) ── */}
        <circle cx="440" cy="140" r="36" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
        <circle cx="440" cy="140" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M 471 122 A 36 36 0 0 0 409 122" fill="none" stroke="#2dd4bf" strokeWidth="2" markerEnd="url(#tr-T)" />
        <text x="502" y="160" textAnchor="start" fill="#5eead4" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CCW ↺</text>
        <line x1="440" y1="126" x2="440" y2="55" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#tr-G)" />
        <text x="500" y="140" textAnchor="start" fill="#4ade80" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Motor 2</text>

        {/* ── Motor 3 – Tail (CW - bottom arc) ── */}
        <circle cx="300" cy="360" r="36" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />

        <circle cx="300" cy="360" r="7" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M 331 378 A 36 36 0 0 1 269 378" fill="none" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#tr-P)" />
        <text x="210" y="380" textAnchor="end" fill="#c4b5fd" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CW ↻</text>
        <text x="230" y="360" textAnchor="end" fill="#4ade80" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Motor 3 (Tail)</text>

        {/* Servo Tilt Indicator */}
        <path d="M 257 335 Q 300 290 343 335" fill="none" stroke="#fbbf24" strokeWidth="2" markerStart="url(#tr-O)" markerEnd="url(#tr-O)" opacity="0.8" />
        <text x="365" y="325" textAnchor="start" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Tilt Control</text>

        <line x1="300" y1="353" x2="300" y2="280" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#tr-G)" />


        <defs>
            <marker id="tr-P" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#a78bfa" />
            </marker>
            <marker id="tr-T" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2dd4bf" />
            </marker>
            <marker id="tr-O" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#fdba74" />
            </marker>
            <marker id="tr-G" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
            </marker>
        </defs>
    </svg>
);

export const DegreesOfFreedomDiagram = () => (
    <svg viewBox="0 0 700 450" className="w-full" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>

        {/* ── Central drone body ── */}
        <rect x="315" y="220" width="70" height="28" rx="8" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <circle cx="350" cy="234" r="7" fill="#0ea5e9" opacity="0.7" />

        {/* ── HEAVE ──  */}

        <line x1="350" y1="215" x2="350" y2="50" stroke="#22c55e" strokeWidth="3" strokeDasharray="6,3" markerEnd="url(#df-G)" />
        <line x1="350" y1="252" x2="350" y2="400" stroke="#22c55e" strokeWidth="3" strokeDasharray="6,3" markerEnd="url(#df-G)" />
        <text x="350" y="40" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Heave (UP)</text>
        <text x="350" y="420" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Heave (DOWN)</text>

        {/* ── SWAY ── */}
        <line x1="310" y1="234" x2="140" y2="234" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6,3" markerEnd="url(#df-B)" />
        <line x1="390" y1="234" x2="575" y2="234" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6,3" markerEnd="url(#df-B)" />
        <text x="125" y="238" textAnchor="end" fill="#7dd3fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Sway (LEFT)</text>
        <text x="585" y="238" textAnchor="start" fill="#7dd3fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Sway (RIGHT)</text>

        {/* ── SURGE ── */}
        <line x1="362" y1="220" x2="500" y2="68" stroke="#f97316" strokeWidth="2.5" strokeDasharray="6,3" markerEnd="url(#df-O)" />
        <line x1="338" y1="248" x2="200" y2="400" stroke="#f97316" strokeWidth="2.5" strokeDasharray="6,3" markerEnd="url(#df-O)" />
        <text x="480" y="50" textAnchor="start" fill="#fdba74" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Surge (FWD)</text>
        <text x="220" y="430" textAnchor="end" fill="#fdba74" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Surge (BACK)</text>

        {/* ── ROLL ── */}
        <path d="M 250 220 a 20 40 1 1 0 1 20" fill="none" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#df-B)" opacity="0.85" />
        <text x="240" y="180" textAnchor="end" fill="#7dd3fc" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Roll</text>

        {/* ── PITCH ── */}
        <path d="M 410 225 a 40 25 1 1 0 20 0" fill="none" stroke="#fdba74" strokeWidth="2.5" markerEnd="url(#df-O)" opacity="0.85" transform="rotate(90 290 215)" />
        <text x="245" y="410" textAnchor="start" fill="#fdba74" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Pitch</text>

        {/* ── YAW ── */}
        <path d="M 363 140 a 40 20 1 1 0 -20 0" fill="none" stroke="#22c55e" strokeWidth="3" markerEnd="url(#df-G)" opacity="0.85" />
        <text x="280" y="123" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Yaw</text>

        <defs>
            <marker id="df-G" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
            </marker>
            <marker id="df-B" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
            </marker>
            <marker id="df-O" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
            </marker>
            <marker id="df-R" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#f43f5e" />
            </marker>
        </defs>
    </svg>
);
