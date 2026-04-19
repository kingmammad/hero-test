const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-end justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/maryland-background.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/85" />
      <div className="relative z-10 w-full flex items-start  flex-col justify-start max-w-7xl mx-auto px-10 md:px-16 pb-20 md:pb-28">
        <h1
          className="text-white font-extrabold tracking-tighter leading-[1.06] mb-5"
          style={{ fontSize: "clamp(42px, 6vw, 80px)" }}
        >
          Everything Maryland.
          <br />
          <span className="text-amber-400">Every Day.</span>
        </h1>
        <div className="w-10 h-px bg-white/20 mb-6" />
        <p className="text-white/50 uppercase text-xs font-light tracking-[0.18em] mb-10">
          Powered by Maryland Born &amp; Raised
        </p>
        <div className="flex flex-row items-center gap-3">
          <button
            className="px-7 cursor-pointer py-3 bg-white text-gray-950 text-xs font-semibold uppercase tracking-[0.1em] border border-white transition-all duration-200 hover:bg-transparent hover:text-white"
            style={{ borderRadius: "2px" }}
          >
            Explore Maryland
          </button>
          <button
            className="px-7 cursor-pointer py-3 bg-transparent text-white/80 text-xs font-semibold uppercase tracking-[0.1em] border border-white/30 transition-all duration-200 hover:border-white/80 hover:text-white"
            style={{ borderRadius: "2px" }}
          >
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
