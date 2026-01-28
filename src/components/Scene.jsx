import Flowers from "./art/Flowers";
import Fireflies from "./art/Fireflies";
import Stars from "./art/Stars";

export default function Scene() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070b10]">
      <Stars />

      {/* Vignette + haze vertical (como spotlight) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,240,140,.14),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(30,80,90,.16),transparent_55%),radial-gradient(circle_at_50%_60%,rgba(0,0,0,.72),rgba(0,0,0,.9))]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <div className="relative w-full max-w-5xl">
          <Fireflies />
          <Flowers />

          {/* Texto atravesando la escena (igual a la referencia) */}
          <div className="pointer-events-none absolute left-1/2 top-[68%] w-[120%] -translate-x-1/2 -translate-y-1/2">
            <p className="select-none text-center font-semibold tracking-[0.35em] text-[#c7c84a] text-[12px] sm:text-[14px] md:text-[16px] opacity-90">
              PARA TI SUZ, TE AMO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
