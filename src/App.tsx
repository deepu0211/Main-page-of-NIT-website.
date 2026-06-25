import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaMinus, FaPlay } from "react-icons/fa";
import Header from "./Header";

const SLIDER_IMAGES = [
  "/assets/events.jpg",
  "/assets/cyberdiwas.png",
  "/assets/republicday.jpg",
  "/assets/annual.jpg",
  "/assets/jaagrooktadiwas.png",
  "/assets/ratantatamou.jpeg"
];

const ANNOUNCEMENTS = [
  { text: "Applications are invited for the engagement of Ad-hoc faculty A.Y. 2026 - 27, Last date for submission of applications: 09 June 2026", link: "#" },
  { text: "Mrs. Debasmita Bala, Roll No. PF112103, a Full-Time Research Scholar will be presenting her Ph.D. viva-voce at 11:00 a.m. on 21.05.2026", link: "" },
  { text: "Academic Calendar 2026-27 for B.Tech II, III and IV Year Students", link: "#" },
]; 

const ACHIEVEMENTS = [
  { text: "The Indian Institute of Metals (IIM) has announced its Prestigious IIM Awards 2025. The Department of MME secured Two Awards.", link: "#" },
  { text: "Dr. Kuldeep Roy, Assistant Professor, Department of Chemical Engineering, has recently been appointed as an Early Career Editorial Board Member.", link: "#" }
];

const PUBLICATIONS = [
  { text: "Research article entitled 'Rapid dual-mode colorimetric and fluorometric detection of Hg2+' has been published in the Journal of Photochemistry.", link: "#" },
  { text: "Research article entitled 'Unveiling the highly selective time-dependent colorimetric response' has been published in the New Journal of Chemistry.", link: "#" }
];

const CERTIFICATIONS = [
  { title: "Quality Management System", img: "/assets/quality.png" },
  { title: "Environmental Management System", img: "/assets/environment.png" },
  { title: "Energy Management System", img: "/assets/energy.png" },
  { title: "IGBC", img: "/assets/igbc.png" },
  { title: "Engineering Rank Band", img: "/assets/eng_rnk.png" },
  { title: "State Energy Conservation Award", img: "/assets/eneconv.png" },
  { title: "Best Institute In Sounth India 2021", img: "/assets/rashtriya.png" },
  { title: "Excellence In Technical Skills", img: "/assets/agrihorti.png" }
];

const STUDENT_FACILITIES = [
  { title: "Library", img: "/assets/lib.jpg" },
  { title: "Hostels", img: "/assets/hostel.jpg" },
  { title: "Web & Network", img: "/assets/wan.jpg" },
  { title: "Health centre", img: "/assets/health.jpg" },
  { title: "Sports", img: "/assets/sport.jpg" }
];

const RECRUITERS = [
  { name: "PepsiCo", img: "/assets/pepsico.png" },
  { name: "Oracle", img: "/assets/oracle.jpg" },
  { name: "NVIDIA", img: "/assets/nvidia.jpg" },
  { name: "Deloitte", img: "/assets/deloitte.png" },
  { name: "Neterwala Group", img: "/assets/neterwala.jpg" },
  { name: "Motive", img: "/assets/motive.png" },
  { name: "MAQ Software", img: "/assets/maq.png" },
  { name: "Kyndryl", img: "/assets/kyndryl.png" },
  { name: "Increff", img: "/assets/increff.jpg" },
  { name: "Accenture", img: "/assets/accenture.png" },
  { name: "Hyundai", img: "/assets/hyundai.png"},
  { name: "Hexaware1", img: "/assets/hexaware1.png"},
  { name: "Fanatics", img: "/assets/fanatics.png"},
  { name: "Carrier.png", img: "/assets/carrier.png"},
  { name: "Capgemini", img: "/assets/capgemini.png"},
  { name: "C2i", img: "/assets/c2i.jpg"},
  { name: "Bharatelectronics", img: "/assets/bharatelectronics.png"}
];

// ==========================================
// NEW LINK CATEGORIES GRID DATA STRUCTURES
// ==========================================
const PORTALS = [
  { name: "Faculty Portal", color: "bg-blue-600 hover:bg-blue-700", link: "https://nitandhra.ac.in/faculty/auth/login" },
  { name: "Careers/Jobs", color: "bg-blue-600 hover:bg-blue-700", link: "https://nitandhra.ac.in/main/careers.php" },
  { name: "Alumani", color: "bg-blue-600 hover:bg-blue-700", link: "https://nitandhra.ac.in/main/careers.php" }
];
const CELLS = [
  { name: "Women's Protection Cell", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/wpc.php"  },
  { name: "Internal Complaints Committee", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/scstcell.php" },
  { name: "I & E Cell", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/icc.php" },
  { name: "SC/ST Cell", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/elcell.php" },
  { name: "OBC Liaison Office", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/liaisonoffice.php" }
];

const IMPORTANT_LINKS = [
  { name: "JOSSA - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://csab.nic.in/" },
  { name: "CSAB - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://www.studyinindia.gov.in/" },
  { name: "Study in India Programme - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://www.studyinindia.gov.in/" },
  { name: "DASA - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://dasanit.org/dasa2025/" },
  { name: "Foreign Students Registration Link", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://www.studyinindia.gov.in/Errors/Exception" },
  { name: "NPTEL", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://nptel.ac.in/" },
  { name: "Visvesvaraya PhD Scheme", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://nitandhra.ac.in/main/visvesvaraya-phd.php" }
];

const QUICK_LINKS = [
  { name: "Annual Reports", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/annual_reports.php" },
  { name: "RTI", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/rti.php" },
  { name: "Scholarships", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/scholarships.php" },
  { name: "Network Requests", color: "bg-amber-500 hover:bg-amber-600", link: "https://wnt.nitandhra.ac.in/" },
  { name: "Downloads", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/download.php" },
  { name: "Gallery", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/gallery.php" },
  { name: "Tenders", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/tender.php" }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const autoSlideRef = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const facilityScrollRef = useRef<HTMLDivElement>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const [activeAccordion, setActiveAccordion] = useState<string | null>("about");
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current !== null) window.clearInterval(autoSlideRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const scrollCerts = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const scrollFacilities = (direction: "left" | "right") => {
    if (facilityScrollRef.current) {
      const scrollAmount = 340;
      facilityScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const toggleAccordion = (panel: string) => {
    setActiveAccordion(activeAccordion === panel ? null : panel);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      
      {/* 1. RESPONSIVE DROPDOWN NAVBAR BASE WITH STACK LAYERING */}
      <div className="relative z-50 bg-white">
        <Header />
      </div>

      {/* 2. HERO SLIDER BANNER WITH INTERIOR STACKING CONTROL */}
      <div className="relative w-full overflow-hidden bg-slate-900 h-[250px] sm:h-[340px] md:h-[440px] lg:h-[500px] border-b border-stone-100 group z-10">
        <div 
          className="flex h-full transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDER_IMAGES.map((src, index) => (
            <div key={index} className="min-w-full h-full flex justify-center items-center">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>

        {/* Navigation Arrow Controls */}
        <button 
          onClick={() => { setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length); startAutoSlide(); }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-slate-100/90 hover:bg-slate-200 text-slate-800 border border-stone-200 shadow-md w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all opacity-0 group-hover:opacity-100"
        >
          <FaChevronLeft size={14} />
        </button>
        <button 
          onClick={() => { setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length); startAutoSlide(); }}
          className="absolute right-2 sm:translate-x-0 top-1/2 -translate-y-1/2 bg-slate-100/90 hover:bg-slate-200 text-slate-800 border border-stone-200 shadow-md w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight size={14} />
        </button>
      </div>
    
      {/* 3. NOTIFICATION MARQUEE BAR */}
      <div className="border border-blue-500 overflow-hidden py-3 px-6 relative z-10">
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] inline-flex items-center gap-4">
          <a href="#" className="hover:underline font-bold text-sm sm:text-base tracking-wide uppercase flex items-center gap-2">
            <span className="text-sky-950 bg-sky-100/80 px-2 py-0.5 rounded-md text-xs sm:text-sm font-extrabold flex items-center gap-1 shadow-xs animate-pulse">
              🔥 LATEST NOTIFICATIONS:
            </span> 
            <span className="text-sky-950 font-bold">
              Applications are invited for the engagement of Ad-hoc faculty A.Y. 2026 - 27. Check Portal announcements. • Academic Calendar 2026-27 for B.Tech Students is live.
            </span>
          </a>
        </div>
      </div>

      {/* 4. DASHBOARD GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Announcements */}
          <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden flex flex-col h-[420px]">
            <div className="bg-blue-500 text-white py-3.5 px-5 border-b border-blue-400 flex justify-between items-center">
              <h2 className="text-lg font-bold uppercase tracking-wide text-white">Announcements</h2>
              <span className="text-xs font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full">Updates</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-white">
              {ANNOUNCEMENTS.map((item, idx) => (
                <div key={idx} className="border-b border-stone-100 pb-3 last:border-0">
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-500 hover:underline text-sm md:text-base font-semibold block transition-colors"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden flex flex-col h-[420px]">
            <div className="bg-green-500 text-white py-3.5 px-5 flex justify-between items-center">
              <h2 className="text-lg font-bold uppercase tracking-wide text-white">Achievements</h2>
              <span className="text-xs font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full">Awards</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-white">
              {ACHIEVEMENTS.map((item, idx) => (
                <div key={idx} className="border-b border-stone-100 pb-3 last:border-0">
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-light-blue-500 hover:underline text-sm md:text-base font-semibold block transition-colors"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden flex flex-col h-[420px]">
            <div className="bg-orange-500 text-white py-3.5 px-5 flex justify-between items-center">
              <h2 className="text-lg font-bold uppercase tracking-wide text-white">Publications</h2>
              <span className="text-xs font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full">Research</span>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-white">
              {PUBLICATIONS.map((item, idx) => (
                <div key={idx} className="border-b border-stone-100 pb-3 last:border-0">
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-500 hover:underline text-sm md:text-base font-semibold block transition-colors"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 5. SCROLLABLE CERTIFICATIONS SLIDER FORMAT */}
      <div className="bg-white py-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 relative group/cert">
          <h2 className="text-2xl font-extrabold text-slate-800 border-b-4 border-slate-400 pb-2 inline-block mb-6 uppercase tracking-wide">
            Certifications
          </h2>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2"
            style={{ scrollbarWidth: 'none' }}
          >
            {CERTIFICATIONS.map((cert, index) => (
              <div 
                key={index} 
                onClick={() => setPopupImage(cert.img)}
                className="border-2 border-neutral-900 rounded-xl p-3 bg-stone-50 hover:shadow-md hover:border-black transition-all text-center cursor-pointer flex flex-col justify-between select-none shrink-0 w-[160px] sm:w-[200px]"
              >
                <div className="h-20 flex items-center justify-center overflow-hidden mb-2 bg-white rounded-md border border-stone-100 shadow-inner">
                  <img 
                    src={cert.img} 
                    alt={cert.title} 
                    className="max-h-full max-w-full object-contain p-1 rounded-md bg-white" 
                  />
                </div>
                <h5 className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-tight line-clamp-2 h-8 flex items-center justify-center">
                  {cert.title}
                </h5>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scrollCerts("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-slate-50 text-slate-800 border border-stone-200 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all opacity-100 md:opacity-0 group-hover/cert:opacity-100 shadow-md"
          >
            <FaChevronLeft size={12} />
          </button>
          <button 
            onClick={() => scrollCerts("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-slate-50 text-slate-800 border border-stone-200 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all opacity-100 md:opacity-0 group-hover/cert:opacity-100 shadow-md"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* 4.5 PLACEMENT STATISTICS BANNER */}
      <div 
        className="relative w-full bg-cover bg-center py-12 md:py-16 text-center text-white" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(49, 27, 107, 0.85), rgba(49, 27, 107, 0.85)), url('/assets/image.png')" 
        }}
      >
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            Placements Statistics - 2025
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400">
            80.94% Placed
          </p>
          
          <div className="text-sm sm:text-base md:text-lg space-y-1 pt-2 font-medium text-stone-200">
            <p>Offers : <span className="font-bold text-white">510 +</span></p>
            <p>Companies Visited: <span className="font-bold text-white">180 +</span></p>
            <p>Highest Package - <span className="font-bold text-white">65 Lakhs per annum</span></p>
          </div>

          <div className="pt-4">
            <a 
              href="https://nitandhra.ac.in/tnp/index.php" 
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2 rounded shadow-md transition-colors text-sm uppercase tracking-wider"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* 4.6 INDUSTRIAL OUT REACH COUNTERS */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6 flex items-center">
          <span className="w-1 h-8 bg-amber-500 mr-3 inline-block"></span>
          <h2 className="text-2xl font-bold text-slate-800">
            Industrial Out Reach <span className="text-slate-500 font-medium text-lg md:text-xl ml-1">(Research & Consultancy)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-xs flex flex-col items-center justify-center text-center h-40">
            <span className="text-3xl font-extrabold text-blue-800 mb-2">20</span>
            <span className="text-xl font-bold text-black-700 lowercase tracking-wide">No. of MoU's Signed</span>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-xs flex flex-col items-center justify-center text-center h-40">
            <span className="text-3xl font-extrabold text-blue-800 mb-2">7+</span>
            <span className="text-xl font-bold text-black-700 lowercase tracking-wide">No. of Project R & D Sanctioned</span>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-xs flex flex-col items-center justify-center text-center h-40">
            <span className="text-3xl font-extrabold text-blue-800 mb-2">15+</span>
            <span className="text-xl font-bold text-black-700 lowercase tracking-wide">No. of consultancy project takenup</span>
          </div>
          <div className="bg-white p-6 rounded-xl border-2 border-black shadow-xs flex flex-col items-center justify-center text-center h-40">
            <span className="text-3xl font-extrabold text-blue-800 mb-2">7.15 Cr Project</span>
            <span className="text-xl font-bold text-black-700 lowercase tracking-wide">OSIR Project</span>
          </div>
        </div>
      </div>

      {/* 4.7 "WHY CHOOSE US" WITH INTEGRATED YOUTUBE VIDEO STREAM PLAYER */}
      <div 
        className="relative w-full bg-cover bg-center py-12 md:py-16 text-white"
        style={{ 
          backgroundImage: "linear-gradient(rgba(49, 27, 107, 0.90), rgba(49, 27, 107, 0.90)), url('/assets/image copy.png')" 
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center tracking-wide mb-10 uppercase">
            Why <span className="text-amber-400">Choose</span> Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="bg-white rounded-lg overflow-hidden text-slate-800 transition-all shadow-md">
                <button 
                  onClick={() => toggleAccordion("about")}
                  className="w-full px-5 py-4 flex justify-between items-center font-bold text-left text-sm md:text-base border-b border-stone-100 cursor-pointer bg-stone-50/50 hover:bg-stone-50"
                >
                  <span>About the Institute</span>
                  {activeAccordion === "about" ? <FaMinus className="text-slate-500 text-xs" /> : <FaPlus className="text-slate-500 text-xs" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeAccordion === "about" ? "max-h-60 p-5 border-t border-stone-100" : "max-h-0"}`}>
                  <p className="text-sm text-black-800 leading-relaxed">
                    National Institute of Technology Andhra Pradesh is the youngest among the 31 NITs established by the Government of India. It is a premier technical institution focused on delivering world-class education, research infrastructure, and high-impact industry collaboration.National institute of technology Andhra Pradesh established in the yeaar 2015 is an Institute of National importance.
                    The permanent campus was established in 172.6 acres of land adjacent to Chennai-Kolkata Highway (NH-16) in the historical air-strip lands of Tadepalligudem.The Institute has started its full operations in the permanent campus from January 2020.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden text-slate-800 transition-all shadow-md">
                <button 
                  onClick={() => toggleAccordion("vision")}
                  className="w-full px-5 py-4 flex justify-between items-center font-bold text-left text-sm md:text-base border-b border-stone-100 cursor-pointer bg-stone-50/50 hover:bg-stone-50"
                >
                  <span>Vision</span>
                  {activeAccordion === "vision" ? <FaMinus className="text-slate-500 text-xs" /> : <FaPlus className="text-slate-500 text-xs" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeAccordion === "vision" ? "max-h-60 p-5 border-t border-stone-100" : "max-h-0"}`}>
                  <p className="text-sm text-black-800 leading-relaxed">
                    To nurture excellence in technical education and research by fostering an innovative ecosystem that produces socially responsible professionals globally certified to serve the strategic development needs of the nation.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden text-slate-800 transition-all shadow-md">
                <button 
                  onClick={() => toggleAccordion("mission")}
                  className="w-full px-5 py-4 flex justify-between items-center font-bold text-left text-sm md:text-base border-b border-stone-100 cursor-pointer bg-stone-50/50 hover:bg-stone-50"
                >
                  <span>Mission</span>
                  {activeAccordion === "mission" ? <FaMinus className="text-slate-500 text-xs" /> : <FaPlus className="text-slate-500 text-xs" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeAccordion === "mission" ? "max-h-60 p-5 border-t border-stone-100" : "max-h-0"}`}>
                  <p className="text-sm text-black-800 leading-relaxed">
                    To provide state-of-the-art infrastructure for experiential learning, promote collaborative interdisciplinary research, enhance strong ties with global organizations, and emphasize entrepreneurial ecosystems.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full bg-slate-950 aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 relative group">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src="https://img.youtube.com/vi/DLIc1XIHvdc/maxresdefault.jpg" 
                    alt="NIT Andhra Pradesh Video Thumbnail Cover" 
                    className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-amber-400 hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-amber-500/20"
                    >
                      <FaPlay className="ml-1 text-xl sm:text-2xl" />
                    </button>
                  </div>
                </div>
              ) : (
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DLIc1XIHvdc?autoplay=1&mute=1&rel=0" 
                  title="NIT Andhra Pradesh Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* INSTITUTE LIVE COUNTER STATISTICS */}
      <div className="bg-stone-50 border-y border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-6">
                    
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full pt-4">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">127</span>
              <span className="text-xs md:text-sm font-bold text-black-800 uppercase mt-2 tracking-widest">Faculty</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">2310+</span>
              <span className="text-xs md:text-sm font-bold text-black-800 uppercase mt-2 tracking-widest">Student</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">120+</span>
              <span className="text-xs md:text-sm font-bold text-black-800 uppercase mt-2 tracking-widest">Staff</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">250+</span>
              <span className="text-xs md:text-sm font-bold text-black-800 uppercase mt-2 tracking-widest">Scholars</span>
            </div>
          </div>
        </div>
      </div>

      {/* TOP RECRUITERS INFINITE SLIDING MARQUEE */}
      <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
        <div className="mb-8 flex items-center">
          <span className="w-1 h-8 bg-amber-500 mr-3 inline-block"></span>
          <h2 className="text-2xl font-bold text-blue-800 uppercase tracking-wide">
            Top Recruiters
          </h2>
        </div>

        <div className="relative w-full flex items-center overflow-hidden whitespace-nowrap group/marquee">
          <div className="flex gap-16 animate-[marquee_35s_linear_infinite] group-hover/marquee:[animation-play-state:paused] shrink-0 items-center min-w-full">
            {/* Original Copy */}
            {RECRUITERS.map((company, index) => (
              <div key={`orig-${index}`} className="h-12 md:h-16 flex items-center justify-center shrink-0">
                <img 
                  src={company.img} 
                  alt={company.name} 
                  className="max-h-full max-w-[120px] md:max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-200" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Infinite Loop Repeat Copy */}
            {RECRUITERS.map((company, index) => (
              <div key={`dup-${index}`} className="h-12 md:h-16 flex items-center justify-center shrink-0">
                <img 
                  src={company.img} 
                  alt={company.name} 
                  className="max-h-full max-w-[120px] md:max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-100" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 4.8 STUDENT FACILITIES IMAGES GRID */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-8">
          <div className="flex items-center">
            <span className="w-1 h-8 bg-amber-500 mr-3 inline-block"></span>
            <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">
              Student Facilities
            </h2>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scrollFacilities("left")}
              className="bg-amber-500 text-slate-950 p-2 rounded hover:bg-amber-600 transition-colors cursor-pointer"
            >
              <FaChevronLeft size={14} />
            </button>
            <button 
              onClick={() => scrollFacilities("right")}
              className="bg-amber-500 text-slate-950 p-2 rounded hover:bg-amber-600 transition-colors cursor-pointer"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        <div 
          ref={facilityScrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {STUDENT_FACILITIES.map((facility, index) => (
            <div 
              key={index}
              className="min-w-[280px] sm:min-w-[320px] bg-white rounded-xl overflow-hidden border-2 border-black shadow-sm hover:shadow-md transition-shadow group shrink-0"
            >
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img 
                  src={facility.img} 
                  alt={facility.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/annual.jpg";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black-800 text-base md:text-lg tracking-tight">
                  {facility.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
{/* NEW INTEGRATED RESOURCE GRIDS (PORTALS, CELLS, LINKS, QUICK LINKS) */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-12 space-y-8">
        
        {/* Row 1: Portals & Cells Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Portals Section */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 shadow-xs">
            <h3 className="text-md font-bold uppercase tracking-wider text-slate-700 mb-3 border-l-4 border-blue-600 pl-2">Portals</h3>
            <div className="grid grid-cols-2 gap-3">
              {/* REPLACE URLS HERE: Go to where PORTALS is defined at the top of your file or replace here */}
              {[
                { name: "Faculty Portal", color: "bg-blue-600 hover:bg-blue-700", link: "http://nitandhra.ac.in/faculty/auth/login" },
                { name: "Careers/Jobs", color: "bg-blue-600 hover:bg-blue-700", link: "https://nitandhra.ac.in/main/careers.php" },
                { name: "Alumni", color: "bg-blue-600 hover:bg-blue-700", link: "https://alumni.nitandhra.ac.in/" },
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${item.color} text-white font-semibold text-center py-3 px-2 rounded-xl text-sm shadow-xs transition-transform transform hover:-translate-y-0.5 flex items-center justify-center min-h-[52px]`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Cells Section */}
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 shadow-xs">
            <h3 className="text-md font-bold uppercase tracking-wider text-slate-700 mb-3 border-l-4 border-teal-600 pl-2">Cells</h3>
            <div className="grid grid-cols-2 gap-3">
              {/* REPLACE URLS HERE: Change these string paths to your cell pages */}
              {[
                { name: "Women's Protection Cell", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/wpc.php" },
                { name: "SC/ST Cell", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/scstcell.php" },
                { name: "Internal Complaint Committee", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/icc.php" },
                { name: "L & E Cell", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/elcell.php" }, // Points to your local react-router page
                { name: "OBC Lisiaon Office", color: "bg-teal-600 hover:bg-teal-700", link: "https://nitandhra.ac.in/main/liaisonoffice.php" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${item.color} text-white font-semibold text-center py-3 px-2 rounded-xl text-s++m shadow-xs transition-transform transform hover:-translate-y-0.5 flex items-center justify-center min-h-[52px]`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Important Links Section */}
        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 shadow-xs">
          <h3 className="text-md font-bold uppercase tracking-wider text-slate-700 mb-3 border-l-4 border-indigo-600 pl-2">Important Links</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* REPLACE URLS HERE: Add links for external institutional pages */}
            {[
              { name: "JOSSA - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://josaa.nic.in/" },
              { name: "CSAB - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://csab.nic.in/" },
              { name: "Study in India Programme - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://www.studyinindia.gov.in/" },
              { name: "DASA - 2025", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://dasanit.org/dasa2025/" },
              { name: "Foreign Students Registration Link ", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://www.studyinindia.gov.in/Errors/Exception" },
              { name: "NPTEL ", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://nptel.ac.in/" },
              { name: "Visvesvaraya PhD Scheme", color: "bg-indigo-600 hover:bg-indigo-700", link: "https://nitandhra.ac.in/main/visvesvaraya-phd.php" }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${item.color} text-white font-semibold text-center py-3 px-2 rounded-xl text-sm shadow-xs transition-transform transform hover:-translate-y-0.5 flex items-center justify-center min-h-[52px]`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Row 3: Quick Links Dynamic Section */}
        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 shadow-xs">
          <h3 className="text-md font-bold uppercase tracking-wider text-slate-700 mb-3 border-l-4 border-amber-500 pl-2">Quick Links</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* REPLACE URLS HERE: Update destinations for these quick access utilities */}
            {[
              { name: "Annual Reports", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/annual_reports.php" },
              { name: "RTI", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/rti.php" },
              { name: "Scholarship", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/scholarships.php" },
              { name: "Network Resuests", color: "bg-amber-500 hover:bg-amber-600", link: "https://wnt.nitandhra.ac.in/" },
              { name: "Downloads", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/download.php" },
              { name: "Gallery", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/gallery.php" },
              { name: "Tenders", color: "bg-amber-500 hover:bg-amber-600", link: "https://nitandhra.ac.in/main/tender.php" },
            ].map((linkItem, idx) => (
              <a 
                key={idx} 
                href={linkItem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${linkItem.color} text-slate-950 font-bold text-center py-4 px-2 rounded-xl shadow-xs transition-all transform hover:-translate-y-1 hover:shadow-md uppercase tracking-wide text-xs sm:text-sm flex items-center justify-center min-h-[60px]`}
              >
                {linkItem.name}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {popupImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-3 max-w-lg w-full relative shadow-2xl">
            <button 
              onClick={() => setPopupImage(null)} 
              className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-700 text-white w-7 h-7 rounded-full font-bold flex items-center justify-center cursor-pointer shadow-md transition-colors"
            >
              ×
            </button>
            <img src={popupImage} alt="Preview" className="max-h-[70vh] w-full object-contain rounded-lg" />
          </div>
        </div>
      )}

    </div>
  );
}