import React from "react";
import { useParams } from "react-router-dom";

export function Page() {
  let params = useParams();
  return (
    <div className="d-flex justify-content-center">
      <h1 className="display-1">Page {params.id}</h1>
    </div>
  );
}
