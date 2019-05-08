import React from "react";

const Header = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4 text-center text-white">CLICKY GAME</h1>
            <h1 className="text-center text-white">MEMORY GAME</h1>
            <p className="lead text-white text-center">Click an image to score a point, but don't click the same one more than once!</p>
            
            <p className="text-white text-center">Choose a difficulty:</p>
            <button className={`btn mx-1 ${props.difficulty === "easy" ? "btn-primary" : "btn-outline-primary"}`} 
            onClick={() => props.chooseDifficulty("easy")}>
            Easy</button>

            <button className={`btn mx-1 ${props.difficulty === "medium" ? "btn-primary" : "btn-outline-primary"}`} 
            onClick={() => props.chooseDifficulty("medium")}>
            Medium</button>

            <button className={`btn mx-1 ${props.difficulty === "hard" ? "btn-primary" : "btn-outline-primary"}`} 
            onClick={() => props.chooseDifficulty("hard")}>
            Hard</button>

        </div>
    </div>
);

export default Header;