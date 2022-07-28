import React, {useState} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header';

function App() {
  const [section, setCurrentPage] = useState('about');
  let CurrentPage;
    

  if (section === 'about') CurrentPage = About;
  if (section === 'portfolio') CurrentPage = Portfolio;
  if (section === 'contact') CurrentPage = Contact;
  if (section === 'resume') CurrentPage = Resume;
    
   return (
          <div>
             <div className='header'>
                <Header CurrentPage={CurrentPage} setCurrentPage={setCurrentPage}></Header>
            </div>
           <div>
           <main><CurrentPage/></main>
           </div>
           <div>
            <Footer>

            </Footer>
           </div>
           </div>

        );
}

export default App;
