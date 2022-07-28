import React from "react";
import Home from '../Home';

function Header(props) {
    const { currentPage, setCurrentPage} = props;
    
    return (
        <header>
            <div>
                <h2 style={{ textAlign: "center"}}>React Portfolio by Marquise Allen</h2>
            </div>

            <div>
                <Home
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        ></Home>

            </div>
        </header>
    );
}

export default Header;