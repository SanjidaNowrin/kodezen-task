import React from "react";

// input field
const InputField = ({ label, name, value, onChange, options = [], type }) => {
  return (
    <>
      {type === "select" ? (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <label className="w-50">{label}:</label>
          <div className="w-50">
            <select
              name={name}
              className="form-select"
              value={value}
              onChange={onChange}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center">
              <label>{label}</label>
              <i className="fa-solid fa-desktop ms-2"></i>
            </div>
            <div className="d-flex align-items-center">
              <p className="mb-0">px:</p>
              <i className="fas fa-angle-down ms-2 fa-xs"></i>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-1 ">
            <input
              type="range"
              name={name}
              className="w-75 "
              value={value}
              min={10}
              max={40}
              onChange={onChange}
            />
            <span className="p-1 border rounded">{value}px</span>
          </div>
        </>
      )}
    </>
  );
};

const Sidebar = ({ font, setFont }) => {
  const {
    fontFamily,
    fontSize,
    fontWeight,
    textDecoration,
    fontStyle,
    textTransform,
    wordSpacing,
    letterSpacing,
    lineHeight,
  } = font || {};

  //   handle data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFont({ ...font, [name]: value });
  };

  return (
    <div className="shadow p-3 mt-3 rounded">
      <div className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-4 rounded">
        <h5>Typography</h5>
        <div>
          <i className="fa-solid fa-rotate-right border rounded p-2"></i>
          <i className="fa-solid fa-plus border rounded p-2 ms-2"></i>
        </div>
      </div>
      <InputField
        type="select"
        label="Family"
        name="fontFamily"
        value={fontFamily}
        onChange={handleChange}
        options={["Arial", "Times New Roman", "Sans Serif", "Roboto"]}
      />
      <InputField
        label="Size"
        type="range"
        name="fontSize"
        value={fontSize}
        min={10}
        max={40}
        step={1}
        onChange={handleChange}
      />

      <InputField
        label="Weight"
        type="select"
        name="fontWeight"
        value={fontWeight}
        onChange={handleChange}
        options={["normal", "bold"]}
      />

      <InputField
        label="Transform"
        type="select"
        name="textTransform"
        value={textTransform}
        onChange={handleChange}
        options={["none", "uppercase", "lowercase"]}
      />

      <InputField
        label="Style"
        name="fontStyle"
        type="select"
        value={fontStyle}
        onChange={handleChange}
        options={["normal", "italic"]}
      />

      <InputField
        type="select"
        label="Decoration"
        name="textDecoration"
        value={textDecoration}
        onChange={handleChange}
        options={["none", "underline", "line-through"]}
      />

      <InputField
        label="Line-Height"
        type="range"
        name="lineHeight"
        value={lineHeight}
        min={10}
        max={40}
        step={1}
        onChange={handleChange}
      />

      <InputField
        label="Letter Spacing:"
        type="range"
        name="letterSpacing"
        value={letterSpacing}
        min={10}
        max={40}
        step={1}
        onChange={handleChange}
      />
      <InputField
        label="Word Spacing:"
        type="range"
        name="wordSpacing"
        value={wordSpacing}
        min={10}
        max={40}
        step={1}
        onChange={handleChange}
      />
    </div>
  );
};

export default Sidebar;
