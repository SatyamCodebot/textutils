import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("UpperCase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
const handleClrclick = () => {
  setText('');
}
  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" rows="8" col="3" value={text} onChange={handleOnchange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>Change to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>Change to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClrclick}>Clear </button>

      </div>
      <div className="container my-3">
        <h2>Your Text Summary </h2>
        <p>
          {text.split(" ").length}Words and {text.length} characters{" "}
        </p>
      </div>
    </>
  );
}
