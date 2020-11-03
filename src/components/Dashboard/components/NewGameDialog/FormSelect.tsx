import React, { useState } from "react";
import { Select, MenuItem, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useField } from "formik";
import { itemContainer, itemComponent, itemName, formSelect } from "./styles";

interface Options {
  label: string;
  value: string;
}

interface Props {
  name?: string;
  label: string;
  defaultValue: string;
  options: Options[];
}

const useStyles = makeStyles({
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
});

function SelectComponent(props: Props) {
  const classes = useStyles();

  const [field, meta, helpers] = useField(props.label);

  const [value, setValue] = useState(props.defaultValue);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    helpers.setValue(event.target.value as string);
    helpers.setTouched(true);
  };

  return (
    <Select
      classes={{ select: classes.select }}
      className={formSelect}
      variant="outlined"
      value={value}
      onChange={handleChange}
    >
      {props.options.map((item: any) => {
        return <MenuItem value={item.value}>{item.label}</MenuItem>;
      })}
    </Select>
  );
}

export default function FormSelect(props: Props) {
  return (
    <Grid item container xs={12} className={itemContainer}>
      <Grid item xs={4} className={itemName}>
        <Typography>{props.name}</Typography>
      </Grid>
      <Grid item xs={7} className={itemComponent}>
        <SelectComponent
          label={props.label}
          options={props.options}
          defaultValue={props.defaultValue}
        />
      </Grid>
    </Grid>
  );
}
