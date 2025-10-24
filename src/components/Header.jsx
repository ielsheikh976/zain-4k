import React, {useState, useEffect} from 'react';
import {RiCloseLine, RiMenuLine} from "@remixicon/react";
import {Link} from 'react-scroll';

const Header = () => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                // scrolling down
                setShow(false);
            } else {
                // scrolling up
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className={`w-full pt-5 sticky top-0 left-0 z-50 transition-transform duration-300  ${
            show ? "translate-y-0" : "-translate-y-full"
        } bg-white/70 backdrop-blur-3xl shadow-md`}>
            <div className="container flex items-center justify-between border-b border-b-white-95 pb-5">
                {/*logo*/}
                <a href="#">
                    <img src="/images/logo.png" alt="logo" width={170} height={50}/>
                </a>

                {/*mobile menu*/}
                <nav className={`navbar ${isOpen ? "active" : ""}`}>
                    {/*close menu*/}
                    <button className="absolute top-8 right-8" onClick={handleClick}>
                        <RiCloseLine size={30}/>
                    </button>

                    <ul className="space-y-5 text-center">
                        <li>
                            <Link to='home' smooth={true} offset={0} duration={500}
                                  className="text-lg font-medium hover:text-orange-50 transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to='benefits' smooth={true} offset={0} duration={500}
                                  className="text-lg font-medium hover:text-orange-50 transition-colors">Benefits</Link>
                        </li>
                        <li>
                            <Link to='courses' smooth={true} offset={0} duration={500}
                                  className="text-lg font-medium hover:text-orange-50 transition-colors">Courses</Link>
                        </li>
                        <li>
                            <Link to='testimonials' smooth={true} offset={0} duration={500}
                                  className="text-lg font-medium hover:text-orange-50 transition-colors">Testimonials</Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} offset={0} duration={500}
                                  className="text-lg font-medium hover:text-orange-50 transition-colors">About Us</Link>
                        </li>

                    </ul>

                    {/*login btn*/}
                    <button className="primary-btn mt-12 max-w-40 w-full">
                        Login
                    </button>
                </nav>

                {/*menu btn*/}
                <button className="lg:hidden" onClick={handleClick}>
                    <RiMenuLine/>
                </button>

                {/*lg menu*/}
                <div className="max-lg:hidden flex items-center gap-10">
                    <ul className="flex gap-10">
                        <li>
                            <Link to='home' smooth={true} offset={0} duration={500}
                                  className="hover:text-orange-50 transition-colors text-lg">Home</Link>
                        </li>
                        <li>
                            <Link to='benefits' smooth={true} offset={0} duration={500}
                                  className="hover:text-orange-50 transition-colors text-lg">Benefits</Link>
                        </li>
                        <li>
                            <Link to='courses' smooth={true} offset={0} duration={500}
                                  className="hover:text-orange-50 transition-colors text-lg">Courses</Link>
                        </li>
                        <li>
                            <Link to='testimonials' smooth={true} offset={0} duration={500}
                                  className="hover:text-orange-50 transition-colors text-lg">Testimonials</Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} offset={0} duration={500}
                                  className="hover:text-orange-50 transition-colors text-lg">About Us</Link>
                        </li>
                    </ul>

                    {/*lg login btn*/}
                    <button className="max-lg:hidden primary-btn">
                        Login
                    </button>


                </div>
            </div>

        </header>
    );
}

export default Header;