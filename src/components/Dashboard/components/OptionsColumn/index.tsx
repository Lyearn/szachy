import React from "react";
import { Grid, Button } from "@material-ui/core";
import { button } from "./styles";

interface Props {
  handleVisibility: () => void;
  handleInviteFriend: () => void;
}

export default function OptionsColumn(props: Props) {
  return (
    <>
      <Grid item>
        <Button
          className={button}
          variant="contained"
          color="primary"
          disableRipple
          disableElevation
          onClick={props.handleVisibility}
        >
          Create New Game
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={button}
          variant="contained"
          color="primary"
          disableRipple
          disableElevation
          onClick={props.handleInviteFriend}
        >
          Invite a Friend
        </Button>
      </Grid>
    </>
  );
}
