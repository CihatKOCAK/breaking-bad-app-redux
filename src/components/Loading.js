import React, { useEffect, useState } from "react";
import "./loading.css";

export default function Loading() {
  const [dot, setDot] = useState(".");
  const [text, setText] = useState("Loading data..");
  let x ="";
  useEffect(() => {
    setInterval(() => {
      if (x.length < 13) {
        x+= "...";
        setDot(x);
        if(x.length < 6)
        {
          setText("Loading...");
        }
      } else {
        
        x="";
      }
    }, 1000);
  }, []);

  return (
    <div className="container-loading" style={{ backgroundImage: `url("./assets/loading-src.jpg")` }}>
      <div className="loading">{text}</div>

      <div className="loading2">{dot}</div>
    </div>
  );
}
