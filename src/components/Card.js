import React from "react";

const Card = props => (
    <div className="mx-auto">
        <div className="col-6 col-sm-6 col-md-3 my-3">
            <img className="shadow" alt="d" src={props.image}></img>
        </div>
    </div>
);

export default Card;