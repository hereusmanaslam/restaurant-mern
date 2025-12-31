import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi"
import { data } from '../restApi.json'
import Menu from './Menu'

const NavBar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav>
            <div className="logo">NexSkills Restaurant</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    {
                        data[0].navbarLinks.map((element) => {
                            return (
                                <Link to={element.link} key={element.id} spy={true} smooth={true} duration={500}>
                                    {element.title}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="menuBtn">
                    <Link to={"menu_dishes"} spy={true} smooth={true} duration={600}>
                        OUR MENU
                    </Link>
                </div>
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    )
}

export default NavBar
