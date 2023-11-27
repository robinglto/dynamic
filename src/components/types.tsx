import React from "react";

// type Props = {
//   id: number;
//   name: string;
//   age: number;
//   sex: "M" | "F";
// };

type Props = {
  id: number;
  name: string;
  age: number;
  sex: "M" | "F";
}[];

export default function Tipos() {
  // const people: Props[] = [
  //   { id: 1, name: "saul", age: 20, sex: "M" },
  //   { id: 2, name: "fulanita", age: 32, sex: "F" },
  // ];
  const people: Props = [
    { id: 1, name: "saul", age: 20, sex: "M" },
    { id: 2, name: "fulanita", age: 32, sex: "F" },
  ];
  return (
    <div>
      {people.map((data) => (
        <div key={data.id}>
          <p>{`Hola, mi nombre es ${data.name} soy del genero ${data.sex} y tengo ${data.age} years`}</p>
          <p>{JSON.stringify(data)}</p>
        </div>
      ))}
    </div>
  );
}
