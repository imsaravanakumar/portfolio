import { Bars3Icon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Header() {
    const [navShow, setNavshow] = useState(false)
    return (
        <div id="header" className="bg p-5 text-white fixed  w-full z-10">
            <div className="flex justify-around">
                <a className="text-nowrap font-bold sm:text-2xl" href="#header">Saravana Kumar</a>
                <nav className="hidden lg:block pt-1">
                    <ul className="flex gap-10">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className='hidden lg:block pt-1'>
                    <div className="flex gap-3 ">
                        <a className="hover:scale-110" href="https://www.linkedin.com/in/saravana-kumar-91084b378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a className="hover:scale-110" href="https://wa.me/qr/LAINYP26JK52D1" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
                        <a className="hover:scale-110" href="https://www.instagram.com/_saravana.03_?igsh=amlncG90MzN0eGlo" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                    </div>
                </div>
                {navShow && <nav className="lg:hidden  mobile-menu bg transition-transform ">
                    <ul className="flex flex-col">
                        <li onClick={()=>setNavshow(false)}><a href="#hero">Home</a></li>
                        <li onClick={()=>setNavshow(false)}><a href="#project">Project</a></li>
                        <li onClick={()=>setNavshow(false)}><a href="#skills">Skills</a></li>
                        <li onClick={()=>setNavshow(false)}><a href="#about">About</a></li>
                        <li onClick={()=>setNavshow(false)}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>}
                <button className="lg:hidden mt-1" onClick={() => { setNavshow(!navShow) }}><Bars3Icon className="text-white h-5" /></button>
            </div>

        </div>
    )
}
