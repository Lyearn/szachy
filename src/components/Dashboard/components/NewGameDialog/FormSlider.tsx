import React, { useState } from "react";
import { useField, useFormikContext } from "formik";
import { Slider, Grid, Typography } from "@material-ui/core";
import { itemContainer, itemComponent, itemName, formSlider } from "./styles";

interface Limits {
  max: number;
  min: number;
}

interface Props {
  name?: string;
  label: string;
  defaultValue: number | undefined;
  limits: Limits;
}

function SliderComponent(props: Props) {
  const [field, meta, helpers] = useField(props.label);
  const {
    values: { timeControl },
  } = useFormikContext();
  const [value, setValue] = useState(props.defaultValue);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
    helpers.setValue(newValue);
    helpers.setTouched(true);
  };

  return (
    <Slider
      min={props.limits.min}
      max={props.limits.max}
      value={value}
      className={formSlider(timeControl)}
      disabled={timeControl === "unlimited" ? true : false}
      step={1}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="continuous-slider"
    />
  );
}

export default function FormSlider(props: Props) {
  return (
    <Grid item container xs={12} className={itemContainer}>
      <Grid item xs={4} className={itemName}>
        <Typography>{props.name}</Typography>
      </Grid>
      <Grid item xs={7} className={itemComponent}>
        <SliderComponent
          label={props.label}
          limits={props.limits}
          defaultValue={props.defaultValue}
        />
      </Grid>
    </Grid>
  );
}
