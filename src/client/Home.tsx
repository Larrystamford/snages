import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";
import { DisplayTable } from "./DisplayTable";
import { PostingsTable } from "./PostingsTable";
import { PersonalTable } from "./PersonalTable";
import { NavBar } from "./NavBar";
import { useFetch } from "./useFetch";
import { useState, useEffect } from "react";
import { generate } from "shortid";
import { Advertisement } from "./Advertisement";
import { TableSelection } from "./TableSelection";

import { Link, RouteComponentProps } from "react-router-dom";
interface Props extends RouteComponentProps {}

export const Home: React.FC<Props> = ({ history }) => {
  const { data, loading } = useFetch("/api/internships");
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);

  if (loading) return null;
  return (
    <div>
      <Advertisement />
      <TableSelection historyProp={history} rowProp={rows} />
      {/* <pre>{JSON.stringify(rows)}</pre> */}
      <PostingsTable
        rows={...data}
        onClick={rowData => {
          console.log("clicked", rowData);
          setRows(prevState => [...prevState, rowData]);
        }}

        // onClick={rowData => {
        //   setRow(() => [{ ...rowData }]);
        // }}

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

      {/* <PersonalTable row={row} /> */}

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
    </div>
  );
};

{
  /* <div>
        <div>{data ? data:"loading... "}</div>
        <div>Counter: {count}</div>
        <button onClick={()=>setCount(i=>i+1)}></button>
      </div>; */
}
