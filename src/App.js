import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [font, setFont] = useState({
    fontFamily: "Arial",
    fontWeight: "normal",
    textTransform: "none",
    fontStyle: "normal",
    textDecoration: "none",
    fontSize: 16,
    lineHeight: 1,
    letterSpacing: 0,
    wordSpacing: 0,
  });
  const [selected, setSelected] = useState(false);

  // handle clicked icon
  const handleIconClick = () => {
    setSelected(!selected);
  };

  //font styles for content
  const textStyles = {
    ...font,
    textAlign: "center",
    fontSize: `${font.fontSize}px`,
    letterSpacing: `${font.letterSpacing}px`,
    lineHeight: `${font.lineHeight}px`,
    wordSpacing: `${font.wordSpacing}px`,
  };

  return (
    <div className="row m-0">
      {/* sidebar */}
      <div className="col-lg-4 col-sm-8 p-4 pt-0 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h5>Typography</h5>
          <div>
            <i className="fa-solid fa-globe border rounded p-2"></i>
            <i
              className={`fa-solid fa-pen ms-2 border rounded p-2 icon ${
                selected && "selected-icon p-2"
              }`}
              onClick={handleIconClick}
            ></i>
          </div>
        </div>
        {/* selected section */}
        {selected && <Sidebar font={font} setFont={setFont} />}
      </div>
      {/* content */}
      <div className="col-lg-8 col-sm-4 d-flex align-items-center justify-content-center">
        <h1 style={textStyles}>Kodezen Task</h1>
      </div>
    </div>
  );
};

export default App;
