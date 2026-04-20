import React, { useContext, useEffect, useState } from 'react'
import LogoImg from '../../public/Images/logo.svg'
import FacebookIcon from '../../public/Icons/Brand Icons/facebook.png'
import InstagramIcon from '../../public/Icons/Brand Icons/instagram.png'
import TikTokIcon from '../../public/Icons/Brand Icons/tik-tok.png'
import TwitterIcon from '../../public/Icons/Brand Icons/twitter.png'
import TripAdvisorIcon from '../../public/Icons/Brand Icons/tripadvisor.png'
import LocationIcon from '../../public/Icons/location.png'
import PhoneIcon from '../../public/Icons/telephone.png'
import EmailIcon from '../../public/Icons/email.png'
import MenuButtonIcon from '../../public/Icons/Button Icons/align-left.png'
import CloseButtonIcon from '../../public/Icons/Button Icons/close.png'
import ArrowRightButtonIcon from '../../public/Icons/Button Icons/arrow-right.png'
import ArrowLefttButtonIcon from '../../public/Icons/Button Icons/left.png'
import DownButtonIcon from '../../public/Icons/Button Icons/down-chevron.png'
import { Link } from 'react-router-dom'
import DataContext from '../Context/DataContext'
import NepalImg from '../../public/Images/Destination/Nepal.jpg'
import TibetImg from '../../public/Images/Destination/tibet.jpg'
import BhutanImg from '../../public/Images/Destination/bhutan.jpg'
import IndiaImg from '../../public/Images/Destination/india.jpg'
import ChinaImg from '../../public/Images/Destination/china.jpg'
import TravelImg from '../../public/Images/Destination/travel.jpg'
import AboutImg from '../../public/Images/Destination/about.jpg'

  const socialMediaButton = [
    {id: "SM-1", img: FacebookIcon, link: "#", alt: "facebook button icon"},
    {id: "SM-2", img: InstagramIcon, link: "#", alt: "instagram button icon"},
    {id: "SM-3", img: TikTokIcon, link: "#", alt: "tik tok button icon"},
    {id: "SM-4", img: TwitterIcon, link: "#", alt: "twitter button icon"},
    {id: "SM-5", img: TripAdvisorIcon, link: "#", alt: "trip advisor button icon"},
  ];

    const destinationNepal = [
    {id: "NP-1", title:"Overview", link:""},
    {id: "NP-2", title:"Tours", link:""},
    {id: "NP-3", title:"Festival Tours", link:""},
    {id: "NP-4", title:"Treks", link:""},
    {id: "NP-5", title:"Mountain Climbing", link:""},
    {id: "NP-6", title:"Rafting", link:""},
  ];
  const destinationTibat = [
    {id: "TB-1", title:"Overview", link:""},
    {id: "TB-2", title:"Cultural Tours", link:""},
    {id: "TB-3", title:"Treks", link:""},
    {id: "TB-4", title:"Festival Tours", link:""},
  ];
  const destinationBhutan = [
    {id: "BH-1", title:"Overview", link:""},
    {id: "BH-2", title:"Tours", link:""},
    {id: "BH-3", title:"Festival Tours", link:""},
    {id: "BH-4", title:"Treks", link:""},
  ];
  const destinationIndia = [
    {id: "IN-1", title:"Overview", link:""},
    {id: "IN-2", title:"Tours", link:""},
  ];
  const destinationChina = [
    {id: "CH-1", title:"Overview", link:""},
    {id: "CH-2", title:"Tours", link:""},
  ];

function Navbar() {
  const [ isAtTop, setIsAtTop ] = useState(true);
  const [ showNavbar, setShowNavbar ] = useState(true);
  const [ isOpen, setIsOpen ] = useState(false);
  const { lenis } = useContext(DataContext);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScrollY = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 90);
      setIsAtTop(currentScrollY === 0);
      lastScrollY = currentScrollY;
    }
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  useEffect(() => {
    if(isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    }
  }, [ lenis, isOpen]);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 duration-500 px-6 sm:px-12 lg:px-24 transition-all ease-in-out ${isAtTop ? "bg-transparent" : "bg-[var(--neutral-900)] "} text-[var(--neutral-100)] ${showNavbar ? `${isAtTop ? "translate-y-0" : "md:-translate-y-20 lg:-translate-y-16"}` : "-translate-y-100"} `}>
      <div className={`hidden lg:flex justify-between py-2 md:py-4 border-b ${isAtTop ? "border-[var(--neutral-900)]" : "border-[var(--neutral-100)]"}`}>
          <div className='flex gap-6 items-center'>
            {socialMediaButton.map(item => (  
              <a key={item.id} href={item.link} className='cursor-pointer'><img src={item.img} alt={item.alt} className={`h-5 w-5 object-contain transition-transform duration-300 ease-in-out ${isAtTop ? "ivert-0" : "invert"}`} /></a>
            ))}
          </div>
          <div className='flex gap-6'>
            <div className='flex items-center gap-2'>
                <img src={LocationIcon} alt="" className={`h-5 w-5 object-contain transition-transform duration-300 ease-in-out ${isAtTop ? "ivert-0" : "invert"}`} />
                <span>Pokhara, Nepal</span>
            </div>
            <div className='flex items-center gap-2'>
                <img src={PhoneIcon} alt="" className={`h-4 w-4 object-contain transition-transform duration-300 ease-in-out ${isAtTop ? "ivert-0" : "invert"}`} />
                <a href="#"><span>+977 980-0000000</span></a>
            </div>
            <div className='flex items-center gap-2'>
                <img src={EmailIcon} alt="" className={`h-4 w-4 object-contain transition-transform duration-300 ease-in-out ${isAtTop ? "ivert-0" : "invert"}`} />
                <a href="#"><span>info.voyentra@gmail.com</span></a>
            </div>
          </div>
      </div>
      <div className='py-4 flex justify-between md:grid grid-cols-3 items-center'>
          <div className='hidden lg:flex gap-6'>
            <button onClick={() => setIsOpen(true)} className='cursor-pointer'><img src={MenuButtonIcon} alt="menu button icon" className={`h-8 w-8 object-contain transition-transform duration-300 ease-in-out ${isAtTop ? "ivert-0" : "invert"}`} /></button>
              <Link to="/">Home</Link>
              <Link to="/about-us">About Us</Link>
          </div>
          <button onClick={() => setIsOpen(true)} className='flex lg:hidden cursor-pointer w-fit'><img src={MenuButtonIcon} alt="menu button icon" className={`h-8 w-8 object-contain transition-colors duration-300 ease-in-out ${isAtTop ? "invert-0" : "invert" }`} /></button>
          <div className='md:flex justify-center'>
            <Link to='/'>
              <img src={LogoImg} alt="Brand logo" className='h-12 md:h-16 w-fit object-cover' />
            </Link>
          </div>
          <div className='flex gap-3 justify-end'>
          <button className='hidden md:block h-12 w-fit px-3 rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)] border border-[var(--primary-500)] transition-colors duration-300 ease-in-out hover:bg-[var(--primary-100)] hover:text-[var(--neutral-900)] uppercase'>Plan your trip</button>
          <button className='h-12 w-fit px-3 rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)] border border-[var(--primary-500)] transition-colors duration-300 ease-in-out hover:bg-[var(--primary-100)] hover:text-[var(--neutral-900)] uppercase'>Sign in</button>
          </div>
      </div>
    </nav>
    <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Navbar

function MenuBar ({isOpen, setIsOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ mobileOption, setMobileOption ] = useState("");
  const [ dropdown, setDropdown] = useState("");

  const destinationOption = [
    {id:"DO-1", title: "Nepal"},
    {id:"DO-2", title: "Bhutan"},
    {id:"DO-3", title: "Tibet"},
    {id:"DO-4", title: "China"},
    {id:"DO-5", title: "India"},
  ];

  const [ displayOption, setDisplayOption ] = useState(destinationOption[0].title);
  const travelStyleOpt = ["Student Travel Program", "Women-Only Tours", "Adventures", "Unique Experiences", "Day Tours", "Cross Border Tour", "Solo Travel"];
  const aboutUsOpt = ["Our Story", "Why Choose Us", "Our Team", "Experience & Expertise", "Testimonials", "Blog", "Contact Us"];

  return (
    <>
    <div className={`fixed left-0 right-0 h-screen bg-[var(--neutral-900)] text-[var(--neutral-100)] transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-[100vh]"} overflow-hidden`}>
      {/* Desktop version menu layout */}
      <div className='hidden lg:block py-6 px-12 max-w-7xl mx-auto'>
        <div className='flex items-center justify-between gap-12'>
          <img src={LogoImg} alt="brand logo" className='h-24 w-24 object-contain' />
          <button onClick={() => setIsOpen(false)} className='h-12 w-12 rounded-full cursor-pointer flex items-center justify-center bg-[var(--primary-500)] transition-transform duration-300 ease-out hover:scale-105 active:scale-95'><img src={CloseButtonIcon} alt="close button icon" className='h-8 w-8 object-contain invert' /></button>
        </div>
        <div className='grid grid-cols-5 gap-12 mt-6'>
          <div className='col-span-3 bg-[var(--neutral-100)] border-2 border-[var(--neutral-900)] text-[var(--neutral-900)] rounded-2xl px-6 py-6'>
              <h4 className='mb-10'>Popular Destinatoins</h4>
             <div className='flex gap-12'>
                <ul>
                  {destinationOption.map(item => (
                    <li key={item.id} onClick={() => setDisplayOption(item.title)} className={`${displayOption === item.title && "border-r-2 border-[var(--secondary-500)] text-[var(--secondary-500)]" } hover:border-r-2 hover:text-[var(--secondary-500)] border-[var(--neutral-900)] transition-all duration-75 ease-in-out w-26 py-2 cursor-pointer`}>{item.title}</li>
                  ))}
                </ul>
                <div>
                  {displayOption === "Nepal" && <DestinationDetails image={NepalImg} title="Nepal" menuOption={destinationNepal} />}
                  {displayOption === "Bhutan" && <DestinationDetails image={BhutanImg} title="Bhutan" menuOption={destinationBhutan} />}
                  {displayOption === "Tibet" && <DestinationDetails image={TibetImg} title="Tibet" menuOption={destinationTibat} />}
                  {displayOption === "India" && <DestinationDetails image={IndiaImg} title="India" menuOption={destinationIndia} />}
                  {displayOption === "China" && <DestinationDetails image={ChinaImg} title="China" menuOption={destinationChina} />}
                </div>
             </div>
          </div>
          <div>
            <h5 className='mb-6'>Travel Style</h5>
            <img src={TravelImg} alt="travel styles image" className='h-32 rounded-md w-full object-cover mb-6 shadow-sm' />
            <ul>
              {travelStyleOpt.map(item => (
                <Link id={item}><li className='py-1.5 hover:text-[var(--secondary-500)] cursor-pointer'>{item}</li></Link>
              ))}
            </ul>
          </div>
          <div>
            <h5 className='mb-6'>About Us</h5>
            <img src={AboutImg} alt="about us image" className='h-32 rounded-md w-full object-cover mb-6 shadow-sm' />
             <ul>
              {aboutUsOpt.map(item => (
                <Link id={item}><li className='py-1.5 hover:text-[var(--secondary-500)] cursor-pointer'>{item}</li></Link>
              ))}
            </ul>
          </div>
        </div>
        <div className='pt-6 border-t mt-12 border-[var(--neutral-100)] flex items-center justify-between'>
              <div className='flex gap-6'>
                <a href="#"><span>Travel Insurance</span></a>
                <a href="#"><span>Booking Policy</span></a>
              </div>
              <ul className='flex gap-6'>
                {socialMediaButton.map(item => (
                  <a id={item.id} href={item.link}><img src={item.img} alt={item.alt} className='h-5 w-5 object-contain invert' /></a>
                ))}
              </ul>
        </div>
      </div>
      {/* mobile version menu layout */}
      <div className='sm:hidden px-6 py-6 h-full'>
        <div className='grid grid-rows-[auto_1fr_auto_auto] h-full'> 
         <div className='flex items-center justify-between gap-12 mb-6'>
          <img src={LogoImg} alt="brand logo" className='h-16 w-16 md:h-24 md:w-24 object-contain' />
          <button onClick={() => setIsOpen(false)} className='h-10 w-10 md:h-12 md:w-12 rounded-full cursor-pointer flex items-center justify-center bg-[var(--primary-500)] transition-transform duration-300 ease-out hover:scale-105 active:scale-95'><img src={CloseButtonIcon} alt="close button icon" className='h-6 w-6 md:h-8 md:w-8 object-contain invert' /></button>
        </div>
        <ul>
          <li className='py-2.5 cursor-pointer'>Home</li>
          <li className='flex items-center justify-between py-2.5 cursor-pointer' onClick={() => {
            setMobileOpen(true);
            setMobileOption("destinations");
          }} >Popular Destinations <img src={ArrowRightButtonIcon} alt="right arrow button icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' /></li>
          <li className='flex items-center justify-between py-2.5 cursor-pointer' onClick={() => {
            setMobileOpen(true);
            setMobileOption("tour-style")
          }}>Tour Style <img src={ArrowRightButtonIcon} alt="right arrow button icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' /></li>
          <li className='flex items-center justify-between py-2.5 cursor-pointer' onClick={() => {
            setMobileOpen(true);
            setMobileOption("about-us");
          }}>About Us <img src={ArrowRightButtonIcon} alt="right arrow button icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' /></li>
        </ul>
        <button className='h-12 w-full bg-[var(--primary-500)] text-[var(--neutral-100)] rounded-md mb-6'>Plan Your Trip</button>
        <div className='border-t border-[var(--neutral-100)] py-2 flex justify-between'>
            <a href="#"><span className='cursor-pointer'>Travel Insurance</span></a>
            <a href="#"><span className='cursor-pointer'>Booking Policy</span></a>
        </div>
        </div>
      </div>
      {/* tablet version menu */}
      <div className='hidden sm:block lg:hidden px-12 py-6 h-full'>
        <div className='grid grid-cols-3 gap-8 h-full'>
          <div className='grid grid-rows-[auto_1fr_auto] h-full'>
            <div className='flex items-center justify-between mb-6'>
              <img src={LogoImg} alt="brand logo image" className='h-16 w-16 object-contain' />
              <button onClick={() => setIsOpen(false)} className='flex items-center justify-center cursor-pointer h-10 w-10 rounded-full bg-[var(--primary-500)]'><img src={CloseButtonIcon} alt="clsoe button icon" className='h-6 w-6 object-contain invert' /></button>
            </div>
            <ul>
              <li className='py-3 cursor-pointer'>Home</li>
              {[{title:"Popular Destinations", option:destinationOption}, {title:"Travel Style", option:travelStyleOpt}, {title:"About Us", option:aboutUsOpt}].map((item, index) => (
                <li key={index} className='py-3 cursor-pointer flex items-center justify-between'>
                  <Dropdown dropdown={dropdown} options={item.option} title={item.title} setDropdown={setDropdown} setDisplayOption={setDisplayOption}  />
                </li>
              ))}
            </ul>
            <div className='border-t border-[var(--neutral-100)] py-3 flex items-center justify-between px-2'>
               {socialMediaButton.map(item => (
                <a href={item.link} key={item.id}><img src={item.img} alt={item.alt} className='h-5 w-5 object-contain invert' /></a>
               ))}
            </div>
          </div>
          <div className='col-span-2'>
               {displayOption === "Nepal1" && <DestinationDetails image={NepalImg} menuOption={destinationNepal} title="Nepal" />}
               {displayOption === "Tibet1" && <DestinationDetails image={TibetImg} menuOption={destinationTibat} title="Tibet" />}
               {displayOption === "Bhutan1" && <DestinationDetails image={BhutanImg} menuOption={destinationBhutan} title="Bhutan" />}
               {displayOption === "India1" && <DestinationDetails image={IndiaImg} menuOption={destinationIndia} title="India" />}
               {displayOption === "China1" && <DestinationDetails image={ChinaImg} menuOption={destinationChina} title="China" />}
          </div>
        </div>
      </div>
    </div>
    {mobileOption === "destinations" && <MobileMenu title="Popular Destinations" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} options={destinationOption} mobileOption={mobileOption} />}
    {mobileOption === "tour-style" && <MobileMenu title="Tour Styles" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} options={travelStyleOpt} mobileOption={mobileOption} />}
    {mobileOption === "about-us" && <MobileMenu title="About Us" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} options={aboutUsOpt} mobileOption={mobileOption} />}
    </>
  );
}

function DestinationDetails ({ image, menuOption, title}) {
  if (!menuOption || menuOption.length === 0 || !image) return null;
  return (
    <div className='grid grid-cols-[1fr_auto] gap-8'>
        <img src={image} alt={title} className='w-full rounded-xl h-100 object-cover shadow-sm' />
        <div className='flex flex-col gap-6 w-42'>
          <h4>{title}</h4>
          <ul>
            {menuOption.map(item => (
              <Link>
                <li key={item.id} className="py-1.5 cursor-pointer hover:text-[var(--secondary-500)]">{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
    </div>
  );
}

function MobileMenu ({ title, mobileOpen, setMobileOpen, options, mobileOption }) {
  const [mobileDestination, setMobileDestination] = useState("");
  const [mobileLayout, setMobileLayout] = useState(false);
    return (
      <>
      <div className={`fixed px-8 py-8 top-0 bottom-0 grid grid-rows-[auto_1fr_auto] w-full sm:w-0 bg-[var(--neutral-900)] text-[var(--neutral-100)] transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-200"}`}>
          <h4 className='mb-6'>{title}</h4>
          {mobileOption === "destinations" ? (<ul>{options.map(item => (
            <li onClick={() => {
              setMobileLayout(true);
              setMobileDestination(item.title);
            }} className='py-2.5 flex items-center justify-between' key={item.id}>{item.title} <img src={ArrowRightButtonIcon} alt="arrow right button icon" className='h-3 w-3 object-contain invert' /></li>
          ))}</ul>) : (<ul>{options.map(item => (<li key={item} className='py-2.5 flex items-center justify-between'>{item} <img src={ArrowRightButtonIcon} alt="arrow-right-button icon" className='h-3 w-3 object-contain invert' /></li>))}</ul>)}
          <button onClick={() => setMobileOpen(false)} className='flex items-center mb-6 justify-center gap-2 h-10 w-fit px-2 border border-[var(--primary-500)] bg-[var(--primary-500)] rounded-sm'> <img src={ArrowLefttButtonIcon} alt="arrow left button icon" className='h-3 w-3 object-contain invert' /> Go Back</button>
      </div>
      {mobileDestination === "Nepal" && <MobileDestinationDetails image={NepalImg} menuOption={destinationNepal} title="Nepal" mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />}
      {mobileDestination === "Tibet" && <MobileDestinationDetails image={TibetImg} menuOption={destinationTibat} title="Tibet" mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />}
      {mobileDestination === "Bhutan" && <MobileDestinationDetails image={BhutanImg} menuOption={destinationBhutan} title="Bhutan" mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />}
      {mobileDestination === "India" && <MobileDestinationDetails image={IndiaImg} menuOption={destinationIndia} title="India" mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />}
      {mobileDestination === "China" && <MobileDestinationDetails image={ChinaImg} menuOption={destinationChina} title="China" mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />}
      </>
    )
}

function MobileDestinationDetails ({image, menuOption, title, mobileLayout, setMobileLayout}) {
  return (
    <div className={`fixed top-0 bottom-0 w-full  sm:w-0 text-[var(--neutral-100)] transition-transform duration-500 ease-in-out ${mobileLayout ? "translate-x-0" : "-translate-x-200"}`}>
      <div className='relative'>
        <button className='h-8 w-8 rounded-full flex items-center justify-center bg-[var(--primary-500)] absolute top-6 right-6 z-10' onClick={() => setMobileLayout(false)}><img src={CloseButtonIcon} alt="close button icon" className='h-4 w-4 object-contain invert' /></button>
        <img src={image} alt={title} className='h-screen w-full object-cover' />
        <div className='absolute inset-0 bg-black/80' />
        <div className='absolute inset-0 px-8 py-8'>
            <h4 className='mb-12'>{title}</h4>
            <ul>
              {menuOption.map(item => (
                <li key={item.id} className='py-2.5 flex items-center justify-between'>{item.title} <img src={ArrowRightButtonIcon} alt="arrow right button icon" className='h-3 w-3 object-contain invert' /></li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ dropdown, options, title, setDropdown, setDisplayOption}) {
  return(
    <div className='w-full'>
      <div onClick={() => {setDropdown(prev => prev === title ? "" : title); setDisplayOption("")}} className='flex items-center justify-between border-b border-[var(--neutral-100)] pb-3'>{title} <img src={DownButtonIcon} alt="down button icon" className='h-5 w-5 object-contain invert' /></div>
      {dropdown === title && (<div className='mt-3 w-full '>{dropdown === "Popular Destinations" ? (<ul>{options.map(item => <li key={item.id} className='flex items-center justify-between w-full py-1.5' onClick={() => setDisplayOption(curr => curr === `${item.title}1` ? "" : `${item.title}1`)}><span>{item.title}</span> <img src={ArrowRightButtonIcon} alt="arrow right button icon" className='h-3 w-3 object-contain invert' /></li>)}</ul>) : (<ul>{options.map(item => <li className='py-1.5 cursor-pointer' key={item}><span>{item}</span></li>)}</ul>)}</div>)}
    </div>
  );
}
