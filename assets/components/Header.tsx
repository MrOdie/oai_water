import {NextPage} from "next";
import {header} from "../js/header";
import Image from "next/image";
import Link from "next/link";
import Logo from "../images/odonnellassociates_white.svg";
import React, {useEffect, useState} from "react";

interface Props {
    originPage: string;
}

const Header: NextPage<Props> = ({originPage}) => {
    const [offset, setOffset] = useState(0);
    let body: HTMLBodyElement | null, menu_btn: HTMLInputElement | null, header: HTMLHeadingElement | null;

    useEffect(() => {
        body = document.querySelector("body");
        menu_btn = document.querySelector("#menu-btn");
        header = document.querySelector('.main-header');

        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };

        checkScrollOffset(offset);

    });

    const checkScrollOffset = (num: Number) => {
        if (header instanceof HTMLHeadingElement) {
            num > 10 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
        }
    };

    const toggleHeader = () => {
        if (body instanceof HTMLBodyElement) {
            !body.classList.contains("no-scroll")
                ? body.classList.add("no-scroll")
                : body.classList.remove("no-scroll");
        }
    };

    const toggleMenuFromNav = () => {
        if (menu_btn instanceof HTMLInputElement) {

            if (menu_btn.checked) {
                menu_btn.checked = false;
            }
        }

        if (body instanceof HTMLBodyElement) {

            if (body.classList.contains("no-scroll")) {
                body.classList.remove("no-scroll");
            }
        }
    };

    return (
        <header id={`${originPage}-page`} className="main-header">
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
                onClick={toggleHeader}
            />
            <label htmlFor="menu-btn" className="menu-icon">
                <p className="hidden">Menu Button</p>
                <span className="menu-icon__line"></span>
            </label>
            <nav className="nav-links">
                <ul>
                    <li className="nav-link">
                        <Link href="/about">
                            <a onClick={toggleMenuFromNav}>About</a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/services">
                            <a onClick={toggleMenuFromNav}>Services</a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/contact">
                            <a onClick={toggleMenuFromNav}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
