import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@material-ui/core";
import { tableCell, noGamesDiv, createButton } from "./styles";

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

interface Column {
  id: "playerName" | "rating" | "time" | "mode";
  label: string;
  width?: number;
  align?: "right";
}

interface Props {
  type: String;
  data: any;
  handleCreate: () => void;
}

export default function TableContent(props: Props) {
  return props.data.length > 0 ? (
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column: Column) => (
            <TableCell
              width={column.width}
              className={tableCell}
              key={column.id}
              align={column.align}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((row: any) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.playerName}>
              {columns.map((column: Column) => {
                const value = row[column.id];
                return (
                  <TableCell
                    className={tableCell}
                    key={column.id}
                    align={column.align}
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
    <div className={noGamesDiv}>
      <Typography>
        {props.type === "openGames"
          ? "No Games Found!"
          : "No Challenges Found!"}
      </Typography>
      <Button
        className={createButton}
        variant="contained"
        color="primary"
        disableRipple
        disableElevation
        onClick={props.handleCreate}
      >
        Create One
      </Button>
    </div>
  );
}
