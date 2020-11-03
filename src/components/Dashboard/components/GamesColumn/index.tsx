import React, { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import OpenGames from "./OpenGames";
import { appBar } from "./styles";

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

interface Props {
  handleVisibility: () => void;
  handleInviteFriend: () => void;
}

export default function GamesColumm(props: Props) {
  const [value, setValue] = useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar className={appBar} position="static" color="transparent">
        <Tabs
          centered
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Open Games" disableRipple />
          <Tab label="Challenges" disableRipple />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <OpenGames type="openGames" handleCreate={props.handleVisibility} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OpenGames type="challenges" handleCreate={props.handleInviteFriend} />
      </TabPanel>
    </>
  );
}
