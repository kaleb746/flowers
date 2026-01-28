export default function Stars() {
  return (
    <>
      {/* Puntos finos */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,.14) 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
          backgroundPosition: "0 0",
        }}
      />
      {/* Puntos más grandes y dispersos */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,.10) 1.2px, transparent 1.2px)
          `,
          backgroundSize: "62px 62px",
          backgroundPosition: "12px 20px",
        }}
      />
      {/* Oscurecido suave en los bordes */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_35%,rgba(0,0,0,.45)_70%,rgba(0,0,0,.75)_100%)]" />
    </>
  );
}
