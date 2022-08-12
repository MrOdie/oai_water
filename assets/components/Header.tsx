import {NextPage} from "next";
import {header} from "../js/header";
import Image from "next/image";
import Link from "next/link";
import Logo from "../images/odonnellassociates_white.svg";
import React, {useEffect, useRef, useState} from "react";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

interface Props {
    originPage: string;
}

const Header: NextPage<Props> = ({originPage}) => {
    const [headerStyle, setHeaderStyle] = useState({
        height: '70px',
        transition: 'all 200ms ease-in'
    });

    useScrollPosition(({prevPos, currPos}) => {

        const hasScrolled = currPos.y > prevPos.y;

        const shouldBeStyle = {
            height: hasScrolled ? '70px' : '60px',
            transition: `all 200ms ${hasScrolled ? 'ease-in' : 'ease-out'}`,
        }

        if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

        setHeaderStyle(shouldBeStyle);
    }, [headerStyle]);

    return (
        <header id={`${originPage}-page`} className="main-header" style={headerStyle}>
            <div className="logo">
                <Link href="/">
                    <a className="site-logo-link">
                        <Image
                            className="site-logo"
                            width="190"
                            height="65"
                            src={Logo}
                            alt="Wolf River Psychology"
                            priority={true}
                        />
                    </a>
                </Link>
            </div>

            <input
                type="checkbox"
                id="menu-btn"
                className="menu-btn"
            />
            <label htmlFor="menu-btn" className="menu-icon">
                <p className="hidden">Menu Button</p>
                <span className="menu-icon__line"></span>
            </label>
            <nav className="nav-links">
                <ul>
                    <li className="nav-link">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/services">
                            <a>Services</a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
