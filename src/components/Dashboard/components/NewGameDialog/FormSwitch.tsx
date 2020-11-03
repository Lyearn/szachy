import React, { useState } from "react";
import { Switch, Grid, Typography } from "@material-ui/core";
import { useField } from "formik";
import { itemContainer, itemComponent, itemName } from "./styles";

interface Props {
  name?: string;
  label: string;
  defaultValue: boolean;
}

function SwitchComponent(props: Props) {
  const [field, meta, helpers] = useField(props.label);

  const [value, setValue] = useState(props.defaultValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
    helpers.setValue(event.target.checked);
    helpers.setTouched(true);
  };

  return (
    <Switch
      checked={value}
      onChange={handleChange}
      color="primary"
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
}

export default function FormSwitch(props: Props) {
  return (
    <Grid item container xs={12} className={itemContainer}>
      <Grid item xs={4} className={itemName}>
        <Typography>{props.name}</Typography>
      </Grid>
      <Grid item xs={7} className={itemComponent}>
        <SwitchComponent
          label={props.label}
          defaultValue={props.defaultValue}
        />
      </Grid>
    </Grid>
  );
}
