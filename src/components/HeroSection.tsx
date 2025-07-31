import videoSrc from '../assets/herosection.mp4';

export default function HeroSection() {
  return (
    <section className="relative w-screen h-[65vh] overflow-hidden bg-black">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido centrado */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 md:px-12">
        {/* Título principal */}
        <h1 className="text-white font-extrabold uppercase text-4xl md:text-6xl tracking-wide drop-shadow-lg mb-4 select-none">
          WSA Agencies
        </h1>

        {/* Subtítulo destacado */}
        <p className="text-yellow-400 font-semibold text-xl md:text-2xl mb-6 italic drop-shadow-md select-none">
          “An Independent Ship Agent”
        </p>

        {/* Frase descriptiva */}
        <p className="text-white max-w-3xl text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md select-none">
          A partner at every step of the way.
          <br />
          Growing Together!
        </p>

        {/* Frase final destacada */}
        <span className="text-yellow-400 font-semibold text-xl md:text-2xl mb-6 italic drop-shadow-md select-none">
          ONLY AS AGENT!
        </span>
      </div>
    </section>
  );
}
