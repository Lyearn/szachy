import React, { useState } from "react";
import { useField } from "formik";
import { TextField, Grid, Typography } from "@material-ui/core";
import { itemContainer, itemComponent, itemName, formInput } from "./styles";

interface Props {
  name?: string;
  label: string;
  defaultValue: string | undefined;
}

function InputComponent(props: Props) {
  const [value, setValue] = useState(props.defaultValue);
  const [field, meta, helpers] = useField(props.label);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    helpers.setValue(event.target.value as string);
    helpers.setTouched(true);
  };
  return (
    <TextField
      id="outlined-search"
      className={formInput}
      value={value}
      size="small"
      onChange={handleChange}
      variant="outlined"
    />
  );
}

export default function FormInput(props: Props) {
  return (
    <Grid item container xs={12} className={itemContainer}>
      <Grid item xs={4} className={itemName}>
        <Typography>{props.name}</Typography>
      </Grid>
      <Grid item xs={7} className={itemComponent}>
        <InputComponent label={props.label} defaultValue={props.defaultValue} />
      </Grid>
    </Grid>
  );
}
