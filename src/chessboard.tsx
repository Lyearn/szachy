import React from "react";
import WithMoveValidation from "./integrations/moveValidation";

const boardsContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50,
};

function ChessBoard() {
  return (
    <div>
      <div style={boardsContainer}>
        <WithMoveValidation />
      </div>
    </div>
  );
}

export default ChessBoard;
