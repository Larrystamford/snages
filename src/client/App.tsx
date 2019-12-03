import * as React from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

class App extends React.Component<IAppProps, IAppState> {
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
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Snags</h1>
				<ul className="list-group">
					{this.state.postings.map(post => {
						return <li className= "list-group-item">{post.role}</li>
					})}
				</ul>
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  // name: string;
  postings: Array<{ title: string, role: string }>;
}

export default App;
