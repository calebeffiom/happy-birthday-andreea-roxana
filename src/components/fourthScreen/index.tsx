import background from "../../assets/images/start-background.jpg"
import aunt1 from "../../assets/images/aunt.png"
import aunt2 from "../../assets/images/auntlove.png"

function FourthScreen() {
    return (
        <div
            className="relative w-full h-screen overflow-hidden font-sans select-none"
            style={{ fontFamily: "'Fredoka', 'Quicksand', sans-serif" }}
        >
            {/* Google Fonts & Custom CSS Animations */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&family=Quicksand:wght@500;600;700&display=swap');

        @keyframes floatUp {
          0% { opacity: 1; transform: translateY(0) scale(0.8) rotate(0deg); }
          50% { opacity: 0.9; transform: translateY(-70px) scale(1.1) rotate(10deg); }
          100% { opacity: 0; transform: translateY(-140px) scale(1.3) rotate(-10deg); }
        }

        @keyframes gentleSway {
          0%, 100% { transform: rotate(-2deg) translateY(0px); }
          50% { transform: rotate(1deg) translateY(-6px); }
        }

        .animate-sway-left {
          animation: gentleSway 5s ease-in-out infinite;
        }

        .animate-sway-right {
          animation: gentleSway 6s ease-in-out infinite reverse;
        }

        .floating-heart {
          position: absolute;
          pointer-events: none;
          animation: floatUp 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          z-index: 50;
        }

        /* Washi Tape Effect */
        .washi-tape {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(2px);
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }

        /* Custom Scrollbar for Message Box */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(253, 242, 248, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fbcfe8;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f472b6;
        }
      `}</style>

            {/* 1. Background Image Layer (Fits your exact code snippet) */}
            <div className="absolute w-full h-screen z-0">
                <img
                    src={background || "aunt.JPG"}
                    className="object-cover w-full h-full"
                    alt="Background"
                />
            </div>

            {/* Overlay backdrop for ideal contrast and theme tint */}
            {/* <div className="absolute inset-0 backdrop-blur-[2px] z-10 pointer-events-none" /> */}

            {/* 2. Main Page Content Layer */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">

                {/* Header Title Banner */}
                <header className="text-center pt-2 sm:pt-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A3B32] drop-shadow-sm">
                        2 Anișori Plini de Iubire 🩷
                    </h1>
                </header>

                {/* Center Grid: Photos + Romanian Letter Box */}
                <main className="w-full flex-1 my-3 sm:my-5 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center min-h-0">

                    {/* Left Column: Polaroid Photos */}
                    <div className="md:col-span-5 flex flex-row md:flex-col items-center justify-center gap-3 sm:gap-4 max-h-full">

                        {/* Photo 1: aunt.JPG */}
                        <div className="animate-sway-left relative group w-1/2 md:w-56 max-w-[200px] md:max-w-none">
                            {/* Tape */}
                            <div className="washi-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 z-30 transform -rotate-3 border-x border-pink-200/60" />

                            <div className="bg-white p-2.5 sm:p-3 pb-5 sm:pb-6 rounded-2xl shadow-md border border-pink-100 transform -rotate-3 group-hover:rotate-0 transition-all duration-300">
                                <div className="overflow-hidden rounded-xl bg-pink-50 aspect-[4/5] relative">
                                    <img
                                        src={aunt1}
                                        alt="Andruța cu mătușa ei"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-center text-[11px] sm:text-xs font-semibold text-pink-700/80 mt-2 tracking-wide">
                                    ✨ Bebelușul mic ✨
                                </p>
                            </div>
                        </div>

                        {/* Photo 2: auntlove.JPG */}
                        <div className="animate-sway-right relative group w-1/2 md:w-56 max-w-[200px] md:max-w-none">
                            {/* Tape */}
                            <div className="washi-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 z-30 transform rotate-2 border-x border-pink-200/60" />

                            <div className="bg-white p-2.5 sm:p-3 pb-5 sm:pb-6 rounded-2xl shadow-md border border-pink-100 transform rotate-3 group-hover:rotate-0 transition-all duration-300">
                                <div className="overflow-hidden rounded-xl bg-pink-50 aspect-[4/5] relative">
                                    <img
                                        src={aunt2}
                                        alt="Andruța fericită în brațe"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <p className="text-center text-[11px] sm:text-xs font-semibold text-pink-700/80 mt-2 tracking-wide">
                                    🩷 Te iubesc enorm! 🩷
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Romanian Heartfelt Letter */}
                    <div className="md:col-span-7 h-full flex flex-col justify-center min-h-0">
                        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-7 shadow-xl border-2 border-pink-100/90 relative flex flex-col max-h-[50vh] md:max-h-[62vh]">

                            {/* Letter Header */}
                            <div className="flex items-center gap-2 pb-3 mb-2 border-b border-pink-100 flex-shrink-0">
                                <span className="text-xl">💌</span>
                                <h2 className="text-pink-600 font-bold text-base sm:text-lg">
                                    La mulți ani pentru cei 2 anișori iubita mea! 🩷
                                </h2>
                            </div>

                            {/* Scrollable Letter Text */}
                            <div className="overflow-y-auto custom-scrollbar pr-2 space-y-3.5 text-[#4A3A35] text-xs sm:text-sm md:text-base leading-relaxed">
                                <p>
                                    O parte din inima mea duce dorul bebelușului mic care erai, iar o altă parte simte o mică durere văzând, de la distanță, cât de repede crești. Mă doare că nu pot fi acolo să văd fiecare etapă a ta, fiecare cuvânt nou pe care îl înveți, fiecare mică schimbare și toate momentele prețioase care trec atât de repede și nu se mai întorc. Mi-aș dori atât de mult să fiu mai aproape, să te pot ține mai des în brațe și să fiu acolo pentru toate acele lucruri mici care, de fapt, înseamnă atât de mult.
                                </p>

                                <p>
                                    Dar, în același timp, inima mea este atât de fericită și de mândră să te vadă crescând atât de frumos, devenind o fetiță atât de frumoasă, isteață, dulce și specială.
                                </p>

                                <p>
                                    Poate că nu voi putea fi acolo pentru fiecare pas mic pe care îl faci, dar vreau să știi că voi fi mereu aici pentru tine, toată viața ta. În fiecare etapă, la fiecare vârstă, în fiecare vis, în fiecare bucurie și în fiecare moment greu. Voi fi mereu acolo să te încurajez, să te susțin și să-ți amintesc cât de iubită ești.
                                </p>

                                <div className="pt-2 font-bold text-pink-600 text-sm sm:text-base flex flex-wrap items-center justify-between gap-1">
                                    <span>La mulți ani Andruța! 🩷🥹</span>
                                    <span className="text-pink-500 font-normal italic text-xs sm:text-sm">
                                        Nu crește chiar atât de repede. I love you!
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </main>
            </div>
        </div>
    );
}

export default FourthScreen

