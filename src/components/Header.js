import React from "react";

const Header = props => (
    <div className="my-5 py-2">
        <div className="mt-4 container">
            <h1 className="display-4 text-center text-dark">CLICKY</h1>
            <h1 className="display-5 text-center text-dark">MEMORY GAME</h1>
            <p className="lead text-dark text-center">Click an image to score a point, but don't click the same one more than once!</p>
            <p className="lead text-dark text-center">Choose a difficulty:</p>
            <button className={`btn mx-1 ${props.difficulty === "Easy" ? "btn-info" : "btn-outline-info"}`} 
            onClick={() => props.chooseDifficulty("Easy")}>
            Easy</button>

            <button className={`btn mx-1 ${props.difficulty === "Medium" ? "btn-info" : "btn-outline-info"}`} 
            onClick={() => props.chooseDifficulty("Medium")}>
            Medium</button>

            <button className={`btn mx-1 ${props.difficulty === "Hard" ? "btn-info" : "btn-outline-info"}`} 
            onClick={() => props.chooseDifficulty("Hard")}>
            Hard</button>

        </div>
    </div>
);

export default Header;