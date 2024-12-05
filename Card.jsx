import React from 'react'
import pic from "../images/lotus.jpg";
import from "./components/Card.css"
const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.pic} alt="myimage" />
      <h2>{props.roll}</h2>
     </div>
  );
};

export default Card;