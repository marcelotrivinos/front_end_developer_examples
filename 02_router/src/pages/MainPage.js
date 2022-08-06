import React from "react";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const buttonsText = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];

  let navigate = useNavigate();

  return (
    <div className="d-flex flex-column">
      {buttonsText.map((textButton, index) => (
        <button
          className="btn btn-primary"
          key={index}
          type="button"
          onClick={() =>
            navigate(`/${textButton.toLowerCase().replace(" ", "_")}`)
          }
        >
          {textButton}
        </button>
      ))}
    </div>
  );
}
