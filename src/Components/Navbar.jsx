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
import { Link, useLocation } from 'react-router-dom'
import DataContext from '../Context/DataContext'
import TravelImg from '../../public/Images/Destination/travel.jpg'
import AboutImg from '../../public/Images/Destination/about.jpg'

  const socialMediaButton = [
    {id: "SM-1", img: FacebookIcon, link: "#", alt: "facebook button icon"},
    {id: "SM-2", img: InstagramIcon, link: "#", alt: "instagram button icon"},
    {id: "SM-3", img: TikTokIcon, link: "#", alt: "tik tok button icon"},
    {id: "SM-4", img: TwitterIcon, link: "#", alt: "twitter button icon"},
    {id: "SM-5", img: TripAdvisorIcon, link: "#", alt: "trip advisor button icon"},
  ];

function Navbar() {
  const [ isAtTop, setIsAtTop ] = useState(true);
  const [ showNavbar, setShowNavbar ] = useState(true);
  const [ isOpen, setIsOpen ] = useState(false);
  const { destinations, activityCategory, setModal, setDetailType } = useContext(DataContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loctaion = useLocation();

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
    window.scrollTo({ top: 0, left: 0});
  }, [loctaion]);

  useEffect(() => {
    if(isOpen || mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    }
  }, [ isOpen, mobileOpen]);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-99 duration-500 px-6 sm:px-12 lg:px-24 transition-all ease-in-out ${isAtTop ? "bg-transparent" : "bg-[var(--neutral-900)] "} text-[var(--neutral-100)] ${showNavbar ? `${isAtTop ? "translate-y-0" : "md:-translate-y-20 lg:-translate-y-18"}` : "-translate-y-100"} `}>
      <div className={`hidden lg:flex justify-between py-2 md:py-4 border-b ${isAtTop ? "border-[var(--neutral-900)]" : "border-[var(--neutral-100)]"}`}>
          <div className='flex gap-6 items-center'>
            {socialMediaButton.map(item => (  
              <a key={item.id} href={item.link} className='cursor-pointer'><img src={item.img} alt={item.alt} className={`h-5 w-5 object-contain transition-transform duration-300 ease-in-out ${isAtTop ? "ivert-0" : "invert"}`} /></a>
            ))}
          </div>
          <div className='flex gap-6'>
            <div className='flex items-center gap-2'>
                <img src={LocationIcon} alt="" className={`h-5 w-5 object-contain transition-transform duration-300 ease-in-out ${isAtTop ? "ivert-0" : "invert"}`} />
                <span>Nepal</span>
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
          <button onClick={() => setModal(true)} className='h-10 md:h-12 w-fit px-3 rounded-sm cursor-pointer bg-[var(--primary-500)] text-[var(--neutral-100)] border border-[var(--primary-500)] transition-colors duration-300 ease-in-out hover:bg-[var(--primary-100)] hover:text-[var(--neutral-900)] uppercase'>Plan your trip</button>
          </div>
      </div>
    </nav>
    <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} destinations={destinations} activities={activityCategory} setDetailType={setDetailType} />
    </>
  )
}

export default Navbar

function MenuBar ({isOpen, setIsOpen, mobileOpen, setMobileOpen, destinations, activities, setDetailType }) {
  const [ mobileOption, setMobileOption ] = useState("");
  const [ dropdown, setDropdown] = useState("");

  const [ selectedOption, setSelectedOption ] = useState();
  const [ selectedId, setSelectedId ] = useState(null);

  useEffect(() => {
    if (destinations.length > 0 && selectedId === null ) {
      setSelectedId(destinations[0].id);
    }
  }, [destinations]);

  useEffect(() => {
    if (!destinations || !selectedId) return;
    const data = destinations.find(curr => curr.id === selectedId);
    setSelectedOption(data);
  }, [ destinations, selectedId]);
  
  const aboutUsOpt = [
    {id:1, title: "Our Story", link: "/about-us"}, 
    {id:2, title: "Why Choose Us", link: ""}, 
    {id:3, title: "Our Team", link: ""}, 
    {id:4, title: "Experience & Expertise", link: ""}, 
    {id:6, title: "Blog", link: "/blog-page"}, 
    {id:7, title: "Contact Us", link: "/contact-us"}, 
  ];

  return (
    <>
    <div className={`fixed left-0 right-0 z-199 h-screen bg-[var(--neutral-900)] text-[var(--neutral-100)] transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-[100vh]"} overflow-hidden`}>
      {/* Desktop version menu layout */}
      <div className='hidden lg:block py-6 px-12 max-w-7xl mx-auto'>
        <div className='flex items-center justify-between gap-12'>
          <img src={LogoImg} alt="brand logo" className='h-24 w-24 object-contain' />
          <button onClick={() => setIsOpen(false)} className='h-12 w-12 rounded-full cursor-pointer flex items-center justify-center bg-[var(--primary-500)] transition-transform duration-300 ease-out hover:scale-105 active:scale-95'><img src={CloseButtonIcon} alt="close button icon" className='h-8 w-8 object-contain invert' /></button>
        </div>
        <div className='grid grid-cols-5 gap-12 mt-6'>
          <div className='col-span-3 bg-[var(--neutral-100)] border-2 border-[var(--neutral-900)] text-[var(--neutral-900)] rounded-2xl px-6 py-6'>
              <h4 className='mb-10'>Popular Destinatoins</h4>
             <div className='flex gap-8'>
                <ul>
                  {destinations.map(item => (
                    <li key={item.id} onClick={() => setSelectedId(item.id)} className={`${selectedOption?.destination === item.destination && "border-r-2 border-[var(--secondary-500)] text-[var(--secondary-500)]" } hover:border-r-2 hover:text-[var(--secondary-500)] border-[var(--neutral-900)] transition-all duration-75 ease-in-out w-32 py-2 cursor-pointer`}>{item.destination}</li>
                  ))}
                </ul>
                <div>
                  <DestinationDetails menuOption={selectedOption} setIsOpen={setIsOpen} setDetailType={setDetailType} />
                </div>
             </div>
          </div>
          <div>
            <h5 className='mb-6'>Activities</h5>
            <img src={TravelImg} alt="travel styles image" className='h-32 rounded-md w-full object-cover mb-6 shadow-sm' />
            <ul className='h-60 overflow-y-scroll'>
              {activities.map(item => (
                <li key={item.id} className='py-1.5 hover:text-[var(--secondary-500)] cursor-pointer'>
                  <Link onClick={() => {setDetailType('activity'); setIsOpen(false)}} to={`/packages?category_id=${item.id}`} >{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className='mb-6'>About Us</h5>
            <img src={AboutImg} alt="about us image" className='h-32 rounded-md w-full object-cover mb-6 shadow-sm' />
             <ul>
              {aboutUsOpt.map(item => (
                <Link onClick={() => setIsOpen(false)} key={item.id} to={item.link}>
                  <li className='py-1.5 hover:text-[var(--secondary-500)] cursor-pointer'>{item.title}</li>
                </Link>
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
      <div className='sm:hidden px-6 py-6 h-screen'>
        <div className='grid grid-rows-[auto_1fr_auto_auto] h-full'> 
         <div className='flex items-center justify-between gap-12 mb-3'>
          <img src={LogoImg} alt="brand logo" className='h-16 w-16 md:h-24 md:w-24 object-contain' />
          <button onClick={() => setIsOpen(false)} className='h-10 w-10 md:h-12 md:w-12 rounded-full cursor-pointer flex items-center justify-center bg-[var(--primary-500)] transition-transform duration-300 ease-out hover:scale-105 active:scale-95'><img src={CloseButtonIcon} alt="close button icon" className='h-6 w-6 md:h-8 md:w-8 object-contain invert' /></button>
        </div>
        <ul>
          <Link to={'/'}><li className='py-2.5 cursor-pointer'>Home</li></Link>
          <li className='flex items-center justify-between py-2.5 cursor-pointer' onClick={() => {
            setMobileOpen(true);
            setMobileOption("destinations");
          }} >Popular Destinations <img src={ArrowRightButtonIcon} alt="right arrow button icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' /></li>
          <li className='flex items-center justify-between py-2.5 cursor-pointer' onClick={() => {
            setMobileOpen(true);
            setMobileOption("tour-style")
          }}>Activities <img src={ArrowRightButtonIcon} alt="right arrow button icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' /></li>
          <li className='flex items-center justify-between py-2.5 cursor-pointer' onClick={() => {
            setMobileOpen(true);
            setMobileOption("about-us");
          }}>About Us <img src={ArrowRightButtonIcon} alt="right arrow button icon" className='h-3 w-3 md:h-5 md:w-5 object-contain invert' /></li>
        </ul>
        <button className='h-12 w-full bg-[var(--primary-500)] text-[var(--neutral-100)] rounded-md mb-6'>Plan Your Trip</button>
        <div className='border-t border-[var(--neutral-100)] py-2 flex justify-between mb-14'>
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
              {[{title:"Popular Destinations", option:destinations}, {title:"Activities", option:activities}, {title:"About Us", option:aboutUsOpt}].map((item, index) => (
                <li key={index} className='py-3 cursor-pointer flex items-center justify-between'>
                  <Dropdown dropdown={dropdown} options={item.option} title={item.title} setDropdown={setDropdown} setSelectedId={setSelectedId}  />
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
               { dropdown === "Popular Destinations" && <DestinationDetails menuOption={selectedOption} />}
          </div>
        </div>
      </div>
    </div>
    {mobileOption === "destinations" && <MobileMenu title="Popular Destinations" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} options={destinations} mobileOption={mobileOption} />}
    {mobileOption === "tour-style" && <MobileMenu title="Activities" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} options={activities} mobileOption={mobileOption} />}
    {mobileOption === "about-us" && <MobileMenu title="About Us" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} options={aboutUsOpt} mobileOption={mobileOption} />}
    </>
  );
}

function DestinationDetails ({ menuOption, setIsOpen, setDetailType }) {
  if (!menuOption || menuOption.length === 0 ) return null;
  return (
    <div key={menuOption.id} className='grid grid-cols-2 gap-8 z-899'>
        <img src={menuOption.image_url} alt={menuOption.destination} className='w-full rounded-xl h-100 object-cover shadow-sm' />
        <div className='flex flex-col gap-6 w-full'>
          <h4>{menuOption.destination}</h4>
          <ul className='h-80 overflow-y-scroll' >
            <Link to={`/packages?destination_id=${menuOption.id}`} onClick={() => {setIsOpen(false); setDetailType('package')}}>
              <li className='py-1 cursor-pointer hover:text-[var(--secondary-500)]'>Overview</li>
            </Link>
            {menuOption.travels?.map(item => (
              <Link to={`/packages?destination_id=${menuOption.id}&travel_id=${item.id}`} onClick={() => {setIsOpen(false); setDetailType('package')}}>
                <li key={item.id} className="py-1 cursor-pointer hover:text-[var(--secondary-500)]">
                  <span>{item.category}</span></li>
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

  const handleSelection = (id) => {
    const data = options.find(curr => curr.id === id);
    setMobileLayout(true);
    setMobileDestination(data);
  }
    return (
      <>
      <div className={`fixed px-8 py-8 top-0 bottom-0 z-699 grid grid-rows-[auto_1fr_auto] w-full sm:w-0 bg-[var(--neutral-900)] text-[var(--neutral-100)] transition-transform duration-500 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-200"}`}>
          <h4 className='mb-6'>{title}</h4>
          {mobileOption === "destinations" ? (<ul>{options.map((item )=> (
            <li key={item.destination} onClick={() => handleSelection(item.id)} className='py-2.5 flex items-center justify-between w-50' key={item.id}>{item.destination} <img src={ArrowRightButtonIcon} alt="arrow right button icon" className='h-3 w-3 object-contain invert' /></li>
          ))}</ul>) : (<ul>{options.map(item => (<li key={item.id} className='py-2.5 flex items-center justify-between w-50'>{item.title} <img src={ArrowRightButtonIcon} alt="arrow-right-button icon" className='h-3 w-3 object-contain invert' /></li>))}</ul>)}
          <button onClick={() => setMobileOpen(false)} className='flex items-center mb-6 justify-center gap-2 h-10 w-fit px-2 border border-[var(--primary-500)] bg-[var(--primary-500)] rounded-sm'> <img src={ArrowLefttButtonIcon} alt="arrow left button icon" className='h-3 w-3 object-contain invert' /> Go Back</button>
      </div>
      <MobileDestinationDetails menuOption={mobileDestination}  mobileLayout={mobileLayout} setMobileLayout={setMobileLayout} />
      </>
    )
}

function MobileDestinationDetails ({menuOption, mobileLayout, setMobileLayout}) {
  if (!menuOption || menuOption.length === 0) return;
  return (
    <div className={`fixed z-999 top-0 bottom-0 w-full  sm:w-0 text-[var(--neutral-100)] transition-transform duration-500 ease-in-out ${mobileLayout ? "translate-x-0" : "-translate-x-200"}`}>
      <div className='relative'>
        <button className='h-8 w-8 rounded-full flex items-center justify-center bg-[var(--primary-500)] absolute top-6 right-6 z-10' onClick={() => setMobileLayout(false)}><img src={CloseButtonIcon} alt="close button icon" className='h-4 w-4 object-contain invert' /></button>
        <img src={menuOption.image_url} alt={menuOption.destination} className='h-screen w-full object-cover' />
        <div className='absolute inset-0 bg-black/60' />
        <div className='absolute inset-0 px-8 py-8'>
            <h4 className='mb-12'>{menuOption.destination}</h4>
            <ul>
              <li className='py-3 flex items-center justify-between w-50'>Overview <img src={ArrowRightButtonIcon} alt="arrow right button icon" className='h-3 w-3 object-contain invert' /></li>
              {menuOption.travels?.map(item => (
                <li key={item.id} className='py-3 flex items-center justify-between w-50'>{item.category} <img src={ArrowRightButtonIcon} alt="arrow right button icon" className='h-3 w-3 object-contain invert' /></li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ dropdown, options, title, setDropdown, setSelectedId}) {
  return(
    <div className='w-full'>
      <div onClick={() => setDropdown(prev => prev === title ? "" : title)} className='flex items-center justify-between border-b border-[var(--neutral-100)] pb-3'>{title} <img src={DownButtonIcon} alt="down button icon" className='h-5 w-5 object-contain invert' /></div>
      {dropdown === title && (
        <div className='mt-3 w-full '>
          {title === "Popular Destinations" ? 
          (<ul>{options.map(item => 
            <li key={item.id} onClick={() => setSelectedId(item.id)} className='flex items-center justify-between w-full py-1.5'><span>{item.destination}</span> <img src={ArrowRightButtonIcon} alt="arrow right button icon" className='h-3 w-3 object-contain invert' /></li>)}
          </ul>) 
            : (<ul>
              {options.map(item => <li className='py-1.5 cursor-pointer' key={item.id}><span>{item.title}</span></li>)}
              </ul>)}
        </div>)}
    </div>
  );
}
