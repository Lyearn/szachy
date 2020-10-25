import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@material-ui/core";

interface Column {
  id: "playerName" | "rating" | "time" | "mode";
  label: string;
  width?: number;
  align?: "right";
}

const columns: Column[] = [
  { id: "playerName", label: "Player Name", width: 100 },
  { id: "rating", label: "Rating", width: 100 },
  {
    id: "time",
    label: "Time",
    width: 100,
  },
  {
    id: "mode",
    label: "Mode",
    width: 100,
  },
];

interface Data {
  playerName: string;
  rating: number;
  time: string;
  mode: string;
}

function createData(
  playerName: string,
  rating: number,
  time: string,
  mode: string
): Data {
  return { playerName, rating, time, mode };
}

const openGamesRows: any = [
  //Adding temporary data for visualization purposes
  createData("A", 1900, "10+5", "casual"),
  createData("B", 1900, "10+5", "casual"),
  createData("C", 1900, "10+5", "casual"),
  createData("D", 1900, "10+5", "casual"),
  createData("E", 1900, "10+5", "casual"),
  createData("F", 1900, "10+5", "casual"),
  createData("G", 1900, "10+5", "casual"),
  createData("H", 1900, "10+5", "casual"),
  createData("I", 1900, "10+5", "casual"),
  createData("J", 1900, "10+5", "casual"),
  createData("K", 1900, "10+5", "casual"),
];

const challenges: any = [];

interface Props {
  type: string;
  handleCreate: any;
}

export default function OpenGames(props: Props) {
  return (
    <Paper style={{ width: "100%", boxShadow: "none" }}>
      <TableContainer style={{ height: 450 }}>
        {props.type === "openGames" ? (
          openGamesRows.length > 0 ? (
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      width={column.width}
                      key={column.id}
                      align={column.align}
                      style={{ width: column.width }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {openGamesRows.map((row: any) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.playerName}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>No Games Found!</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 4, marginTop: 10 }}
                disableRipple
                disableElevation
                onClick={props.handleCreate}
              >
                Create One
              </Button>
            </div>
          )
        ) : challenges.length > 0 ? (
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    width={column.width}
                    key={column.id}
                    align={column.align}
                    style={{ width: column.width }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {challenges.map((row: any) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.playerName}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>No Challenges Found!</Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: 4, marginTop: 10 }}
              disableRipple
              disableElevation
              onClick={props.handleCreate}
            >
              Create One
            </Button>
          </div>
        )}
      </TableContainer>
    </Paper>
  );
}
