import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";
import { DisplayTable } from "./DisplayTable";
import { PostingsTable } from "./PostingsTable";
import { useFetch } from "./useFetch";
import { useState } from "react";
import { generate } from "shortid";
//testing a commit

const App = () => {
  const { data, loading } = useFetch("/api/internships");
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);

  if (loading) return "Loading...";
  return (
    <main className="container my-5">
      {/* <span>{JSON.stringify(data)}</span> */}

      <PostingsTable
        rows={[...data]}
        onClick={submitData => {
          setRows(currentRows => [
            ...currentRows,
            {
              ...submitData,
              //put below to overwrite id
              // id: 23
            }
          ]);
        }}
      />

      <DisplayTable rows={[...data]} />

      <MyForm
        onSubmit={submitData => {
          setRows(currentRows => [
            ...currentRows,
            {
              id: generate(),
              ...submitData
            }
          ]);
        }}
      />
      {/* Note that ... spreads both array and objects */}
      <MyTable rows={rows} />
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
