
import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react';
import { NavLink, Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import framerAnimations from "../utils/framer-anims";

const Nav = (error) => {
    const [isOpen, setOpen] = useState(false);
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(scrollY, [0, 200], ["rgba(0, 0, 0, 0)", "rgba(84, 111, 104, 1)"]);
    const boxShadow = useTransform(scrollY, [400, 1000], ["none", "0px 5px 12px rgba(0, 0, 0, 0.85)"]);
    const titleScale = useTransform(scrollY, [0, 100], [1, 1.065]);

    function closeMobNav () {
        setOpen(false);
    }

    //disable scrolling when mobile nav is open
    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }, [isOpen]);

    return (
        <motion.header className="flex justify-between items-center pl-4 pr-2 md:pl-6 lg:px-8 z-30 h-20 fixed text-white w-full" style={{ backgroundColor: !error.hasError ? backgroundColor : 'rgb(84, 111, 104)', boxShadow: boxShadow  } }>
            <Link to="/"><motion.h1 className="card-header-title relative z-40 text-lg lg:text-2xl lg:font-light" style={{ scale: titleScale }} initial={{ opacity: 0 }} animate={{color: isOpen ? '#000000' : '#FFFFFF', opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>The Company Of Landscapers</motion.h1></Link>
            <motion.nav className="hidden md:flex justify-between" {...framerAnimations.fadeIn}>
                <ul className="card-header-icon md:flex text-lg font-light space-x-4 2xl:space-x-6">
                    <li className="2xl:text-xl"><NavLink to="/" className="font-light">Home</NavLink></li>
                    <li className="2xl:text-xl"><NavLink end to="/portfolio" className="font-light">Our Work</NavLink></li>
                    <li className="2xl:text-xl"><NavLink to="/contact" className="font-light">Contact</NavLink></li>
                </ul>
            </motion.nav>
            {/* Mobile Hamburger Nav */}
            <div className="md:hidden relative z-50 flex justify-end m-2 ml-auto">
                <Hamburger className="bg-red" toggled={isOpen} toggle={setOpen} color={isOpen ? 'black' : 'white'}/>
            </div>
            <AnimatePresence>
                {isOpen &&
                    <nav className="md:hidden">
                        <motion.div className="bg-white absolute top-0 left-0 right-0 bottom-0 z-30 h-screen" {...framerAnimations.mobileNav}>
                            <ul className="card-header-icon font-light mt-24">
                                <li className="p-7 text-3xl"><NavLink onClick={closeMobNav} to="/" className="font-light text-black">Home</NavLink></li>
                                <li className="p-7 text-3xl"><NavLink onClick={closeMobNav} end to="/portfolio" className="font-light text-black">Our Work</NavLink></li>
                                <li className="p-7 text-3xl"><NavLink onClick={closeMobNav} to="/contact" className="font-light text-black">Contact</NavLink></li>
                            </ul>
                        </motion.div>
                    </nav>
                }
            </AnimatePresence>
            {/* -=-=-=-= */}
        </motion.header>
    )
}

export default Nav;