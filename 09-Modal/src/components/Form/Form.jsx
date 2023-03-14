import React, { useState } from "react";

export const Form = () => {
  const [grados, setGrados] = useState();
  const [far, setFar] = useState();

  const calcularGradosAFar = (e) => {
    e.preventDefault()
    setFar((grados * 9/5) + 32)
    console.log(grados);
  };

  return (
    <>
    <form onSubmit={calcularGradosAFar}>
      <input
      type="number"
        value={grados}
        onChange={(e) => {
          setGrados(e.target.value);
          console.log(grados);
        }}
      />
    </form>

    <h2> {far} </h2>
    </>
  );
};
