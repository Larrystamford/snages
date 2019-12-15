import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";
import { MyForm } from "./MyForm";
import { MyTable } from "./MyTable";

//testing a commit

class App extends React.Component<IAppProps, IAppState> {
  // const [rows, setRows] = useState<>([{
  //   id: "20",
  //   company: "Google",
  //   role: "Software Engineer",
  //   dateOpen: "12/3/22",
  //   dateClose: "23/2/23"
  // }])

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      // postings: null
      postings: []
    };
  }

  async componentDidMount() {
    try {
      let r = await fetch("/api/internships");
      let postings = await r.json();
      this.setState({ postings });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // const [rows, setRows] = React.useState([
    //   {
    // id: "20",
    // company: "Google",
    // role: "Software Engineer",
    // dateOpen: "12/3/22",
    // dateClose: "23/2/23",
    // notes: "hisds"
    //   }
    // ]);

    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Snags</h1>
        <ul className="list-group">
          {this.state.postings.map(post => {
            return <li className="list-group-item">{post.role}</li>;
          })}
        </ul>
        <MyForm
          onSubmit={({ company, role, dateOpen, dateClose, notes }) => {
            console.log(company, role, dateOpen, dateClose, notes);
          }}
        />
        <MyTable
          rows={[
            {
              id: "20",
              company: "Google",
              role: "Software Engineer",
              dateOpen: "12/3/22",
              dateClose: "23/2/23",
              notes: "hisds"
            }
          ]}
        />
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  // name: string;
  postings: Array<{ title: string; role: string }>;
}

export default App;
