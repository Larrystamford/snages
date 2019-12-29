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
import { Home } from "./Home";
import { Personal } from "./Personal";
import { Postings } from "./Postings";
import { Applied } from "./Applied";
import { Services } from "./Services";
import { Articles } from "./Articles";
import { Advertisement } from "./Advertisement";
import { TableSelection } from "./TableSelection";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const App = () => {
  // lifted state for PostingTable and PersonalTable

  return (
    // <main className="container my-5">
    <BrowserRouter>
      <main>
        <NavBar className="main" />
        <switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/listings" component={Home} /> */}
          {/* <Route path="/listings/postings" component={Postings} /> */}
          <Route path="/listings/personal" exact component={Personal} />
          <Route path="/listings/applied" exact component={Applied} />
          <Route path="/discussions" exact component={Discussions} />
          <Route path="/services" exact component={Services} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/tableselection" exact component={TableSelection} />
          {/* <Route path="/" render={() => <div>404 error</div>} /> */}
        </switch>
      </main>
    </BrowserRouter>
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
