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

import { Link, RouteComponentProps } from "react-router-dom";
interface Props extends RouteComponentProps {}

interface Props {
  rows: Array<{
    id: string;
    company: string;
    role: string;
    dateClose: string;
    notes: string;
  }>;
  location: any;
}

export const Personal: React.FC<Props> = ({ location }) => {
  console.log(location.state.rowProp);
  return (
    // <main className="container my-5">
    <div>
      <PostingsTable
        rows={...data}
        onClick={rowData => {
          console.log("clicked", rowData);
          setRows(prevState => [...prevState, rowData]);
        }}
      />
    </div>
  );
};
