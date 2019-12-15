import React from "react";
import MaterialTable, { Column } from "material-table";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

// interface Row {
//   name: string;
//   surname: string;
//   birthYear: number;
//   birthCity: number;
// }

interface Row {
  id: number;
  company: string;
  role: string;
  dateClose: string;
  notes: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

interface Props {
  onClick: (values: Row) => void;
  rows: Array<{ Row }>;
}

export const PostingsTable: React.FC<Props> = ({ rows, onClick }) => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "Id", field: "id" },
      { title: "Company", field: "company" },
      { title: "Role", field: "role" },
      { title: "dateClose", field: "dateClose" },
      { title: "Notes", field: "notes" }
    ],
    // data: [{
    //   id: 'string';
    // company: 'string';
    // role: 'string';
    // dateOpen: 'string';
    // dateClose: 'string';
    // notes: 'string';
    // }]
    data: [...rows]
  });

  return (
    <div>
      <span>{JSON.stringify(rows)}</span>
      <MaterialTable
        title="Internship Listings"
        columns={state.columns}
        // data={rows.map(row => ({ ...row }))}
        data = {state.data}
        actions={[
          {
            icon: "save",
            tooltip: "Add to Personal",
            onClick: (event, rowData) => {
              onClick(rowData);
            }
          }
          {
            icon: "delete",
            tooltip: "Remove from list",
            onClick: (event, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  console.log(oldData)
                  // splice(which index, how many to remove, new data)
                  data.splice(data.indexOf(oldData), 1);
                  
                  return { ...prevState, data };
                });
              }, 600);
            })
          }
        ]}
        
      />
    </div>
  );
};
