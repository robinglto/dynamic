import React from "react";

type Props = string[];

export default function Array() {
  const people: Props = [
    "saul",
    "fulanita",
    "menganito",
    "perenganito",
    "sutanito",
    "sutano",
    "sutana",
  ];
  return (
    <div>
      {people.map((data, index) => (
        <div key={index}>
          <p>{data}</p>
        </div>
      ))}
    </div>
  );
}
