import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";
import { DisplayTable } from "./DisplayTable";
import { PostingsTable } from "./PostingsTable";
import { PersonalTable } from "./PersonalTable";
import { NavBar } from "./NavBar";
import { useFetch } from "./useFetch";
import { useState } from "react";
import { generate } from "shortid";
import * as css from "./myStyles.css";

import { Discussions } from "./Discussions";

const App = () => {
  const { data, loading } = useFetch("/api/internships");
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);
  const [row, setRow] = useState([]);

  if (loading) return "Loading...";
  return (
    // <main className="container my-5">
    <main>
      <PostingsTable
        rows={...data}
        onClick={rowData => {
          setRow(() => [{ ...rowData }]);
        }}
        // onClick={rowData => {
        //   var postingExist = false;
        //   rows.forEach(item => {
        //     if (item.id == rowData.id) {
        //       postingExist = true;
        //     }
        //   });
        //   postingExist
        //     ? alert("Preventing Duplicate Postings.")
        //     : (setRows(currentRows => [
        //         ...currentRows,
        //         {
        //           ...rowData
        //           // id: generate()
        //           // put below current rows
        //         }
        //       ]),
        //       setRow(() => [{ ...rowData }]));
        // }}
      />

      <PersonalTable row={row} />

      {/* <DisplayTable rows={...data} /> */}

      {/* <MyForm
        onSubmit={submitData => {
          setRows(currentRows => [
            ...currentRows,
            {
              id: generate(),
              ...submitData
            }
          ]);
        }}
      /> */}
      {/* Note that ... spreads both array and objects */}
      {/* <MyTable rows={rows} /> */}
    </main>
  );
};

export default App;

{
  /* <div>
        <div>{data ? data:"loading... "}</div>
        <div>Counter: {count}</div>
        <button onClick={()=>setCount(i=>i+1)}></button>
      </div>; */
}
