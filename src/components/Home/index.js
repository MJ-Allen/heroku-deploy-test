import React from 'react';
import About from   '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Footer from '../Footer';

 
function Nav ({ setCurrentPage }) {
 return (
     <div>
        <a href="#about" onClick={() => setCurrentPage ('about')}>About</a>
        <a href="#portfolio" onClick={() =>setCurrentPage ('portfolio')}>Portfolio</a>
        <a href="#resume" onClick={() =>setCurrentPage ('resume')}>Resume</a>
        <a href="#contact" onClick={() =>setCurrentPage ('contact')}>Contact</a>
     </div>
 )
}
export default Nav;