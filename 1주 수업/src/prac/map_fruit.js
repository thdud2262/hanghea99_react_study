import React, { useState } from "react";
import "./App.css"; // ð¥ ë°ëì App.css íì¼ì import í´ì¤ì¼ í©ëë¤.


const App = () => {
  const vegetables = ['tì¬ê³¼','ë°°','í ë§í ','ë¹ê·¼','í¬í '];
  return (
    <div className="app">
      {vegetables.map((vegetableName) =>{
        return(
          <div className="square-style" key={vegetableName}>
            {vegetableName}
          </div>
        )
      })}
    </div>

  )
}
export default App;

