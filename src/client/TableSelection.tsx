import * as React from "react";
import { useState, useEffect } from "react";
import { Home } from "./Home";

// function renderUpdate(personal) {
//   if (personal) {
//     console.log(personal);
//     return <Home selection={personal} />;
//   }
//   return null;
// }

interface Props {
  historyProp: any;
  rowProp: any;
  appliedProp: any;
}

export const TableSelection: React.FC<Props> = ({
  historyProp,
  rowProp,
  appliedProp
}) => {
  console.log("table selection:", rowProp);
  const [personal, setPersonal] = useState(false);

  // useEffect(() => {
  //   // console.log(personal);
  //   <Home selection={personal} />;
  // }, [personal]);

  return (
    <main>
      <div
        style={{
          margin: "auto",
          position: "relative",
          top: "29px",
          display: "flex",
          justifyContent: "center",
          height: "5vh",
          width: "90vw",
          backgroundColor: "white",
          alignItems: "center",
          border: "3px solid black"
        }}
      >
        <button
          onClick={() => {
            historyProp.push({
              pathname: "/"
            });
          }}
        >
          Postings
        </button>

        <button
          onClick={() => {
            historyProp.push({
              pathname: "/listings/personal",
              state: {
                rowProp
              }
            });
          }}
        >
          Personal
        </button>
        <button
          onClick={() => {
            historyProp.push({
              pathname: "/listings/applied",
              state: {
                appliedProp
              }
            });
          }}
        >
          Applied
        </button>
      </div>
    </main>
  );
};
