import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import { Link } from 'react-router-dom';
import slide1brick from "./assets/slide1brick.png"
import slide2brick from "./assets/slide2brick.png"
import slide3brick from "./assets/slide3brick.png"
import slide4brick from "./assets/slide4brick.png"
import slide1background from "./assets/slide1background.mp4"
import slide2background from "./assets/slide2background.mp4"
import slide3background from "./assets/slide3background.mp4"
import slide4background from "./assets/slide4background.mp4"

const slideStyles = `
  @keyframes exitZoomBlur {
    from {
      transform: scale(1) translateZ(0);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: scale(1.12) translateZ(0);
      opacity: 0;
      filter: blur(14px);
    }
  }

  @keyframes enterZoomBlur {
    from {
      transform: scale(0.88) translateZ(0);
      opacity: 0;
      filter: blur(14px);
    }
    to {
      transform: scale(1) translateZ(0);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slideContentIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .content-slide-in {
    animation: slideContentIn 0.6s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
  }
`;

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlideIndex, setPrevSlideIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const slides = [
        {
            id: 1,
            title: "The Hues of Gaia",
            description: "ACP finishes reflect natural hues, harmonizing buildings beautifully with nature.",
            background: slide1background,
            brick: slide1brick,
        },
        {
            id: 2,
            title: "Inspired by the Earth",
            description: "Panels reflect nature's beauty, blending elemental design with advanced technology.",
            background: slide2background,
            brick: slide2brick,
        },
        {
            id: 3,
            title: "Build Green Today",
            description: "Recycled aluminium and renewable energy help our ACP meet global green goals.",
            background: slide3background,
            brick: slide3brick,
        },
        {
            id: 4,
            title: "Engineered for Forever",
            description: "Durable ACP withstands weather, fire, UV, and impact for longevity.",
            background: slide4background,
            brick: slide4brick,
        },
    ];

    // Auto-advance slides every 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToSlide((currentSlide + 1) % slides.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    const goToSlide = (index) => {
        if (index !== currentSlide && !isTransitioning) {
            setIsTransitioning(true);
            setPrevSlideIndex(currentSlide);

            setTimeout(() => {
                setCurrentSlide(index);
            }, 50);

            setTimeout(() => {
                setPrevSlideIndex(null);
                setIsTransitioning(false);
            }, 1200);
        }
    };

    const nextSlide = () => {
        goToSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const currentSlideData = slides[currentSlide];
    const prevSlideData = prevSlideIndex !== null ? slides[prevSlideIndex] : null;

    return (
        <>
            <style>{slideStyles}</style>
            <Navbar />
            <div className="relative min-h-screen w-full overflow-hidden bg-black">

                {/* Outgoing video — zooms out and blurs away */}
                {prevSlideData && (
                    <video
                        key={"out-" + prevSlideIndex}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            animation: "exitZoomBlur 1s cubic-bezier(0.4,0,0.2,1) forwards",
                            zIndex: 1,
                        }}
                    >
                        <source src={prevSlideData.background} type="video/mp4" />
                    </video>
                )}

                {/* Incoming video — zooms in from slightly smaller and un-blurs */}
                <video
                    key={"in-" + currentSlide}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        animation: isTransitioning
                            ? "enterZoomBlur 1.1s cubic-bezier(0.25,0.46,0.45,0.94) forwards"
                            : "none",
                        zIndex: 2,
                    }}
                >
                    <source src={currentSlideData.background} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" style={{ zIndex: 3 }}></div>

                {/* Content Container */}
                <div className="relative h-screen flex items-center px-8 md:px-16" style={{ zIndex: 10 }}>
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-3 items-center gap-8">

                            {/* Left Content */}
                            <div key={"left-" + currentSlide} className="text-white content-slide-in">
                                <p className="text-sm tracking-widest mb-4">PRODUCT RANGES</p>
                                <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
                                    {currentSlideData.title}
                                </h1>
                                <p className="text-sm mb-4">
                                    {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
                                </p>
                            </div>

                            {/* Center Brick Image */}
                            <div key={"center-" + currentSlide} className="flex justify-center content-slide-in relative" style={{ zIndex: 20 }}>
                                <img
                                    src={currentSlideData.brick}
                                    alt="Product"
                                    className="w-4xl max-w-4xl h-auto object-contain -mb-8"
                                />
                            </div>

                            {/* Right Content */}
                            <div key={"right-" + currentSlide} className="text-white text-right content-slide-in">
                                <p className="text-lg text-gray-300 mb-8">
                                    {currentSlideData.description}
                                </p>
                                <button className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition">
                                    LEARN MORE
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3" style={{ zIndex: 20 }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentSlide ? 'bg-white w-8' : 'bg-gray-500 hover:bg-gray-400'
                            } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
                        ></button>
                    ))}
                </div>

                {/* Bottom Navigation Text */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm tracking-wider" style={{ zIndex: 20 }}>
                    CLICK HERE TO EXPLORE MORE
                </div>

                
                {/* <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ zIndex: 20 }}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ zIndex: 20 }}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button> */}

            </div>
        </>
    );
};

export default Home;