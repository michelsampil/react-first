import React from "react";

export const Card = () => {
  const cardTitle = "My First Component";
  const cardDetails = "Here some details... 😁";
  const isMoreDetails = false;
  const something = ["🐛", "👻", "👽"];
  return (
    <div style={{ backgroundColor: "lavender", border: "1px solid pink" }}>
      <h1>{cardTitle}</h1>
      <p>{cardDetails}</p>
      {isMoreDetails && <span>More detail...</span>}
      {something.map((e) => {
        return <span>{e}</span>;
      })}
    </div>
  );
};
