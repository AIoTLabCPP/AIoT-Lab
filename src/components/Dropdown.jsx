import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/dropdown.css";

export default function Dropdown({ options }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (page) => {
    navigate(page);
    setOpen(false);
  };

  return (
    <div
      className="dropdown"
      tabIndex={0}
      onBlur={() => setOpen(false)}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="current-option">
        <span>OUTCOMES</span>
        <div className={open ? "arrow active" : "arrow"}></div>
      </div>
      <div className={open ? "options active" : "options"}>
        {Object.entries(options).map(([key, option]) => (
          <div
            className="option"
            key={key}
            onClick={() => handleOptionClick(option.page)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}
