import React from "react";

const Card = props => (
    <div className="mx-auto">
        <div key={props.id} onClick={() => props.game(props.id)} className="col-6 col-sm-6 col-md-3 my-3">
            <img className="rounded" alt={props.id} src={props.image}></img>
        </div>
    </div>
);

export default Card;