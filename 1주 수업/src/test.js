import React, { useState } from "react";
import "./App.css"; // π₯ λ°λμ App.css νμΌμ import ν΄μ€μΌ ν©λλ€.


// ----------------------------
const Rtan = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.value.name}κ° μ§±μ΄μμ</p>
      <button onClick={() => (props.setName('μ§λμ¬μ°λ₯΄μ€'))}>λ°κΏλΌ</button>
    </>

  )
}

const Test = () => {
  const [name, setName] = useState({name : 'Rtan'})
  return (
    <>
      <h1>λΌμ΄νμ¬μ΄ν΄μ΄λ!</h1>
      <Rtan value={name} setName={setName}/>

    </>
  );
};

export default Test;

