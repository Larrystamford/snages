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
}

export const TableSelection: React.FC<Props> = ({ historyProp, rowProp }) => {
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
          Personal List
        </button>
      </div>
    </main>
  );
};
