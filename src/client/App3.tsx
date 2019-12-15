import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";
import { useFetch } from "./useFetch";
import { useState } from "react";
import { generate } from "shortid";
//testing a commit

const App = () => {
  const [ data, isLoading ] = useFetch("/api/internships");
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);
  return (
    <main className="container my-5">
      {!isLoading
        ? data.map(eachDatabase => {
            console.log(eachDatabase.postingsId);
            setRows(currentRows => [
              ...currentRows,
              {
                id: eachDatabase.postingsId,
                company: "hello",
                role: "myrole",
                dateOpen: "sd",
                dateClose: "3",
                notes: "hefj"
              }
            ]);
          })
        : "Loading..."}
      <MyForm
        onSubmit={submitData => {
          console.log(submitData);
          setRows(currentRows => [
            ...currentRows,
            {
              id: generate(),
              ...submitData
            }
          ]);
        }}
      />
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

















import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";
import { useFetch } from "./useFetch";
import { useState } from "react";
import { generate } from "shortid";
//testing a commit

const App = () => {
  const { data, loading } = useFetch("/api/internships");
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);
  return (
    <main className="container my-5">
      {!loading
        ? data.map(post => {
            return <li className="list-group-item">{post.role}</li>;
          })
        : "Loading..."}
      <MyForm
        onSubmit={data => {
          setRows(currentRows => [
            ...currentRows,
            {
              id: generate(),
              ...data
            }
          ]);
        }}
      />
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



{
      id: data.postingsId,
      company: data.title,
      role: data.role,
      dateOpen: data.dateOpen,
      dateClose: data.dateClose,
      notes: "hello"
    }

    id: data.postingsId,
    company: data.title,
    role: data.role,
    dateOpen: data.dateOpen,
    dateClose: data.dateClose,
    notes: "hello"

    {
      id: "sds",
      company: "Sds",
      role: "sds",
      dateOpen: "sdajsd",
      dateClose: "sadsad",
      notes: "hello"
    }