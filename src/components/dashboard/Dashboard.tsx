import React, { useState } from "react";
import {
  Grid,
  Container,
  Button,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import OpenGames from "./components/OpenGames";
import NewGameDialog from "./components/NewGameDialog";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={index} {...other}>
      {value === index && children}
    </div>
  );
}

const Dashboard: React.FC = () => {
  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [inviteFriend, setInviteFriend] = useState(false);

  const handleCreateGame = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none", marginTop: -8 }}
      >
        <Toolbar style={{ padding: "0px 0px 0px 16px" }}>
          <Grid container>
            <Grid
              item
              xs={11}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">Szachy</Typography>
            </Grid>
            <Grid
              item
              xs={1}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="text" disableRipple size="large">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={2} />
          <Grid item xs={7}>
            <AppBar
              position="static"
              color="transparent"
              style={{ boxShadow: "none" }}
            >
              <Tabs
                centered
                value={value}
                onChange={handleCreateGame}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Open Games" disableRipple />
                <Tab label="Challenges" disableRipple />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <OpenGames
                type="openGames"
                handleCreate={() => setIsVisible(!isVisible)}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <OpenGames type="challenges" handleCreate={handleInviteFriend} />
            </TabPanel>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            container
            spacing={4}
          >
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ width: 200, borderRadius: 4 }}
                disableRipple
                disableElevation
                onClick={() => setIsVisible(!isVisible)}
              >
                Create New Game
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ width: 200, borderRadius: 4 }}
                disableRipple
                disableElevation
                onClick={handleInviteFriend}
              >
                Invite a Friend
              </Button>
            </Grid>
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
