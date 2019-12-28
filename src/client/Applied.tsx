import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";
import { DisplayTable } from "./DisplayTable";
import { PostingsTable } from "./PostingsTable";
import { AppliedTable } from "./AppliedTable";
import { NavBar } from "./NavBar";
import { useFetch } from "./useFetch";
import { useState } from "react";
import { generate } from "shortid";
import * as css from "./myStyles.css";

import { Link, RouteComponentProps } from "react-router-dom";
interface Props extends RouteComponentProps {}

import { Advertisement } from "./Advertisement";
import { TableSelection } from "./TableSelection";

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

export const Applied: React.FC<Props> = ({ history, location }) => {
  const [rows, setRows] = useState([]);
  return (
    // <main className="container my-5">
    <div>
      <Advertisement />
      <TableSelection historyProp={history} rowProp={[]} appliedProp={[]} />
      {/* <span>{JSON.stringify(location)}</span> */}
      {console.log(location)}
      <AppliedTable row={location.state.appliedProp} />
    </div>
  );
};
