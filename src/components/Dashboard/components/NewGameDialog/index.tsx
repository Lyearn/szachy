import React from "react";
import { Form, Formik } from "formik";
import {
  Dialog,
  Grid,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import FormSelect from "./FormSelect";
import FormSwitch from "./FormSwitch";
import FormInput from "./FormInput";
import FormSlider from "./FormSlider";
import { dialogTitle, dialogCloseIcon, form, grid, button } from "./styles";

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

interface FormValues {
  variant: string;
  timeControl: string;
  timeMins?: number;
  timeDays?: number;
  increment?: number;
  side: string;
  soloPlay: boolean;
  inviteFriend?: string;
}

interface Props {
  isOpen: boolean;
  closeDialog: () => void;
  inviteFriends: boolean;
}

const NewGameDialog = (props: Props) => {
  const formInitialValues: FormValues = {
    variant: "standard",
    timeControl: "real time",
    timeMins: 15,
    timeDays: 2,
    increment: 5,
    side: "random",
    soloPlay: false,
    inviteFriend: "",
  };

  const handleSubmit = (values: FormValues) => {
    let tempValues = { ...values };
    if (values.timeControl === "unlimited") {
      tempValues.timeMins = undefined;
      tempValues.timeDays = undefined;
      tempValues.increment = undefined;
      console.log(tempValues);
    } else if (values.timeControl === "correspondance") {
      tempValues.timeMins = undefined;
      tempValues.increment = undefined;
      console.log(tempValues);
    } else {
      tempValues.timeDays = undefined;
      console.log(tempValues);
    }
    props.closeDialog();
  };

  return (
    <Dialog open={props.isOpen} onClose={props.closeDialog}>
      <MuiDialogTitle disableTypography>
        <Typography className={dialogTitle} variant="h6">
          Create New Game
        </Typography>
        {props.isOpen ? (
          <IconButton
            disableRipple
            aria-label="close"
            onClick={props.closeDialog}
            className={dialogCloseIcon}
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
            <Form className={form}>
              <FormSelect
                name="Variant"
                label="variant"
                options={variantOptions}
                defaultValue={formInitialValues.variant}
              />
              <FormSelect
                name="Time Control"
                label="timeControl"
                options={timeControlOptions}
                defaultValue={formInitialValues.timeControl}
              />
              {values.timeControl === "real time" && (
                <>
                  <FormSlider
                    name="Time (Mins)"
                    label="timeMins"
                    limits={{ max: 100, min: 1 }}
                    defaultValue={formInitialValues.timeMins}
                  />
                  <FormSlider
                    name="Increment"
                    label="increment"
                    limits={{ max: 25, min: 1 }}
                    defaultValue={formInitialValues.increment}
                  />
                </>
              )}
              {values.timeControl === "correspondance" && (
                <FormSlider
                  name="Time (Days)"
                  label="timeDays"
                  limits={{ max: 20, min: 1 }}
                  defaultValue={formInitialValues.timeDays}
                />
              )}
              <FormSelect
                name="Side"
                label="side"
                defaultValue={formInitialValues.side}
                options={sideOptions}
              />
              {props.inviteFriends ? (
                <FormInput
                  name="Invite Friend"
                  label="inviteFriend"
                  defaultValue={formInitialValues.inviteFriend}
                />
              ) : (
                <FormSwitch
                  name="Solo Play"
                  label="soloPlay"
                  defaultValue={formInitialValues.soloPlay}
                />
              )}
              <Grid item xs={12} className={grid}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={button}
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
