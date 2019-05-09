import React from "react";

const Navbar = props => (
    <div>
        <nav className="navbar fixed-top p-3 mx-auto bg-info shadow">
            <div className="container">
                <h5 className="mx-auto text-white">Score: {props.currentScore} | High Score: {props.highScore}</h5>
            </div>
        </nav>
        
    </div>
);

export default Navbar;