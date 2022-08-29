import React from "react";

export function MainPage({ deleteToken }) {
  return (
    <div>
      <div>Hello User</div>
      <button onClick={deleteToken}>exit</button>
    </div>
  );
}
