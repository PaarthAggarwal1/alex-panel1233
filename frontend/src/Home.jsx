import { useState, useEffect, useRef } from "react"
import { Link } from 'react-router-dom'
import slide1brick from "./assets/slide1brick.png"
import slide2brick from "./assets/slide2brick.png"
import slide3brick from "./assets/slide3brick.png"
import slide4brick from "./assets/slide4brick.png"
import slide1background from "./assets/slide1background.mp4"
import slide2background from "./assets/slide2background.mp4"
import slide3background from "./assets/slide3background.mp4"
import slide4background from "./assets/slide4background.mp4"
import { GlareCard } from "./glare-card-video"
/* ── Replace with your actual asset imports ── */
import logoWhite from "./assets/logo.webp"
import proj1 from "./assets/proj1.webp"
import proj2 from "./assets/proj2.webp"
import proj3 from "./assets/proj3.webp"
import proj4 from "./assets/proj4.webp"
import proj5 from "./assets/proj5.webp"
import proj6 from "./assets/proj6.webp"
import catSand from "./assets/catSand.webp"
import centerSand from "./assets/centerSand.webp"
import leftSand from "./assets/leftSand.webp"
import rightTopSand from "./assets/rightTopSand.webp"
import rightBotSand from "./assets/rightBotSand.png"
import catWood from "./assets/catWood.webp"
import centerWood from "./assets/centerWood.webp"
import leftWood from "./assets/leftWood.webp"
import rightTopWood from "./assets/rightTopWood.webp"
import rightBotWood from "./assets/rightBotWood.webp"
import catMarble from "./assets/catMarble.webp"
import centerMarble from "./assets/centerMarble.webp"
import leftMarble from "./assets/leftMarble.webp"
import rightTopMarble from "./assets/rightTopMarble.webp"
import rightBotMarble from "./assets/rightBotMarble.webp"
import iconCircular from "./assets/icon-circular.webp"
import iconHues from "./assets/icon-hues.webp"
import iconAligned from "./assets/icon-aligned.webp"
import iconSolar from "./assets/icon-solar.webp"
import iconPackaging from "./assets/icon-packaging.webp"
import iconSustainable from "./assets/icon-sustainable.webp"
import fireWebsite from "./assets/Fire_website.mp4"
import corregetedWebsite from "./assets/Corregeted_Website.mp4"
import PanelWebsite from "./assets/3d-Panel_Website.mp4"
import project from "./assets/project.webp"
import { useCallback } from "react"
import IndianOil from "./assets/Indian-Oil.webp"
import SBI from "./assets/SBI-1.webp"
import LIC from "./assets/LIC-Logo.webp"
import Dlf from "./assets/Dlf-Icon.webp"
import ITC from "./assets/ITC.webp"
import Oppo from "./assets/Oppo.webp"
import Gionee from "./assets/Gionee.webp"
import DLMetro from "./assets/DL-Metro.webp"
import Blackberry from "./assets/Blackberry.webp"
import Volkswagon from "./assets/Volkswagon.webp"
import Samsung from "./assets/Samsung.webp"
import Apollo from "./assets/Apollo.webp"
import Vivo from "./assets/Vivo-Logo.webp"
import Patanjali from "./assets/Patanjali.webp"
import Havellls from "./assets/Havellls.webp"
import LG from "./assets/LG.webp"
import KFC from "./assets/KFC.webp"
import HDFC from "./assets/HDFC-Bank.webp"
import Amrapali from "./assets/Amrapali-Group-1.webp"
import CPWD from "./assets/CPWD.webp"
import IGL from "./assets/IGL.webp"
import ESSAR from "./assets/ESSAR.webp"
import MahanagarGas from "./assets/Mahanagar-Gas.webp"
import PWD from "./assets/PWD-1.webp"
import NBCC from "./assets/NBCC.webp"
import MMRDA from "./assets/MMRDA-1.webp"
import IndianRailways from "./assets/Indian-Railways.webp"
import DelhiTourism from "./assets/Delhi-Tourism.webp"
import AAOI from "./assets/AAOI.webp"
import NRCC from "./assets/NRCC.webp"
import Website_CTA_BG from "./assets/Website_CTA_BG.webp"
import Website_CTA_Sky from "./assets/Website_CTA_Sky.jpg"
import Website_CTA_Cloud from "./assets/Website_CTA_Cloud.png"
import Website_CTA_Overlay from "./assets/Website_CTA_Overlay.png"
import Panel_Media_1 from "./assets/PanelMedia1.webp"
import Panel_Media_2 from "./assets/PanelMedia2.webp"
import Panel_Media_3 from "./assets/PanelMedia3.webp"
import Panel_Media_4 from "./assets/PanelMedia4.webp"
import Panel_Media_5 from "./assets/PanelMedia5.webp"
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Youtube from '@mui/icons-material/YouTube';
import Twitter from '@mui/icons-material/Twitter';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import greenbackground from "./assets/greenbackground.webp"

/* ── Keyframe styles (only what Tailwind can't do) ── */
const sliderStyles = `
  @keyframes kenBurns {
    from { transform: scale(1) translateZ(0); }
    to   { transform: scale(1.08) translateZ(0); }
  }
    @keyframes cloudDriftLeft {
          from { transform: translate3d(-6%, 0, 0); }
          to   { transform: translate3d(6%, 0, 0); }
    }
  @keyframes exitFade {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
  @keyframes slideContentIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .anim-ken-burns   { animation: kenBurns 15s linear forwards; }
    .anim-cloud-left   { animation: cloudDriftLeft 18s ease-in-out infinite alternate; }
  .anim-exit-fade   { transform: scale(1.04) translateZ(0); animation: exitFade 0.9s ease-in forwards; }
  .content-slide-in { animation: slideContentIn 0.7s ease-out forwards; animation-delay: 0.5s; opacity: 0; }
  .marquee-track    { display: flex; width: max-content; animation: marquee 28s linear infinite; }
  .marquee-track:hover { animation-play-state: paused; }
`;

const bentoStyles = `
  @keyframes kenBurnsThumb {
    from { transform: scale(1) translateZ(0); }
    to   { transform: scale(1.06) translateZ(0); }
  }
  @keyframes bentoFadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .bento-fade { animation: bentoFadeIn 0.5s ease-out forwards; }
  .bento-img-wrap { overflow: hidden; }
  .bento-img-wrap img { transition: transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94); display: block; width: 100%; height: 100%; object-fit: cover; }
  .bento-img-wrap:hover img { transform: scale(1.06); }
`;

/* ════════════════ DATA ════════════════ */
const slides = [
    { id: 1, title: "The Hues\nof Gaia", description: "ACP finishes reflect natural hues, harmonizing buildings beautifully with nature.", background: slide1background, brick: slide1brick },
    { id: 2, title: "Inspired by\nthe Earth", description: "Panels reflect nature's beauty, blending elemental design with advanced technology.", background: slide2background, brick: slide2brick },
    { id: 3, title: "Build Green\nToday", description: "Recycled aluminium and renewable energy help our ACP meet global green goals.", background: slide3background, brick: slide3brick },
    { id: 4, title: "Engineered\nfor Forever", description: "Durable ACP withstands weather, fire, UV, and impact for longevity.", background: slide4background, brick: slide4brick },
];

const projects = [
    {
        id: 1,
        thumb: proj1,
        hero: proj1,
        name: "MLC, Kalinga Bhawan",
        location: "Sambalpur, Odisha",
        area: "21,890 FT²",
        colors: ["Pure White (ALX-05)", "Amazon Hulk (ALX-5001)", "MM Gold (ALX-22)"],
    },
    {
        id: 2,
        thumb: proj2,
        hero: proj2,
        name: "Govt. Women's College",
        location: "Salkoot, Kupwara, J&K",
        area: "14,000 FT²",
        colors: ["Ivory White (ALX-32)", "Burgundy (ALX-28)"],
    },
    {
        id: 3,
        thumb: proj3,
        hero: proj3,
        name: "Circuit House",
        location: "Surat, Gujarat",
        area: "7,000 FT²",
        colors: ["ALX 6010", "ALX 6V022", "ALX 5011"],
    },
    {
        id: 4,
        thumb: proj4,
        hero: proj4,
        name: "Vivanta Tower",
        location: "Surat, Gujarat",
        area: "3,500 FT²",
        colors: ["Silver Black (ALX 26)", "Wheat (ALX 5016)", "Ultra White (ALX 57)"],
    },
    {
        id: 5,
        thumb: proj5,
        hero: proj5,
        name: "NFT House",
        location: "Surat, Gujarat",
        area: "13,528 FT²",
        colors: ["Pure White (ALX-05)", "Wheat (ALX 5016)"],
    },
    {
        id: 6,
        thumb: proj6,
        hero: proj6,
        name: "The Suaman Marvelous",
        location: "Mohali, Punjab",
        area: "5,000 FT²",
        colors: ["Grey Quartzite (NS 004)", "Silver Black (ALX 26)"],
    },
];

const categories = [
    {
        id: "sand",
        name: "Sand Series",
        accentBg: "linear-gradient(135deg, #4f3f35 0%, #85725b 100%)",
        accentBtn: "#3d2f1e",
        accentBtnText: "#fff",
        heroImg: catSand,  /* desert fort */
        leftImg: leftSand,
        centerImg: centerSand,
        rightTopImg: rightTopSand,
        rightBotImg: rightBotSand,
        tags: [
            { key: "Granular", desc: "Experience the tactile detail of a desert landscape, engineered into a resilient, high-performance panel." },
            { key: "Earthy", desc: "From sun-drenched dunes to coastal shores, our sand series captures the granular beauty and soft hues of the earth's natural palette." },
            { key: "Timeless", desc: "Create a sense of calm and stability with textures that evoke a feeling of nature's timeless elegance." },
            { key: "Resilient", desc: "Built to withstand the elements, these finishes offer the lasting beauty of the world's most enduring surfaces." },
        ],
    },
    {
        id: "wood",
        name: "Wood Series",
        accentBg: "linear-gradient(135deg, #7a2200 0%, #3f1100 100%)",
        accentBtn: "#c0440a",
        accentBtnText: "#fff",
        heroImg: catWood,   /* timber house */
        leftImg: leftWood,
        centerImg: centerWood,
        rightTopImg: rightTopWood,
        rightBotImg: rightBotWood,
        tags: [
            { key: "Natural", desc: "Experience the warmth and character of real wood, with the advanced performance of a modern composite panel." },
            { key: "Durable", desc: "Our wood series combines the rich, authentic look of natural timber with fire-resistant and weather-proof properties." },
            { key: "Warm", desc: "Create an inviting and comfortable atmosphere with our collection of wood textures, designed to feel as natural as they look." },
            { key: "Elegant", desc: "From the rich grains of mahogany to the rustic knots of aged oak, our finishes bring a touch of the forest's timeless beauty to any project." },
        ],
    },
    {
        id: "marble",
        name: "Stone & Marble Series",
        accentBg: "linear-gradient(135deg, #163463 0%, #091428 100%)",
        accentBtn: "#1a4a8a",
        accentBtnText: "#fff",
        heroImg: catMarble,
        leftImg: leftMarble,
        centerImg: centerMarble,
        rightTopImg: rightTopMarble,
        rightBotImg: rightBotMarble,
        tags: [
            { key: "Sophisticated", desc: "From the polished grandeur of marble to the raw power of volcanic rock, each panel brings an element of natural refinement to your architecture." },
            { key: "Refined", desc: "Elevate your design with the unparalleled sophistication of our stone and marble finishes. A touch of timeless luxury for modern spaces." },
            { key: "Classic", desc: "Inspired by the architectural wonders of ancient civilizations, our panels combine classical beauty with next-level durability." },
            { key: "Luxurious", desc: "Craft a statement of opulence and enduring quality with the deep veins and rich textures of our premium stone series." },
        ],
    },
];

const PanelMediaList = [
    {
        id: 1,
        title: "The Strength",
        subtitle: '"The alex advantage"',
        image: Panel_Media_1,
    },
    {
        id: 2,
        title: "Marble Collection",
        subtitle: "Magnificence",
        image: Panel_Media_2,
    },
    {
        id: 3,
        title: "New Experience",
        subtitle: "Inspired by nature",
        video:
            "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ",
        iframe: true,
    },
    {
        id: 4,
        title: "Innovative",
        subtitle: "Rainbow range",
        image: Panel_Media_3,
    },
    {
        id: 5,
        title: "Mirror & Sparkle ACPs",
        subtitle: "The Elegant Romanticism",
        image: Panel_Media_4,
    },
    {
        id: 6,
        title: "The Architecture",
        subtitle: "Designing Dreams",
        image: Panel_Media_5,
    }
];


const greenPoints = [
    { icon: iconCircular, title: "Circular by Nature", desc: "Aluminium is endlessly recyclable, ensuring efficient recovery and reuse at product's end-of-life." },
    { icon: iconHues, title: "Hues that Heal", desc: "High-SRI reflective finishes minimize heat absorption, lowering cooling loads and enabling climate-positive design." },
    { icon: iconAligned, title: "Aligned with Green Futures", desc: "Our ACPs meet global green standards — from LEED and IGBC to GRIHA certifications — seamlessly." },
    { icon: iconSolar, title: "Powered by the Sun", desc: "Powered by 3 MW captive solar energy, our manufacturing relies on renewables, reducing fossil fuel dependence." },
    { icon: iconPackaging, title: "Earth-conscious Packaging", desc: "Minimal, recyclable, and returnable packaging helps us reduce environmental impact beyond the panel." },
    { icon: iconSustainable, title: "Sustainable Design", desc: "Sustainable design reduces environmental impact by prioritizing efficiency, durability, and resource-conscious solutions." },
];

const clientLogos = [IndianOil, SBI, LIC, Dlf, ITC, Oppo, Gionee, DLMetro, Blackberry, Volkswagon, Samsung, Apollo, Vivo, Patanjali, Havellls, LG, KFC, HDFC, Amrapali, CPWD, IGL, ESSAR, MahanagarGas, PWD, NBCC, MMRDA, IndianRailways, DelhiTourism, AAOI, NRCC];

/* ════════════════ HOOKS ════════════════ */
function useScrollReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('[data-reveal]');
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.remove('opacity-0', 'translate-y-6');
                    e.target.classList.add('opacity-100', 'translate-y-0');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        els.forEach(el => obs.observe(el));
        return () => obs.disconnect();
    });
}

function useCounter(target, duration = 2000, inView) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / (duration / 16);
        const t = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(t); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(t);
    }, [inView, target, duration]);
    return count;
}

/* ════════════════ NAVBAR ════════════════ */
function Navbar() {

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-18 transition-all duration-400 bg-transparent`}>
            <img src={logoWhite} alt="Alex Panels" className="h-9" />
            <ul className="flex gap-10 list-none">
                {['HOME', 'ABOUT', 'CONTACT'].map(l => (
                    <li key={l}>
                        <a href={l === 'HOME' ? '/' : `/${l.toLowerCase()}`}
                            className={`text-xs tracking-widest font-normal transition-opacity duration-200 hover:opacity-60 no-underline text-white`}>
                            {l}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

/* ════════════════ HERO SLIDER ════════════════ */
function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlideIndex, setPrevSlideIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => goToSlide((currentSlide + 1) % slides.length), 15000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const goToSlide = (index) => {
        if (index === currentSlide || isTransitioning) return;
        setIsTransitioning(true);
        setPrevSlideIndex(currentSlide);
        setTimeout(() => setCurrentSlide(index), 50);
        setTimeout(() => { setPrevSlideIndex(null); setIsTransitioning(false); }, 1000);
    };

    const current = slides[currentSlide];
    const prev = prevSlideIndex !== null ? slides[prevSlideIndex] : null;

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">

            {/* Outgoing video */}
            {prev && (
                <video key={"out-" + prevSlideIndex} autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover anim-exit-fade"
                    style={{ zIndex: 1 }}>
                    <source src={prev.background} type="video/mp4" />
                </video>
            )}

            {/* Incoming video — Ken Burns */}
            <video key={"in-" + currentSlide} autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover anim-ken-burns"
                style={{ zIndex: 2 }}>
                <source src={current.background} type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" style={{ zIndex: 3 }} />

            {/* Content */}
            <div className="relative h-full flex items-center px-[6%]" style={{ zIndex: 10 }}>
                <div className="max-w-6xl mx-auto w-full grid grid-cols-3 items-center gap-8">

                    {/* Left */}
                    <div key={"left-" + currentSlide} className="content-slide-in text-white">
                        <p className="text-[11px] tracking-[0.18em] mb-4 opacity-70">PRODUCT RANGES</p>
                        <h1 className="font-['Cormorant_Garamond'] text-[clamp(2.8rem,5vw,4.5rem)] font-light leading-[1.1] mb-6 whitespace-pre-line">
                            {current.title}
                        </h1>
                        <p className="text-[13px] opacity-60">
                            {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
                        </p>
                    </div>

                    {/* Center brick */}
                    <div key={"center-" + currentSlide} className="content-slide-in flex justify-center relative" style={{ zIndex: 20 }}>
                        <img src={current.brick} alt="Product" className="max-w-2xl h-auto object-contain -mb-8" />
                    </div>

                    {/* Right */}
                    <div key={"right-" + currentSlide} className="content-slide-in text-white text-right">
                        <p className="text-base text-white/75 mb-8 leading-relaxed">{current.description}</p>
                        <a href="/download-brochure"
                            className="inline-block px-8 py-3 bg-white text-black text-[11px] font-semibold tracking-widest no-underline hover:bg-neutral-200 transition-colors duration-200">
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>

            {/* Nav dots */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2.5" style={{ zIndex: 20 }}>
                {slides.map((_, i) => (
                    <button key={i} onClick={() => goToSlide(i)} disabled={isTransitioning}
                        className={`h-1.5 rounded-full border-none cursor-pointer transition-all duration-300 ${i === currentSlide ? 'bg-white w-7' : 'bg-white/35 w-1.5'
                            } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`} />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white text-[11px] tracking-[0.18em]" style={{ zIndex: 20 }}>
                CLICK HERE TO EXPLORE MORE
            </div>

            {/* Prev arrow */}
            {/* <button onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        disabled={isTransitioning}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-white opacity-75 hover:opacity-100 transition-opacity duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ zIndex: 20 }}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button> */}

            {/* Next arrow */}
            {/* <button onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        disabled={isTransitioning}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-white opacity-75 hover:opacity-100 transition-opacity duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ zIndex: 20 }}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
        </div>
    );
}

/* ════════════════ ABOUT STRIP ════════════════ */
function AboutStrip() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const c1 = useCounter(1000, 2000, inView);
    const c2 = useCounter(20, 1600, inView);
    const c3 = useCounter(2, 1400, inView);
    const c4 = useCounter(4000, 2200, inView);

    const stats = [
        { num: c1, suffix: '+', label: 'Projects Completed' },
        { num: c2, suffix: '+ Years', label: 'Industry Experience' },
        { num: c3, suffix: ' Million+', label: 'Sq. ft. of Manufacturing Space' },
        { num: c4, suffix: '+', label: 'Dealers Across India' },
    ];

    return (
        <section className="py-24 px-[8%] bg-[#111111] h-screen flex items-center" ref={ref}>
            <div className="max-w-7xl mx-auto items-center flex flex-col text-center justify-center">

                <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700">
                    <p className="text-5xl text-[#eeeeee] mb-6 font-light">About</p>
                    <p className="text-lg leading-[1.85] text-white mb-4 font-light">
                        Alex Panels is redefining façades with premium Aluminium Composite Panels (ACP) that blend style, strength, and sustainability.
                    </p>

                    <p className="text-lg leading-[1.85] text-[#eeeeee] font-light">
                        Backed by 15 years of innovation, we craft ACP solutions that champion fire safety, minimize environmental impact, and stand strong against the harshest weather.
                    </p>

                    <p className="text-lg leading-[1.85] text-[#eeeeee] mb-4 font-light">
                        From stone, metal, and wood textures to contemporary mattes and glosses, our panels inspire façades that last.
                    </p>
                    <a href="/about" className="text-[11px] tracking-[0.15em] font-semibold text-[#eeeeee] no-underline border-b border-white pb-0.5">
                        READ MORE
                    </a>
                </div>

                <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap lg:flex-row mt-7 max-w-7xl gap-x-32">
                    {stats.map(({ num, suffix, label }) => (
                        <div key={label} className="text-center">
                            <div className="font-['Cormorant_Garamond'] text-3xl font-extralight text-[#eeeeee]">{num}{suffix}</div>
                            <p className="text-lg text-[#eeeeee] mt-1.5 leading-snug ">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ════════════════ PRODUCT CATEGORIES ════════════════ */
function ProductCategories() {
    const [activeIdx, setActiveIdx] = useState(0);
    const cat = categories[activeIdx];
    const prev = () => setActiveIdx((activeIdx - 1 + categories.length) % categories.length);
    const next = () => setActiveIdx((activeIdx + 1) % categories.length);
    const [hoverPrev, setHoverPrev] = useState(false);
    const [hoverNext, setHoverNext] = useState(false);

    const [t0, t1, t2, t3] = cat.tags;

    return (
        <>
            <style>{bentoStyles}</style>

            <section className="bg-[#111111]">

                {/* Bento grid — items-stretch ensures equal column heights */}
                <div
                    key={cat.id}
                    className="bento-fade max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 items-stretch gap-4 p-4"
                >

                    {/* ── COL 1 ── */}
                    <div className="flex flex-col gap-4 h-full">

                        {/* Hero image with title */}
                        <div className="bento-img-wrap relative rounded-2xl overflow-hidden" style={{ height: 360 }}>
                            <img src={cat.heroImg} alt={cat.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="font-['Cormorant_Garamond'] text-4xl font-light text-white leading-tight">{cat.name}</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 flex-1">
                            <div className="gap-4 flex flex-col">
                                {/* Tag 0 — text card */}
                                <div className="rounded-2xl flex flex-col justify-between p-6 flex-1" style={{ background: cat.accentBg, minHeight: 180 }}>
                                    <h4 className="font-['Cormorant_Garamond'] text-3xl font-light text-white mb-3">{t0.key}</h4>
                                    <p className="text-[13px] text-white/65 leading-relaxed">{t0.desc}</p>
                                </div>

                                {/* Download brochure */}
                                <a
                                    href="/download-brochure"
                                    className="rounded-2xl flex items-center justify-center py-5 text-[11px] font-semibold tracking-[0.18em] no-underline transition-opacity duration-200 hover:opacity-80"
                                    style={{ background: cat.accentBg, color: cat.accentBtnText }}
                                >
                                    DOWNLOAD BROCHURE
                                </a>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Left bottom image — flex-1 fills remaining height */}
                                <div className="bento-img-wrap rounded-2xl overflow-hidden flex-1" style={{ minHeight: 200 }}>
                                    <img src={cat.leftImg} alt="" className="w-full h-full object-cover" />
                                </div>

                                {/* Prev / Next */}
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={prev}
                                        onMouseEnter={() => setHoverPrev(true)}
                                        onMouseLeave={() => setHoverPrev(false)}
                                        className="rounded-2xl py-5 text-[11px] font-semibold tracking-[0.18em] border border-white/20 text-black transition-colors duration-200"
                                        style={{ background: hoverPrev ? cat.accentBtn : 'white', color: hoverPrev ? 'white' : 'black' }}
                                    >
                                        PREVIOUS
                                    </button>
                                    <button
                                        onClick={next}
                                        onMouseEnter={() => setHoverNext(true)}
                                        onMouseLeave={() => setHoverNext(false)}
                                        className="rounded-2xl py-5 text-[11px] font-semibold tracking-[0.18em] border border-white/20 text-black transition-colors duration-200"
                                        style={{ background: hoverNext ? cat.accentBtn : 'white', color: hoverNext ? 'white' : 'black' }}
                                    >
                                        NEXT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── COL 2 ── */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="gap-4 flex flex-col">
                            {/* Tag 1 */}
                            <div className="rounded-2xl p-6" style={{ background: cat.accentBg, minHeight: 160 }}>
                                <h4 className="font-['Cormorant_Garamond'] text-3xl font-light text-white mb-3">{t1.key}</h4>
                                <p className="text-[13px] text-white/65 leading-relaxed">{t1.desc}</p>
                            </div>

                            {/* Center image — flex-1 fills remaining height */}
                            <div className="bento-img-wrap rounded-2xl overflow-hidden flex-1" style={{ minHeight: 200 }}>
                                <img src={cat.centerImg} alt="" className="w-full h-full object-cover" />
                            </div>

                            {/* Tag 2 */}
                            <div className="rounded-2xl p-6" style={{ background: cat.accentBg, minHeight: 140 }}>
                                <h4 className="font-['Cormorant_Garamond'] text-3xl font-light text-white mb-2">{t2.key}</h4>
                                <p className="text-[13px] text-white/65 leading-relaxed">{t2.desc}</p>
                            </div>
                        </div>

                        <div className="grid grid-rows-2 gap-4">
                            {/* Right top — large image */}
                            <div className="bento-img-wrap rounded-2xl overflow-hidden">
                                <img src={cat.rightTopImg} alt="" className="w-full h-full object-cover" />
                            </div>

                            {/* Tag 3 */}
                            <div
                                className="bento-img-wrap rounded-2xl overflow-hidden relative flex flex-col"
                                style={{ background: cat.accentBg }}
                            >
                                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <h4 className="font-['Cormorant_Garamond'] text-3xl font-light text-white mb-3">{t3.key}</h4>
                                        <p className="text-[13px] text-white/70 leading-relaxed">{t3.desc}</p>
                                    </div>
                                </div>
                                <img src={cat.rightBotImg} alt="" className="w-1/2 object-bottom" />
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    );
}

/* ════════════════ WHAT WE OFFER ════════════════ */
function WhatWeOffer() {
    return (
        <section className="py-24 px-[8%] bg-[#111111]">
            <div className="max-w-7xl mx-auto">
                <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 mb-14">
                    <p className="text-lg tracking-[0.18em] text-white uppercase mb-2 font-extralight">What We Offer</p>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row gap-6 justify-between">
                        <p className="text-7xl text-white mb-4 font-light flex items-center">Corrugated Panels</p>
                        <video autoPlay muted loop playsInline className="object-cover rounded-lg">
                            <source src={corregetedWebsite} type="video/mp4" />
                        </video>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 justify-between">
                        <video autoPlay muted loop playsInline className="object-cover rounded-lg">
                            <source src={PanelWebsite} type="video/mp4" />
                        </video>
                        <p className="text-7xl text-white mb-4 font-light flex items-center">3D Panels</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 justify-between">
                        <p className="text-7xl text-white mb-4 font-light flex items-center">FR Grade Panels</p>
                        <video autoPlay muted loop playsInline className="object-cover rounded-lg">
                            <source src={fireWebsite} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

const TOTAL = projects.length + 1;

/* ════════════════ PROJECTS ════════════════ */
function Projects() {
    const [slide, setSlide] = useState(0);
    const [animDir, setAnimDir] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const id = "ps-styles";
        if (document.getElementById(id)) return;
        const s = document.createElement("style");
        s.id = id;
        s.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500;600&display=swap');
            .font-cormorant { font-family: 'Cormorant Garamond', serif; }
            .font-jost      { font-family: 'Jost', sans-serif; }
            @keyframes ps-left  { from { opacity:0; transform:translateX(36px);  } to { opacity:1; transform:translateX(0); } }
            @keyframes ps-right { from { opacity:0; transform:translateX(-36px); } to { opacity:1; transform:translateX(0); } }
            .ps-anim-left  { animation: ps-left  0.4s cubic-bezier(.25,.46,.45,.94) both; }
            .ps-anim-right { animation: ps-right 0.4s cubic-bezier(.25,.46,.45,.94) both; }
            .hero-left-fade::after {
                content: ''; position: absolute; inset: 0;
                background: linear-gradient(to right, transparent 68%, #111 100%);
                pointer-events: none;
            }
            .thumb-icon {
                position: absolute; top: 50%; left: 50%;
                transform: translate(-50%,-50%) scale(0.7);
                opacity: 0; transition: opacity .3s, transform .3s;
                width: 36px; height: 36px;
                border: 1.5px solid rgba(255,255,255,.8); border-radius: 50%;
                display: flex; align-items: center; justify-content: center;
                color: #fff; font-size: 13px; pointer-events: none;
            }
            .pg-thumb:hover .thumb-icon { opacity:1; transform:translate(-50%,-50%) scale(1); }
            .pg-thumb img { transition: transform .6s cubic-bezier(.25,.46,.45,.94); }
            .pg-thumb:hover img { transform: scale(1.08); }
            .pg-thumb .thumb-overlay { opacity:0; transition: opacity .3s; }
            .pg-thumb:hover .thumb-overlay { opacity:1; }
            .ps-strip-active { outline: 1.5px solid rgba(255,255,255,.65); outline-offset: 2px; }
        `;
        document.head.appendChild(s);
    }, []);

    const goTo = useCallback((idx, dir) => {
        if (isAnimating) return;
        const clamped = ((idx % TOTAL) + TOTAL) % TOTAL;
        setAnimDir(dir);
        setIsAnimating(true);
        setTimeout(() => {
            setSlide(clamped);
            setAnimDir(null);
            setIsAnimating(false);
        }, 400);
    }, [isAnimating]);

    const prev = useCallback(() => goTo(slide - 1, "right"), [slide, goTo]);
    const next = useCallback(() => goTo(slide + 1, "left"), [slide, goTo]);

    useEffect(() => {
        const h = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", h);
        return () => window.removeEventListener("keydown", h);
    }, [prev, next]);

    const animClass = animDir === "left" ? "ps-anim-left" : animDir === "right" ? "ps-anim-right" : "";

    // current project (only valid when slide >= 1)
    const p = slide > 0 ? projects[slide - 1] : null;

    return (
        <div
            className="relative w-full overflow-hidden bg-[#111] font-jost"
            style={{ height: "100svh", minHeight: 520 }}
        >

            {/* ── Background: B&W panel photo on intro, hero image on project slides ── */}
            <div className="absolute inset-0 transition-opacity duration-500">
                {slide === 0 ? (
                    // Intro: greyscale architectural photo fills the LEFT half visually
                    <img
                        key="intro-bg"
                        src={project}
                        alt=""
                        style={{ left: 0 }}
                    />
                ) : (
                    // Project: full bleed hero
                    <>
                        <img
                            key={p.id}
                            src={p.hero}
                            alt={p.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
                    </>
                )}
            </div>

            {/* ── Slide content (keyed so it re-animates on every change) ── */}
            <div key={slide} className={`relative z-10 h-full ${animClass}`}>

                {/* ════════════════════════════════
            SLIDE 0 — Intro / gallery page
        ════════════════════════════════ */}
                {slide === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                        {/* Left col — just a spacer so the greyscale bg shows through */}
                        <div className="relative hero-left-fade h-full hidden md:block" />

                        {/* Right col — title + grid */}
                        <div className="flex flex-col justify-center px-6 py-10 md:px-14 overflow-y-auto">
                            <p className="text-6xl text-[#fff] mb-4 font-extralight">Panel of India</p>
                            <p className="text-md tracking-[0.25em] text-[#666] uppercase mb-8 font-jost">Some of our best work</p>

                            {/* 3×2 thumbnail grid — click jumps to that project slide */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                                {projects.map((proj, i) => (
                                    <div
                                        key={proj.id}
                                        className="pg-thumb group relative aspect-[4/3] overflow-hidden cursor-pointer rounded-[4px]"
                                        onClick={() => goTo(i + 1, "left")}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === "Enter" && goTo(i + 1, "left")}
                                        aria-label={`View ${proj.name}`}
                                    >
                                        <img src={proj.thumb} alt={proj.name} loading="lazy" className="w-full h-full object-cover" />
                                        <div className="thumb-overlay absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-3">
                                            <span className="text-[11px] text-white tracking-[0.08em] font-medium font-jost">{proj.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ════════════════════════════════
            SLIDES 1–N — Project detail
        ════════════════════════════════ */}
                {slide > 0 && p && (
                    <div className="flex flex-col md:flex-row h-full">

                        {/* LEFT — project info */}
                        <div className="flex flex-col justify-end flex-1 px-6 pb-20 md:px-14 md:pb-16">
                            <p className="text-[10px] tracking-[0.35em] text-white/45 uppercase mb-4 font-jost">
                                Panel of India — {String(slide).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                            </p>
                            <h2 className="font-cormorant text-[clamp(30px,5vw,68px)] font-light text-white leading-[1.05] mb-2">
                                {p.name}
                            </h2>
                            <p className="font-cormorant text-[clamp(15px,2.2vw,28px)] font-light text-white/60 mb-7">
                                {p.location}
                            </p>
                            <div className="text-[11px] md:text-[12px] text-white/45 tracking-[0.04em] leading-[2.2] mb-8 font-jost">
                                <div>
                                    <span className="text-white/75 font-medium">Area</span>
                                    <span className="mx-2 text-white/25">·</span>{p.area}
                                </div>
                                <div>
                                    <span className="text-white/75 font-medium">Colors Used</span>
                                    <span className="mx-2 text-white/25">,</span>
                                    {p.colors.map((c) => `${c}`).join(", ")}
                                </div>
                            </div>
                            <button className="inline-flex items-center gap-3 px-7 py-3 border border-white/35 text-white text-[10px] font-semibold tracking-[0.22em] uppercase bg-transparent hover:bg-white/10 hover:border-white/65 transition-all duration-200 w-fit cursor-pointer font-jost" onClick={setSlide.bind(null, 0)}>
                                View Project ↗
                            </button>
                        </div>

                        {/* RIGHT — color swatches + thumb strip */}
                        <div className="absolute top-6 right-16 md:static md:flex md:flex-col md:items-end md:justify-between md:px-10 md:py-12">

                            {/* Thumbnail strip — desktop */}
                            <div className="hidden md:flex gap-[5px] mt-auto">
                                {projects.map((proj, i) => (
                                    <button
                                        key={proj.id}
                                        onClick={() => goTo(i + 1, i + 1 > slide ? "left" : "right")}
                                        aria-label={proj.name}
                                        className={`w-[62px] h-[42px] overflow-hidden rounded-[3px] cursor-pointer transition-all duration-200
                      ${i + 1 === slide ? "opacity-100 ps-strip-active" : "opacity-40 hover:opacity-70"}`}
                                    >
                                        <img src={proj.thumb} alt={proj.name} className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* ── PREV / NEXT ── */}
            <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/35 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/15 hover:border-white/55 transition-all duration-200 cursor-pointer"
            >←</button>
            <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/35 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/15 hover:border-white/55 transition-all duration-200 cursor-pointer"
            >→</button>

            {/* ── Dot indicators (0 = intro, 1..N = projects) ── */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-[7px]">
                {Array.from({ length: TOTAL }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i, i > slide ? "left" : "right")}
                        aria-label={i === 0 ? "Gallery overview" : `Project ${i}`}
                        className={`rounded-full cursor-pointer transition-all duration-300 border-0 p-0
              ${i === slide ? "w-5 h-[5px] bg-white/85" : "w-[5px] h-[5px] bg-white/25 hover:bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
}

/* ════════════════ CLIENTELE MARQUEE ════════════════ */
function Clientele() {
    const doubled = [...clientLogos, ...clientLogos];
    return (
        <section className="py-16 bg-[#111111] overflow-hidden">
            <div data-reveal className="opacity-0 translate-y-6 transition-all duration-1000 text-center mb-10">
                <p className="text-[11px] tracking-[0.18em] text-neutral-400 uppercase mb-2">Clientele</p>
                <h2 className="font-['Cormorant_Garamond'] text-5xl font-light text-white">Trusted By</h2>
            </div>
            <div className="overflow-hidden">
                <div className="marquee-track">
                    {doubled.map((src, i) => (
                        <div key={i} className="flex-shrink-0 w-36 h-16 mx-8 flex items-center justify-center">
                            <img src={src} alt=""
                                className="max-w-[110px] max-h-12 object-contain grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ════════════════ CTA BAND ════════════════ */
function CtaBand() {
    return (
        <>
            <div data-reveal className={`relative overflow-hidden transition-all duration-700 bg-[linear-gradient(rgba(175,178,171,0)_0%,rgb(175,178,171)_85%,rgb(175,178,171)_100%)] min-h-screen`}>
                <img src={Website_CTA_Sky} alt="" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_42%,rgba(175,178,171,0.12)_58%,rgba(175,178,171,0.96)_100%)]" />
                <img src={Website_CTA_BG} alt="" className="pt-24 absolute inset-x-0 bottom-0 w-full h-full object-cover object-top z-20" />
                <img src={Website_CTA_Cloud} alt="" className="absolute left-1/2 top-[16%] z-24 w-[220%] max-w-none h-[26%] -translate-x-1/2 object-contain object-center anim-cloud-left pointer-events-none" />
                <img src={Website_CTA_Overlay} alt="" className="absolute left-0 bottom-0 -mb-20 z-50 w-2xl object-contain object-bottom-left pointer-events-none" />
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center gap-8">
                    <div className="flex flex-col items-center gap-8 max-w-5xl">
                        <p className="text-[11px] tracking-[0.18em] text-neutral-400 uppercase mb-2">Match Your Shade</p>
                        <h3 className="font-['Cormorant_Garamond'] text-[2rem] font-light text-white max-w-[560px] leading-snug">
                            Bring your design vision to life with our in-house colour-coating line.
                        </h3>
                    </div>
                    <a
                        href="/connect-with-us"
                        className="inline-flex flex-shrink-0 px-9 py-3.5 border border-white text-white text-[11px] font-semibold tracking-widest no-underline hover:bg-white hover:text-neutral-900 transition-all duration-200 whitespace-nowrap"
                    >
                        START YOUR CUSTOM MATCH
                    </a>
                </div>
            </div>
        </>
    );

}

/* ════════════════ VIDEO IFRAME ════════════════ */
function VideoSection() {
    return (
        <section className="py-24 px-[8%] bg-black">
            <GlareCard>
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/h7qUzJrXOZU?&autoplay=1&loop=true&mute=1&playsinline=true&enablejsapi=1&controls=0&showinfo=0&modestbranding=1&wmode=opaque&muted=true"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </GlareCard>
        </section>
    );
}

/* ════════════════ Alex Panel Media ════════════════ */
function PanelMedia() {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % PanelMediaList.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + PanelMediaList.length) % PanelMediaList.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [current]);


    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Slides */}
            {PanelMediaList.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ${current === index
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-110 z-0"
                        }`}
                >
                    {/* Background Image */}
                    {/* Background */}
                    {slide.iframe ? (
                        <div className="absolute inset-0 overflow-hidden">
                            <iframe
                                className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                src={slide.video}
                                title={slide.title}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/55" />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

                    {/* Content */}
                    <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
                        <div className="overflow-hidden">
                            <h1 className="animate-fadeUp text-4xl font-bold tracking-wide text-white md:text-7xl">
                                {slide.title}
                            </h1>
                        </div>

                        <p className="mt-6 animate-fadeUp text-lg tracking-[4px] text-gray-200 uppercase md:text-2xl">
                            {slide.subtitle}
                        </p>

                        {/* Social Icons */}
                        {slide.social && (
                            <div className="mt-8 flex items-center gap-5">
                                <button className="rounded-full border border-white/20 p-4 text-white transition hover:bg-white hover:text-black">
                                    <Youtube />
                                </button>

                                <button className="rounded-full border border-white/20 p-4 text-white transition hover:bg-white hover:text-black">
                                    <Twitter />
                                </button>

                                <button className="rounded-full border border-white/20 p-4 text-white transition hover:bg-white hover:text-black">
                                    <Facebook />
                                </button>

                                <button className="rounded-full border border-white/20 p-4 text-white transition hover:bg-white hover:text-black">
                                    <Instagram />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
                <ChevronLeft size={30} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
                <ChevronRight size={30} />
            </button>

            {/* Pagination */}
            <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${current === index
                            ? "w-10 bg-white"
                            : "w-3 bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

/* ════════════════ GREEN SECTION ════════════════ */
function GreenSection() {
    return (
        <section className={`py-24 px-[8%] bg-black relative overflow-hidden`}>
            <div className="absolute inset-0">
                <img src={greenbackground} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="max-w-[1200px] mx-auto">
                <div data-reveal className="opacity-0 translate-y-6 transition-all duration-700 text-center mb-14">
                    <h2 className="font-['Cormorant_Garamond'] text-5xl font-light text-white mb-4">
                        Alex Panels: Enabling a Green Reality
                    </h2>
                    <p className="text-[15px] text-white max-w-xl mx-auto leading-relaxed">
                        When you choose Alex Panels, you're not just building for today — you're investing in a greener tomorrow.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {greenPoints.map((g, i) => (
                        <div key={i} data-reveal
                            className="opacity-0 translate-y-6 transition-all duration-700 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col justify-center items-center text-center">
                            <img src={g.icon} alt="" className="w-11 h-11 object-contain mb-4" />
                            <h4 className="font-['Cormorant_Garamond'] text-[1.2rem] font-normal text-white mb-2">{g.title}</h4>
                            <p className="text-[13px] text-white leading-[1.75]">{g.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ════════════════ FOOTER ════════════════ */
function Footer() {
    const productRange = ['ACP (Aluminium Composite Panel)', 'FR ACP', 'Corrugated Panels', 'Honeycomb Panels', 'Louvers', '3D Façade Systems', 'HPL'];
    const quickLinks = [['About', '/about'], ['Contact', '/contact']];


    return (
        <footer className="bg-[#111] text-neutral-400 text-[13px] px-[8%] pt-16 pb-8">
            <div className="grid grid-cols-3 gap-12 mb-12">

                {/* Brand col */}
                <div>
                    <img src={logoWhite} alt="Alex Panels" className="h-8 mb-5 brightness-[10]" />
                    <p className="leading-[1.8] mb-3">
                        999, Central Hopetown, Jamanpur road,<br />Selaqui Industrial Area,<br />Dehradun, India – 248 011
                    </p>
                    <a href="mailto:info@alexpanel.com" className="block text-neutral-400 no-underline hover:text-white transition-colors duration-200 mb-1">info@alexpanel.com</a>
                    <a href="tel:+919311391196" className="block text-neutral-400 no-underline hover:text-white transition-colors duration-200">+91 93113 91196</a>
                </div>

                {/* Product Range */}
                <div>
                    <p className="text-white text-[11px] tracking-[0.15em] uppercase mb-5">Product Range</p>
                    <ul className="list-none flex flex-col gap-2">
                        {productRange.map(p => (
                            <li key={p}><a href="/products" className="text-neutral-400 no-underline hover:text-white transition-colors duration-200">{p}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <p className="text-white text-[11px] tracking-[0.15em] uppercase mb-5">Quick Links</p>
                    <ul className="list-none flex flex-col gap-2">
                        {quickLinks.map(([label, href]) => (
                            <li key={label}><a href={href} className="text-neutral-400 no-underline hover:text-white transition-colors duration-200">{label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex justify-between">
                <span>Alex Panel © 2026 all rights reserved</span>
                <span>
                    <ul className="list-none flex items-center gap-4">
                        <li><a href="https://www.facebook.com/alexpanel" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200"><Facebook /></a></li>
                        <li><a href="https://www.instagram.com/alexpanel" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200"><Instagram /></a></li>
                        <li><a href="https://www.instagram.com/alexpanel" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200"><Youtube /></a></li>
                        <li><a href="https://www.twitter.com/alexpanel" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors duration-200"><LinkedIn /></a></li>
                    </ul>
                </span>
            </div>
        </footer>
    );
}

/* ════════════════ HOME ════════════════ */
const Home = () => {
    useScrollReveal();
    return (
        <>
            <style>{sliderStyles}</style>
            <Navbar />
            <HeroSlider />
            <AboutStrip />
            <ProductCategories />
            <WhatWeOffer />
            <Projects />
            <Clientele />
            <CtaBand />
            <VideoSection />
            <PanelMedia />
            <GreenSection />
            <Footer />
        </>
    );
};

export default Home;
