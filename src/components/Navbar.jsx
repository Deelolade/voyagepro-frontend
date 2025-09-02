import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const lastYRef = useRef(window.scrollY);
  const [hidden, setHidden] = useState(false);
  const [scrolledTop, setScrolledTop] = useState(true);

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
      <nav className="flex h-[10vh] items-center justify-between max-w-6xl mx-auto px-4">
        <Link to="/" className="font-semibold text-3xl">VoyagePro</Link>

        <ul className="flex gap-5">
          <a href="#popular-packages" className="text-lg">Packages</a>
          <a href="#why-choose-us" className="text-lg">About us</a>
          <a href="#contact-us" className="text-lg">Contact us</a>
          <a href="#blogs" className="text-lg">Blog</a>
        </ul>

        <Link to="/signup" className="bg-orange text-white text-lg font-medium py-2 px-4 rounded-lg">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
