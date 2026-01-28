const dots = [
  // amarillos (más)
  { x: 46, y: 20, s: 5, c: "rgba(255,240,140,.9)" },
  { x: 49, y: 14, s: 4, c: "rgba(255,240,140,.85)" },
  { x: 52, y: 18, s: 4, c: "rgba(255,240,140,.75)" },
  { x: 55, y: 12, s: 5, c: "rgba(255,240,140,.8)" },
  { x: 58, y: 16, s: 4, c: "rgba(255,240,140,.65)" },
  { x: 61, y: 20, s: 3, c: "rgba(255,240,140,.55)" },

  // cyan / teal
  { x: 54, y: 24, s: 5, c: "rgba(90,210,255,.85)" },
  { x: 59, y: 26, s: 4, c: "rgba(90,210,255,.7)" },
  { x: 63, y: 22, s: 3, c: "rgba(90,210,255,.6)" },
  { x: 50, y: 26, s: 3, c: "rgba(90,210,255,.55)" },

  // verdes
  { x: 47, y: 26, s: 4, c: "rgba(130,255,210,.7)" },
  { x: 57, y: 28, s: 3, c: "rgba(130,255,210,.6)" },
];

export default function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-[float_3.6s_ease-in-out_infinite]"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.s,
            height: d.s,
            background: d.c,
            boxShadow: `0 0 18px ${d.c}`,
            filter: "blur(.2px)",
            animationDelay: `${i * 0.22}s`,
          }}
        />
      ))}

      {/* haze en la zona de brillo */}
      <div className="absolute left-1/2 top-[18%] h-[240px] w-[320px] -translate-x-1/2 rounded-[36px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,240,140,.22),transparent_65%)] blur-[1px]" />

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); opacity: .6; }
          50% { transform: translateY(-14px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
