import React from "react";
import { Toolbar, Typography, AppBar, Grid, Button } from "@material-ui/core";
import { appBar, appNameGrid, signInButton, toolBar } from "./styles";

const NavBar: React.FC = () => {
  return (
    <AppBar className={appBar} position="static" color="transparent">
      <Toolbar className={toolBar}>
        <Grid container>
          <Grid className={appNameGrid} item xs={11}>
            <Typography variant="h4">Szachy</Typography>
          </Grid>
          <Grid className={signInButton} item xs={1}>
            <Button variant="text" disableRipple size="large">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
