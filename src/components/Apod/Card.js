import React from "react";

function Card(props){
    return(
        <div className="Card-Component">
            <h1 className="Title-of-card"> {props.title}</h1>
            <img className="Card-img" src={props.img} alt="nasa gallery"></img>
            <h2 className="Img-description" onClick={props.onClick}>
            {props.explanation} </h2>
            <h3 className="Img-Date">{props.date}</h3>
            <h4 className="Img-copyright"> {props.copyright}  </h4>
        </div>
    )
}

export default Card;