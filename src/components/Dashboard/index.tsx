import React, { useState } from "react";
import { Grid, Container } from "@material-ui/core";
import NewGameDialog from "./components/NewGameDialog";
import NavBar from "../Navbar";
import GamesColumn from "./components/GamesColumn";
import OptionsColumn from "./components/OptionsColumn";
import { gridItem } from "./styles";

const Dashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inviteFriend, setInviteFriend] = useState(false);

  const handleInviteFriend = () => {
    setInviteFriend(true);
    setIsVisible(!isVisible);
  };

  const handleCloseDialog = () => {
    setInviteFriend(false);
    setIsVisible(!isVisible);
  };

  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={2} />
          <Grid item xs={7}>
            <GamesColumn
              handleVisibility={() => setIsVisible(!isVisible)}
              handleInviteFriend={handleInviteFriend}
            />
          </Grid>
          <Grid className={gridItem} item xs={3} container spacing={4}>
            <OptionsColumn
              handleVisibility={() => setIsVisible(!isVisible)}
              handleInviteFriend={handleInviteFriend}
            />
          </Grid>
        </Grid>
        <NewGameDialog
          isOpen={isVisible}
          inviteFriends={inviteFriend}
          closeDialog={handleCloseDialog}
        />
      </Container>
    </>
  );
};

export default Dashboard;
