import * as React from "react";

interface Props {}

export const Advertisement: React.FC<Props> = () => {
  return (
    <div
      style={{
        margin: "auto",
        position: "relative",
        top: "20px",
        display: "flex",
        justifyContent: "center",
        height: "20vh",
        width: "90vw",
        backgroundColor: "white",
        alignItems: "center",
        border: "3px solid black"
      }}
    >
      Advertisement
    </div>
  );
};
