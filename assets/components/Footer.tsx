import React from "react";
import Link from 'next/link';
import SingleColumn from './SingleColumn';
import classes from '../styles/modules/footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date();
  return (
    <>
      <footer className={classes.footer}>
        <SingleColumn sectionId="footer">

          <div className={classes.header}>
            <h6 className="h1">
              O&#39;Donnell &amp; Associates Inc.
            </h6>
            <p className="h3">Mobile, AL</p>
          </div>

          <div className={classes.navigation}>
            <ul className={classes.navList}>
              <li><Link href="/about"><a>About</a></Link></li>
              <li><Link href="/services"><a>Services</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>

          <div className={classes.odieBlurb}><p>© 1997–{currentYear.getFullYear()} | by <a href="https://github.com/mrodie">Sam O'Donnell</a></p></div>
        </SingleColumn>


      </footer>
    </>
  )
}

export default Footer;