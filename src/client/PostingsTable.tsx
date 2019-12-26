import React from "react";
import MaterialTable, { Column } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import withWidth from "material-ui/utils/withWidth";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: 700
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
  onClick: (event: any, data: RowData | RowData[] | null) => void;
  rows: Array<{ Row }>;
}

export const PostingsTable: React.FC<Props> = ({ rows, onClick }) => {
  const classes = useStyles();
  const [state, setState] = React.useState<TableState | any>({
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
    <div className="container my-5">
      {/* <span>{JSON.stringify(rows)}</span> */}
      <MaterialTable
        title="Internship Listings"
        columns={state.columns}
        // data={rows.map(row => ({ ...row }))}
        data={state.data}
        actions={[
          {
            icon: "save",
            tooltip: "Add to Personal",
            onClick: (event, rowData) => {
              onClick(rowData);
            }
          }
        ]}
        editable={{
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
        options={{
          actionsColumnIndex: -1
        }}
      />
    </div>
  );
};
