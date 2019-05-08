import React from "react";

const Navbar = props => (
    <div>
        <nav className="navbar fixed-top p-4 mx-auto">
            <div className="container">
                <h5 className="mx-auto">Your Score: {props.currentScore} | High Score: {props.highScore}</h5>
            </div>
        </nav>
        
    </div>
);

export default Navbar;