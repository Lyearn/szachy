import React from "react";
import { Paper, TableContainer } from "@material-ui/core";
import { paper, tableContainer } from "./styles";
import TableContent from "./TableContent";

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
  handleCreate: () => void;
}

export default function OpenGames(props: Props) {
  return (
    <Paper className={paper}>
      <TableContainer className={tableContainer}>
        {props.type === "openGames" ? (
          <TableContent
            type={props.type}
            data={openGamesRows}
            handleCreate={props.handleCreate}
          />
        ) : (
          <TableContent
            type={props.type}
            data={challenges}
            handleCreate={props.handleCreate}
          />
        )}
      </TableContainer>
    </Paper>
  );
}
