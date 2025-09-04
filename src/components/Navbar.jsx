import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const lastYRef = useRef(window.scrollY);
  const [hidden, setHidden] = useState(false);
  const [scrolledTop, setScrolledTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolledTop(currentY < 10); // At top, make it transparent

      if (currentY > lastYRef.current && currentY > 100) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      lastYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-screen z-50 transition-all ease-in-out duration-500 
        ${hidden ? "-translate-y-full" : "translate-y-0"} 
        ${scrolledTop ? "bg-transparent" : "bg-white shadow-xl"}
      `}
    >
      <nav className={`flex h-[8vh] md:h-[10vh] items-center justify-between max-w-6xl mx-auto px-4 ${menuOpen && "bg-white shadow-xl"}`}>
        <Link to="/" className="font-semibold md:text-3xl">VoyagePro</Link>

        <ul className="md:flex gap-5 hidden ">
          <a href="#popular-packages" className="text-lg">Packages</a>
          <a href="#why-choose-us" className="text-lg">About us</a>
          <a href="#contact-us" className="text-lg">Contact us</a>
          <a href="#blogs" className="text-lg">Blog</a>
        </ul>

        <Link to="/signup" className=" hidden md:block bg-orange text-white text-sm md:text-lg font-medium py-2 px-4 rounded-lg">
          Register
        </Link>
        <button className="md:hidden flex flex-col justify-center items-center space-y-1 hover:bg-slate-300 p-2 rounded-md" onClick={() => setMenuOpen(prev => !prev)}>
          <span className={`w-5 h-[2px] bg-black transition-all ease-in-out duration-500 ${menuOpen && "rotate-45 translate-y-1.5  "}`}></span>
          <span className={`w-5 h-[2px] bg-black transition-all ease-in-out duration-500 ${menuOpen && "-rotate-45  "}`}></span>
          <span className={`w-5 h-[2px] bg-black transition-all ease-in-out duration-500 ${menuOpen && "opacity-0"}`}></span>
        </button>
      </nav>
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 1, x: "-100vw" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`bg-white absolute top-[8vh] md:top-[10vh] h-[92vh] w-full md:hidden flex flex-col justify-start items-center pt-10 space-y-6`}>
        <ul className=" space-y-6 text-center">
          <li><a href="#popular-packages" onClick={() => setMenuOpen(prev => !prev)} className="text-4xl font-semibold">Packages</a></li>
          <li><a href="#why-choose-us" onClick={() => setMenuOpen(prev => !prev)} className="text-4xl font-semibold">About us</a></li>
          <li><a href="#contact-us" onClick={() => setMenuOpen(prev => !prev)} className="text-4xl font-semibold">Contact us</a></li>
          <li><a href="#blogs" onClick={() => setMenuOpen(prev => !prev)} className="text-4xl font-semibold">Blog</a></li>
        </ul>
        <Link to="/signup" className=" bg-orange text-white text-lg font-medium py-2 px-4 rounded-lg">
          Register
        </Link>
      </motion.div>
    </header>
  );
};

export default Navbar;
