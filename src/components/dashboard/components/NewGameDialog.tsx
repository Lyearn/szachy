import React, { useState } from "react";
import { useField, Form, Formik, Field, useFormikContext } from "formik";
import {
  Dialog,
  Grid,
  Button,
  Slider,
  Switch,
  Select,
  Typography,
  MenuItem,
  IconButton,
  TextField,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
});

const variantOptions = [
  {
    label: "Standard",
    value: "standard",
  },
  {
    label: "Others",
    value: "others",
  },
];

const timeControlOptions = [
  {
    label: "Real time",
    value: "real time",
  },
  {
    label: "Correspondance",
    value: "correspondance",
  },
  {
    label: "Unlimited",
    value: "unlimited",
  },
];

const sideOptions = [
  {
    label: "Random",
    value: "random",
  },
  {
    label: "White",
    value: "white",
  },
  {
    label: "Black",
    value: "black",
  },
];

const FormSelect = (props: any) => {
  const classes = useStyles();

  const [field, meta, helpers] = useField(props.name);

  const [value, setValue] = useState(props.defaultValue);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    helpers.setValue(event.target.value as string);
    helpers.setTouched(true);
  };

  return (
    <Select
      classes={{ select: classes.select }}
      style={{ width: "100%", height: 40 }}
      variant="outlined"
      value={value}
      onChange={handleChange}
    >
      {props.options.map((item: any) => {
        return <MenuItem value={item.value}>{item.label}</MenuItem>;
      })}
    </Select>
  );
};

const FormSwitch = (props: any) => {
  const [field, meta, helpers] = useField(props.name);

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
};

const FormInput = (props: any) => {
  const [value, setValue] = useState(props.defaultValue);
  return (
    <TextField
      id="outlined-search"
      style={{ width: "100%", height: 40, cursor: "pointer" }}
      value={value}
      size="small"
      variant="outlined"
    />
  );
};

const FormSlider = (props: any) => {
  const [field, meta, helpers] = useField(props.name);
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
      style={{
        visibility: timeControl === "unlimited" ? "hidden" : "visible",
      }}
      disabled={timeControl === "unlimited" ? true : false}
      step={1}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="continuous-slider"
    />
  );
};

interface FormValues {
  variant: string;
  timeControl: string;
  timeMins?: string;
  timeDays?: string;
  increment?: string;
  side: string;
  soloPlay: boolean;
  inviteFriend?: string;
}

interface Props {
  isOpen: boolean;
  closeDialog: any;
  inviteFriends: boolean;
}

const NewGameDialog = (props: Props) => {
  const formInitialValues: FormValues = {
    variant: "standard",
    timeControl: "real time",
    timeMins: "15",
    timeDays: "2",
    increment: "5",
    side: "random",
    soloPlay: false,
    inviteFriend: "",
  };

  const handleSubmit = (values: FormValues) => {
    let tempValues = { ...values };
    if (values.timeControl === "unlimited") {
      tempValues.timeMins = "";
      tempValues.timeDays = "";
      tempValues.increment = "";
      console.log(tempValues);
    } else if (values.timeControl === "correspondance") {
      tempValues.timeMins = "";
      tempValues.increment = "";
      console.log(tempValues);
    } else {
      tempValues.timeDays = "";
      console.log(tempValues);
    }
  };

  return (
    <Dialog open={props.isOpen} onClose={props.closeDialog}>
      <MuiDialogTitle disableTypography>
        <Typography style={{ margin: 0 }} variant="h6">
          Create New Game
        </Typography>
        {props.isOpen ? (
          <IconButton
            disableRipple
            aria-label="close"
            onClick={props.closeDialog}
            style={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
      <Grid container>
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values }) => (
            <Form style={{ width: "100%" }}>
              <Grid
                item
                container
                xs={12}
                style={{ width: 400, margin: "0px 10px 10px" }}
              >
                <Grid
                  item
                  xs={4}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>Variant</Typography>
                </Grid>
                <Grid item xs={7} style={{ width: "100%" }}>
                  <FormSelect
                    style={{ width: "100%" }}
                    name="variant"
                    label="variant"
                    options={variantOptions}
                    defaultValue={formInitialValues.variant}
                  />
                </Grid>
              </Grid>
              <Grid item container xs={12} style={{ width: 400, margin: 10 }}>
                <Grid
                  item
                  xs={4}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>Time Control</Typography>
                </Grid>
                <Grid item xs={7} style={{ width: "100%" }}>
                  <FormSelect
                    style={{ width: "100%" }}
                    name="timeControl"
                    label="timeControl"
                    options={timeControlOptions}
                    defaultValue={formInitialValues.timeControl}
                  />
                </Grid>
              </Grid>
              {values.timeControl === "real time" && (
                <>
                  <Grid
                    item
                    container
                    xs={12}
                    style={{ width: 400, margin: 10 }}
                  >
                    <Grid
                      item
                      xs={4}
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Time (Mins)</Typography>
                    </Grid>
                    <Grid item xs={7} style={{ width: "100%" }}>
                      <FormSlider
                        style={{ width: "100%" }}
                        name="timeMins"
                        label="timeMins"
                        limits={{ max: 100, min: 1 }}
                        defaultValue={formInitialValues.timeMins}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    style={{ width: 400, margin: 10 }}
                  >
                    <Grid
                      item
                      xs={4}
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Increment</Typography>
                    </Grid>
                    <Grid item xs={7} style={{ width: "100%" }}>
                      <FormSlider
                        style={{ width: "100%" }}
                        name="increment"
                        label="increment"
                        limits={{ max: 25, min: 1 }}
                        defaultValue={formInitialValues.increment}
                      />
                    </Grid>
                  </Grid>
                </>
              )}
              {values.timeControl === "correspondance" && (
                <Grid item container xs={12} style={{ width: 400, margin: 10 }}>
                  <Grid
                    item
                    xs={4}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Time (Days)</Typography>
                  </Grid>
                  <Grid item xs={7} style={{ width: "100%" }}>
                    <FormSlider
                      style={{ width: "100%" }}
                      name="timeDays"
                      label="timeDays"
                      limits={{ max: 20, min: 1 }}
                      defaultValue={formInitialValues.timeDays}
                    />
                  </Grid>
                </Grid>
              )}
              <Grid item container xs={12} style={{ width: 400, margin: 10 }}>
                <Grid
                  item
                  xs={4}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography>Side</Typography>
                </Grid>
                <Grid item xs={7} style={{ width: "100%" }}>
                  <FormSelect
                    style={{ width: "100%" }}
                    name="side"
                    label="side"
                    options={sideOptions}
                    defaultValue={formInitialValues.side}
                  />
                </Grid>
              </Grid>
              {props.inviteFriends ? (
                <Grid item container xs={12} style={{ width: 400, margin: 10 }}>
                  <Grid
                    item
                    xs={4}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Invite friend</Typography>
                  </Grid>
                  <Grid item xs={7} style={{ width: "100%" }}>
                    <Field as={FormInput} />
                  </Grid>
                </Grid>
              ) : (
                <Grid item container xs={12} style={{ width: 400, margin: 10 }}>
                  <Grid
                    item
                    xs={4}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Solo Play</Typography>
                  </Grid>
                  <Grid item xs={7} style={{ width: "100%" }}>
                    <FormSwitch
                      style={{ width: "100%" }}
                      name="soloPlay"
                      label="soloPlay"
                      defaultValue={formInitialValues.soloPlay}
                    />
                  </Grid>
                </Grid>
              )}
              <Grid
                item
                xs={12}
                style={{
                  width: 400,
                  margin: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ width: 200, borderRadius: 4 }}
                  disableRipple
                  disableElevation
                >
                  Create
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Dialog>
  );
};

export default NewGameDialog;
