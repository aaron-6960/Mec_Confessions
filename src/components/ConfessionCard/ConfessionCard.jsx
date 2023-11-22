import React from "react";
import "./ConfessionCard.css";

const ConfessionCard = (props) => {
  return (
    <article className="confessions card">
      <h3>{props.confession}</h3>
      <p>{props.confessionDate.slice(0, 10)}</p>
    </article>
  );
};

export default ConfessionCard;
