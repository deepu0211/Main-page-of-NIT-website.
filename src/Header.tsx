import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Nav Links Configuration
  const menuItems = [
    { name: "Home", link: "#" },
    {
      name: "Administration",
      links: [
        { name: "Visitor", link: "#" },
        { name: "Chairperson", link: "" },
        { name: "Director", link: "" },
        { name: "NIT Council", link: "#" },
        { name: "Governing Bodies",
           link: [
            { name: "Board Of Governors", link: "#" },
            { name: "Finance Committee", link: "#"},
            { name: "Buildings and Works Committee", link: "#"},
            { name: "Senate", link: "#"},
           ]},
        { name: "Register(I/c)"},
        { name: "DEans", link: "#"},
        { name: "Associate Deans", link: "#"},
        { name: "Deputy Registrar", link: "#"},
        { name: "Assistant Registrar", link: "#"},
        { name: "HODs", link: "#"},
        { name: "Act And Statutes", link: "#"},
        { name: "Administration Staff", link: "#"},
        { name: "Former Directors", link: "#"},
        { name: "Organisation Chart", link: "#"},
        { name: "Forms & Formats", link: "#"}
      ],
    },
    {
      name: "Admissions",
      links: [
        { name: "B.Tech", link: "#" },
        { name: "M.Tech", link: "#" },
        { name: "M.S(By Research)", link: "#" },
        { name: "Ph.D", link: "#" },
        { name: "Announcements", link: "#" },
        { name: "Contacts", link: "#" },
      ],
    },
    {
      name: "Academics",
      links: [
        { name: "Departments",
           link: [ 
            { name: "Biotechnology", link: "#"},
            { name: "Chemical Engineering", link: "#"},
            { name: "Civil Engineering", link: "#"},
            { name: "Computer Science & Engineering.", link: "#"},
            { name: "Electrical Engineering", link: "#"},
            { name: "Electronics & Communication Engineering", link: "#"},
            { name: "Mechanical Engineering", link: "#"},
            { name: "Metallurgical & MAterials Engineering", link: "#"},
            { name: "School Of Sciences", link: "#"},
            { name: "School of Humanities & Management", link: "#"},
           ]
        },
        { name: "Programmes",
          link: [
            { name: "UG Programme", link: "#"},
            { name: "PG Programme", link: "#"},
            { name: "Ph.D Programme", link: "#"},
          ]
        },
        { name: "List Of Holidays", link: "#" },
        { name: "Academic Services", link: "#" },
        { name: "Acadamic Bank Of Credit (ABC)", link: "#" },
      ],
    },
    {
      name: "Research",
      links: [
        { name: "Research Area", link: "#" },
        { name: "Research Scholars", link: "#" },
        { name: "Research Projects", link: "#" },
        { name: "Research Credentials", link: "#" },
        { name: "Ist Of Major Equipments", link: "#" },
        { name: "MoU's", link: "#" },
        { name: "CIIAS", link: "#" },
        { name: "DSIR - CRTDH", link: "#" },
      ],
    },
    {
      name: "Placements",
      links: [
        { name: "T & P", link: "#" },
        { name: "Internships And International Relations", link: "#" },
      ],
    },
    { name: "Student Welfare", link: "#" },
  ];

  return (
    <header className="bg-white shadow-md relative w-full z-50">
      
      {/* 1. TOP ACCESS BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1">📞 +91-8818-284700</span>
            
            {/* Clickable Email Anchor Link */}
            <a 
              href="mailto:admissions@nitandhra.ac.in" 
              className="flex items-center gap-1 text-slate-300 hover:text-orange-400 font-medium transition-colors cursor-pointer"
            >
              ✉️ admissions@nitandhra.ac.in
            </a>

            {/* Clickable Map Location Anchor Link */}
            <a 
              href="https://www.google.com/maps/place/NATIONAL+INSTITUTE+OF+TECHNOLOGY+ANDHRA+PRADESH/@16.8367218,81.5357755,17z/data=!3m1!4b1!4m5!3m4!1s0x3a37b360a16cea5f:0xdeeb3716c10f73d1!8m2!3d16.8367167!4d81.5379642" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-orange-400 font-medium transition-colors cursor-pointer"
            >
              <FaMapMarkerAlt className="text-orange-400" /> Locate Us
            </a>

          </div>
          <div className="flex gap-4 font-medium">
            <a href="#" className="hover:text-amber-400 transition-colors">NIRF Rank</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Webmail</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* 2. THE MULTI-LANGUAGE BRANDING CONTAINER */}
      <div className="bg-stone-50 text-slate-800 px-4 py-4 border-b border-orange-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
          
          {/* Main Branding Group */}
          <div className="flex flex-row items-start gap-4 md:gap-6 justify-start text-left w-full sm:w-auto flex-1">
            
            {/* Primary Logo (Left) */}
            <div className="shrink-0 pt-1">
              <img 
                src="/assets/logonit.png" 
                alt="NIT Andhra Pradesh Logo" 
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://nitandhra.ac.in/main/images/logos/logo.png";
                }}
              />
            </div>

            {/* Stacking Institute Names Line-by-Line */}
            <div className="flex flex-col gap-1.5 flex-1">
              {/* Telugu Row */}
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-800 leading-tight">
                  జాతీయ సాంకేతిక విజ్ఞాన సంస్థ ఆంధ్రప్రదేశ్ 
                </h2>
              </div>

              {/* English Row */}
              <div>
                <h2 className="text-sm sm:text-base md:text-xl font-bold tracking-tight text-slate-800 leading-tight">
                  NATIONAL INSTITUTE OF TECHNOLOGY ANDHRA PRADESH
                </h2>
              </div>

              {/* Hindi Row */}
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-black tracking-tight text-slate-800 leading-none uppercase">
                  राष्ट्रीय प्रौद्योगिकी संस्थान आंध्र प्रदेश 
                </h2>
              </div>

              {/* National Tagline Indicator */}
              <p className="text-[12px] font-bold text-amber-800 tracking-wider mt-1 border-t border-stone-200 pt-1">
                (An autonomous Institute under the aegis of Ministry of Education, Govt. of India)
              </p>
            </div>
          </div>
{/* Right Side Group: Decennial Logo */}
          <div className="shrink-0 self-center sm:self-start pt-1">
            <img 
              src="https://nitandhra.ac.in/main/images/logos/decennial.png" 
              alt="Decennial Celebration Logo" 
              className="h-16 w-auto sm:h-20 md:h-24 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
        </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR LAYER -> CLEAN WHITE LAYOUT BASE */}
      <nav className="bg-white text-slate-700 border-b border-stone-200 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          
          {/* Full Screen Desktop Navbar */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 h-full text-sm font-bold tracking-wide uppercase">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group h-full flex items-center">
                {item.links ? (
                  <>
                    <button className="px-3 xl:px-4 h-full flex items-center gap-1 hover:bg-slate-50 hover:text-orange-600 transition-colors cursor-pointer">
                      {item.name}
                      <svg className="w-3 h-3 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </button>
                    
                    {/* Dropdown Box Menu Box set to crisp solid bg-white with shadow alignment */}
                    <div className="absolute top-full left-0 bg-white text-slate-800 normal-case font-medium min-w-[210px] shadow-xl border border-stone-200 rounded-b-md opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-150 origin-top z-50 py-1">
                      {item.links.map((sub, sIdx) => (
                        <a key={sIdx} link = {sub.link} className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-orange-600 border-b border-stone-50 last:border-none transition-colors">
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={item.link} className="px-3 xl:px-4 h-full flex items-center hover:bg-slate-50 hover:text-orange-600 transition-colors">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Quick Portal Action Text */}
          <div className="hidden lg:block text-xs font-bold text-orange-600 border border-orange-500/30 px-3 py-1 rounded-md bg-orange-500/5 uppercase tracking-wider">
            Portal A.Y. 2026-27
          </div>

          {/* Mobile Screen Hamburger Toggle Button */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <span className="font-bold text-xs tracking-wider text-orange-600 uppercase">Menu Navigation</span>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel Content */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 text-sm font-medium shadow-inner">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-stone-100 last:border-none pb-1">
                  {item.links ? (
                    <div className="ps-2">
                      <span className="block py-2 text-orange-600 font-bold uppercase text-xs tracking-wider">{item.name}</span>
                      <div className="ps-3 space-y-1 border-l-2 border-stone-200">
                        {item.links.map((sub, sIdx) => (
                          <a key={sIdx} link = {sub.link} className="block py-1.5 text-slate-700 hover:text-orange-600">
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a href={item.link} className="block py-2 ps-2 text-slate-800 font-bold uppercase text-xs tracking-wider hover:bg-slate-50 hover:text-orange-600 rounded-md">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}