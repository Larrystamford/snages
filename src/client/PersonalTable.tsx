import React from "react";
import MaterialTable, { Column } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { stat } from "fs";
import { useEffect, useState } from "react";
import { usePersonalTable } from "./usePersonalTable";
import { TablePagination } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "purple"
    }
  },
  tableCell: {
    "$selected &": {
      color: "yellow"
    }
  },
  selected: {}
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
  row: Array<{ Row }>;
  onClick: (event: any, data: RowData | RowData[] | null) => void;
}

export const PersonalTable: React.FC<Props> = ({ row, onClick }) => {
  const [table, setTable] = React.useState<TableState>({
    columns: [
      { title: "Id", field: "id" },
      { title: "Company", field: "company" },
      { title: "Role", field: "role" },
      { title: "dateClose", field: "dateClose" },
      { title: "Notes", field: "notes" }
    ],
    // data: [{
    // id: 21;
    // company: 'string';
    // role: 'string';
    // dateClose: 'string';
    // notes: 'string';
    // }]
    data: []
  });
  useEffect(() => {
    setTable(prevState => {
      const data = [...prevState.data];
      data.push(...row);
      return { ...prevState, data };
    });
  }, [row]);

  // useEffect(() => {
  //   // console.log("effectTable", table);
  //   var postingExist = false;
  //   table.data.forEach(item => {
  //     // console.log("rowId ", row[0].id);
  //     if (item.id == row[0].id) {
  //       postingExist = true;
  //     }
  //   });
  //   postingExist
  //     ? alert("Preventing Duplicate Postings")
  //     : setTable(prevState => {
  //         const data = [...prevState.data];
  //         data.push(...row);
  //         return { ...prevState, data };
  //       });
  // }, [row]);

  return (
    <div className="container my-5">
      {/* <span>{JSON.stringify(table.data)}</span> */}
      <MaterialTable
        components={{
          Pagination: props => (
            console.log(props),
            (
              <div>
                <TablePagination {...props} />
              </div>
            )
          )
        }}
        title="Personal Table"
        columns={table.columns}
        // data={row.map(row => ({ ...row }))}
        data={table.data}
        // onChange={console.log(row)}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setTable(prevState => {
                  // console.log("newData ", newData);
                  // console.log("prev State ", prevState);
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setTable(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            })
        }}
        actions={[
          {
            icon: "done",
            tooltip: "Applied",
            onClick: (event, rowData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  onClick(rowData);
                  setTable(prevState => {
                    const data = [...prevState.data];
                    console.log("personal", prevState);
                    // console.log("personal", oldData);
                    // splice(which index, how many to remove, new data)
                    data.splice(data.indexOf(rowData), 1);
                    data.push(rowData);
                    return { ...prevState, data };
                  });
                }, 600);
              })
          },
          {
            icon: "delete",
            tooltip: "Remove from list",
            onClick: (event, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setTable(prevState => {
                    const data = [...prevState.data];
                    console.log("personal", data);
                    // console.log("personal", oldData);
                    // splice(which index, how many to remove, new data)
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              })
          }
        ]}
        options={{
          actionsColumnIndex: -1
        }}
      />
    </div>
  );
};
